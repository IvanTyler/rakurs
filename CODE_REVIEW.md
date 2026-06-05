# Code Review — Rakurs Next.js

> Дата: 2026-06-03  
> Ветка: master  
> Стек: Next.js 16, React 19, TypeScript, TanStack Query v5, Zod, Axios, Ant Design, SCSS Modules, Tailwind CSS v4

---

## Критические баги (надо исправить)

### 1. Несуществующий тип в `newsDetailed.ts`

**Файл:** `src/api/types/newsDetailed.ts:46`

```ts
// ❌ ArticleDetailsSchema нигде не определён — только NewsDetails
export type NewsDetailsType = z.infer<typeof ArticleDetailsSchema>;

// ✅ Должно быть
export type NewsDetailsType = z.infer<typeof NewsDetails>;
```

TypeScript компилирует это благодаря `as` в вызывающем коде, но тип выводится некорректно. Это молчаливая ошибка типизации.

---

### 2. Неправильный тип `params.id` из `useParams`

**Файл:** `src/app/media/[translit]/[id]/page.tsx:24`

```ts
// ❌ useParams всегда возвращает string, не number
const newsId = params.id as number;

// ✅ Явное преобразование
const newsId = Number(params.id);
```

`as number` — это ложное приведение типа. Реальное значение останется строкой, что может сломать `fetchNewsInfo(newsId)` если API ожидает число.

---

### 3. Безопасность — токен в исходном коде

**Файл:** `src/api/AppToken.ts`

```ts
// ❌ Токен в репозитории — виден всем, у кого есть доступ к коду
export const AppToken = "e66a54282eb3dfcb12383577c08fe6c4";
```

Токен нужно вынести в переменную окружения:

```ts
// ✅ src/api/AppToken.ts
export const AppToken = process.env.NEXT_PUBLIC_APP_TOKEN ?? '';
```

И добавить в `.env.local`:
```
NEXT_PUBLIC_APP_TOKEN=e66a54282eb3dfcb12383577c08fe6c4
```

---

## Архитектурные проблемы

### 4. `useMutation` вместо `useQuery` для загрузки данных

**Файл:** `src/app/media/[translit]/[id]/page.tsx:26–54`

`useMutation` предназначен для операций с побочными эффектами (POST, PUT, DELETE). Для GET-запросов нужен `useQuery` — он даёт автоматическое кэширование, повторные попытки и корректное состояние.

```ts
// ❌ Текущий код — useMutation + useEffect + ручной mutate()
const submitMutation = useMutation({ mutationFn: () => fetchNewsInfo(newsId) }, queryClient);
useEffect(() => { submitMutation.mutate(); }, [newsId]);

// ✅ Должно быть useQuery
const { data: dataNews, isPending, isError } = useQuery({
    queryKey: ['newsInfo', newsId],
    queryFn: () => fetchNewsInfo(newsId),
    enabled: !!newsId,
}, queryClient);
```

---

### 5. Нет общего axios-инстанса — заголовки дублируются везде

Каждая из 7 функций в `Genplan.ts` и `Rubrics.ts` вручную задаёт одни и те же заголовки:

```ts
headers: { 'APPTOKEN': AppToken, 'SUBDOMAIN': 'bestcon' }
```

Правильный подход — создать один инстанс и использовать его:

```ts
// src/api/axiosInstance.ts
import axios from 'axios';
import { Host } from './Host';
import { AppToken } from './AppToken';

export const api = axios.create({
    baseURL: Host,
    headers: {
        'APPTOKEN': AppToken,
        'SUBDOMAIN': 'bestcon',
    },
});
```

После этого каждая функция сокращается:

```ts
// ✅ Было 10 строк — стало 3
export async function fetchRubrics() {
    const response = await api.get<rubricsResponseType>('/rubrics/');
    return response.data;
}
```

---

### 6. Смешение axios и нативного `fetch`

**Файл:** `src/api/Genplan.ts:46–73`

