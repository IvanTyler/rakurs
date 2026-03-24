import {v4 as uuidv4} from "uuid";

export const rakursConceptTabs = [
    {
        id: uuidv4(),
        name: 'district',
        label: 'район',
        title: 'Щукино',
        active: true,
        images: [
            {
                id: uuidv4(),
                path: '/images/rakurs-concept/district/image-1.webp',
                label: 'рис.1 (общий вид)',
            },
            {
                id: uuidv4(),
                path: '/images/rakurs-concept/district/image-2.webp',
                label: 'рис.2 (корпус 3)',
            },
            {
                id: uuidv4(),
                path: '/images/rakurs-concept/district/image-3.webp',
                label: 'рис.3 (вид с улицы)',
            },
        ],
        desc: `
            Район Щукино — колыбель науки. С советских времен здесь жила академическая 
            интеллигенция и работали исследовательские институты: Институт Гамалеи, Курчатовский институт и другие.
        `,
    },
    {
        id: uuidv4(),
        name: 'architecture',
        label: 'архитектура',
        title: 'Бюро СПИЧ',
        active: false,
        images: [
            {
                id: uuidv4(),
                path: '/images/rakurs-concept/architecture/image-1.webp',
                label: 'рис.1 (общий вид)',
            },
            {
                id: uuidv4(),
                path: '/images/rakurs-concept/architecture/image-2.webp',
                label: 'рис.2 (сад)',
            },
            {
                id: uuidv4(),
                path: '/images/rakurs-concept/architecture/image-3.webp',
                label: 'рис.3 (вид с улицы)',
            },
        ],
        desc: `
            Бюро СПИЧ создали ракурсную архитектуру для проекта. Харизматичные силуэты 
            трёх башен с разных ракурсов могут напомнить книги. Это не случайный образ: 
            Rakurs появится в районе, где десятилетиями формировалась интеллектуальная традиция.
        `,
    },
    {
        id: uuidv4(),
        name: 'education',
        label: 'образование',
        title: 'Школа и детский сад',
        active: false,
        images: [
            {
                id: uuidv4(),
                path: '/images/rakurs-concept/education/image-1.webp',
                label: 'рис.2 (сад)',
            },
            {
                id: uuidv4(),
                path: '/images/rakurs-concept/education/image-2.webp',
                label: 'рис.2 (сад)',
            },
            {
                id: uuidv4(),
                path: '/images/rakurs-concept/education/image-3.webp',
                label: 'рис.3 (вид с улицы)',
            },
        ],
        desc: `
            В проекте откроются собственный детский сад на 75 мест и начальная школа на 200 мест. 
            Школу создадут  по стандарту «Московская школа 2.0». Авторы архитектурного проекта – бюро СПИЧ.
        `,
    },
    {
        id: uuidv4(),
        name: 'knowledge_hub',
        label: 'пространство',
        title: 'Knowledge hub',
        active: false,
        images: [
            {
                id: uuidv4(),
                path: '/images/rakurs-concept/space/image-1.webp',
                label: 'рис.2 (сад)',
            },
            {
                id: uuidv4(),
                path: '/images/rakurs-concept/space/image-2.webp',
                label: 'рис.3 (вид с улицы)',
            },
            {
                id: uuidv4(),
                path: '/images/rakurs-concept/space/image-3.webp',
                label: 'рис.1 (общий вид)',
            },
        ],
        desc: `
            Для резидентов проекта будет создан комьюнити-центр, сердцем которого станет 
            библиотека с авторской концепцией от «Подписных изданий». 
            В пространстве будут зоны для отдыха, работы и учёбы.
        `
    },
]