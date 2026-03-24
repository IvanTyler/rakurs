import { z } from "zod";

// Схема для одной рубрики
const RubricSchema = z.object({
    id: z.number(),
    code: z.string(),
    title: z.string(),
    parent: z.number(),
    folder: z.number(),
    datecreate: z.string(),
    itemsCount: z.number(),
});

export type RubricType = z.infer<typeof RubricSchema>;

// Схема для ответа API с рубриками
const RubricsResponseSchema = z.object({
    count: z.number(),
    rubrics: z.array(RubricSchema),
});

export type rubricsResponseType = z.infer<typeof RubricsResponseSchema>;