Функции `fetchHouseFloorsFilterRooms` и `fetchHouseFloorTotals` используют `fetch()`, остальные — `axios`. Это создаёт несогласованность: нет единой обработки ошибок, нет перехватчиков, нет типизации ответа.

```ts
// ❌ fetch без типа и без обработки ошибок
return fetch(url.toString(), { headers: {...} }).then(res => res.json());

// ✅ Через общий axiosInstance
export async function fetchHouseFloorsFilterRooms(id_house: string, rooms: number[]) {
    const response = await api.get<HouseFloorsType>(`/houseFloors/${id_house}`, {
        params: rooms.reduce((acc, r) => ({ ...acc, 'rooms[]': [...(acc['rooms[]'] ?? []), r] }), {} as Record<string, number[]>),
    });
    return response.data;
}
```

---

### 7. Отсутствует Zod-валидация в большинстве API-функций

Только `fetchGenplan` проверяет ответ через `GenplanDataSchema.parse()`. Все остальные возвращают `response.data` без валидации. Если API изменится, ошибки возникнут далеко от места чтения.

Созданные схемы (`houseTotalsSchema`, `houseFloorsDataSchema`, `NewsDetails`) есть, но не используются:

```ts
// ✅ Применять схему к данным
export async function fetchHouseTotals(code: string) {
    const response = await api.get(`/houseTotals/${code}`);
    return houseTotalsSchema.parse(response.data);
}
```

---

### 8. `queryClient` передаётся в каждый `useQuery`/`useMutation` вторым аргументом

**Файлы:** `Genplan.tsx`, `page.tsx` и другие

Это нестандартное использование TanStack Query. Рекомендованный способ — один раз обернуть приложение в `QueryClientProvider`, после чего все хуки будут подхватывать клиент из контекста автоматически.

```tsx
// src/app/layout.tsx или providers.tsx
<QueryClientProvider client={queryClient}>
    {children}
</QueryClientProvider>

// Тогда в компонентах:
const data = useQuery({ queryKey: ['genplan'], queryFn: fetchGenplan });
// Без второго аргумента queryClient
```

---

## Проблемы с типизацией

### 9. Использование `any` в критических местах

**Файл:** `src/Components/features/Genplan/Genplan.tsx`

```ts
// ❌ any делает тип бессмысленным
const [selectedCorps, setSelectedCorps] = useState<string | null | any>(null);
const [selectedRooms, setSelectedRooms] = useState<any[]>([]);

// ✅
const [selectedCorps, setSelectedCorps] = useState<string | null>(null);
const [selectedRooms, setSelectedRooms] = useState<number[]>([]); // судя по использованию rooms: number[]
```

---

### 10. Typo в имени типа — `GenolanDataType` вместо `GenplanDataType`

**Файл:** `src/api/types/typesGenplan.ts:94`

```ts
// ❌ Опечатка в названии
export type GenolanDataType = z.infer<typeof GenplanDataSchema>

// ✅
export type GenplanDataType = z.infer<typeof GenplanDataSchema>
```

---

## Проблемы с производительностью

### 11. `uuidv4()` вызывается на каждом рендере

**Файл:** `src/app/media/[translit]/[id]/page.tsx:36–49`

```ts
// ❌ Новые UUID генерируются при каждом ре-рендере
const breadCrumbsList: breadCrumbsType[] = [
    { id: uuidv4(), ... },
    { id: uuidv4(), ... },
];

// ✅ Обернуть в useMemo или использовать статичные ID
const breadCrumbsList = useMemo(() => [
    { id: 'bc-news', text: 'Новости', path: '/media/?tab=news', active: false },
    { id: 'bc-article', text: dataNews?.title, path: dataNews?.translit, active: false },
], [dataNews?.title, dataNews?.translit]);
```

---

### 12. `minPriceApartment` — функция вместо `useMemo`

**Файл:** `src/Components/features/Genplan/Genplan.tsx:97–106`

