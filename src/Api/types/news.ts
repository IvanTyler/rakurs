import { z } from 'zod';

// Схема для тегов (массив строк)
const TagSchema = z.array(z.string());

// Схема для одной статьи
const ArticleSchema = z.object({
    id: z.number(),
    id_rubric: z.number(),
    thumbnail: z.string().url(),
    title: z.string(),
    code: z.string(),
    translit: z.string(),
    announce: z.string(),
    date_article: z.string(),
    datecreate: z.string(),
    tags: TagSchema
});

// Схема для рубрики
const RubricSchema = z.object({
    id: z.number(),
    title: z.string()
});

// Схема для всего ответа
export const NewsResponseSchema = z.object({
    count: z.number(),
    articles: z.array(ArticleSchema),
    rubrics: z.record(z.string(), RubricSchema)  // ← объект, а не массив
});

// Типы
export type NewsResponse = z.infer<typeof NewsResponseSchema>;
export type NewsType = z.infer<typeof ArticleSchema>;
export type Rubric = z.infer<typeof RubricSchema>;
