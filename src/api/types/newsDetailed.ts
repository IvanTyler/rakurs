import { z } from 'zod';

// Схема для рубрики
const RubricSchema = z.object({
    id: z.number(),
    title: z.string()
});

// Схема для тегов
const TagsSchema = z.object({
    count: z.number(),
    tags: z.array(z.string())
});

// Схема для файлов (массив)
const FileSchema = z.array(z.unknown());

// Схема для параметров
const ParamsSchema = z.record(z.unknown());

// Основная схема для статьи
export const NewsDetails = z.object({
    id: z.number(),
    id_rubric: z.number(),
    thumbnail: z.string().url(),
    title: z.string(),
    code: z.string(),
    translit: z.string(),
    announce: z.string(),
    desc: z.string(),
    date_article: z.string(),
    meta_title: z.string(),
    meta_desc: z.string(),
    meta_keys: z.string(),
    meta_img: z.string(),
    active: z.number(),
    deletionMark: z.number(),
    datecreate: z.string(),
    files: FileSchema,
    rubric: RubricSchema,
    params: ParamsSchema,
    tags: TagsSchema
});

// Типы
export type NewsDetailsType = z.infer<typeof ArticleDetailsSchema>;
export type Rubric = z.infer<typeof RubricSchema>;
export type Tags = z.infer<typeof TagsSchema>;