```ts
// ❌ Пересчитывается при каждом рендере
const minPriceApartment = () => { ... }
const minPrice = minPriceApartment();

// ✅
const minPrice = useMemo(() => {
    if (!selectedCorps || houseTotalsData.status !== 'success' || !houseTotalsData.data) return undefined;
    return Math.min(...houseTotalsData.data.totals.map(el => Number(el.min_cost)));
}, [selectedCorps, houseTotalsData.status, houseTotalsData.data]);
```

---

## Качество кода

### 13. Debug `console.log` в продакшен-коде

Найдены в следующих файлах (нужно удалить перед релизом):

| Файл | Строка | Содержимое |
|------|--------|------------|
| `src/app/media/[translit]/[id]/page.tsx` | 23 | `console.log('params', params)` |
| `src/Components/features/Genplan/Genplan.tsx` | 85 | `console.log('houseTotals queryFn called with id:', id)` |
| `src/Components/features/Genplan/Genplan.tsx` | 88 | `console.log('Skipping fetch - no id')` |
| `src/Components/features/Genplan/Genplan.tsx` | 113 | `console.log('floorData', floorData)` |
| `src/Components/features/Genplan/Genplan.tsx` | 119 | `console.log('Skipping houseFloors - no selectedCorps')` |

---

### 14. `<img>` вместо Next.js `<Image>` для банера новости

**Файл:** `src/app/media/[translit]/[id]/page.tsx:81–86`

```tsx
// ❌ Нет оптимизации изображений
<img loading='lazy' src={dataNews.thumbnail} alt={dataNews.title} ... />

// ✅ Использовать next/image (автоматически lazy + WebP + правильный размер)
import Image from 'next/image';
<Image src={dataNews.thumbnail} alt={dataNews.title} width={1200} height={600} ... />
```

---

### 15. Утилита `validateResponse` нигде не используется

**Файл:** `src/api/ValidateResponse.ts`

Функция написана, но не применяется ни разу. Либо удалить, либо использовать в `fetch`-запросах.

---

### 16. Запрос года и формат даты разбиты на два вызова

**Файл:** `src/app/media/[translit]/[id]/page.tsx:62–65`

```ts
// Дублирование: date_article парсится дважды
const date_article = new Date(dataNews.date_article);
const getYear = date_article.getFullYear();
const currentDate = getCurrentDateInRussian(dataNews.date_article); // снова new Date() внутри
```

Проще вернуть полную дату из утилиты или добавить параметр `includeYear`:

```ts
// Или просто расширить утилиту
export const formatDateRu = (dateStr: string) => {
    const d = new Date(dateStr);
    const day = d.getDate();
    const month = monthNames[d.getMonth()];
    const year = d.getFullYear();
    return `${day} ${month} ${year}`;
};
```

---

### 17. Имя компонента `FetchNewsInfo` не отражает назначение

**Файл:** `src/app/media/[translit]/[id]/page.tsx:19`

По конвенции Next.js, дефолтный экспорт страницы — это **страница**, а не функция фетчинга. Рекомендуется назвать `NewsDetailPage` или `NewsArticlePage`.

---

## Приоритизация

| Приоритет | Пункт | Почему |
|-----------|-------|--------|
| 🔴 Критично | 1. Баг с `ArticleDetailsSchema` | Неверная типизация |
| 🔴 Критично | 2. `params.id as number` | Тихое несоответствие типа |
| 🔴 Критично | 3. Токен в коде | Безопасность |
| 🟠 Важно | 4. `useMutation` вместо `useQuery` | Некорректная семантика |
| 🟠 Важно | 5–6. Нет общего axios-инстанса | Дублирование кода |
| 🟠 Важно | 7. Нет Zod-валидации в API | Хрупкость к изменениям API |
| 🟡 Средне | 8. `queryClient` как аргумент | Нестандартное использование |
| 🟡 Средне | 9–10. `any` и typo | Типизация |
| 🟡 Средне | 11–12. useMemo | Производительность |
| 🟢 Низко | 13. console.log | Чистота кода |
| 🟢 Низко | 14–17. Мелочи | Улучшение качества |
