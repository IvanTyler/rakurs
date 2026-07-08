import {z} from "zod";

// Одна фотография внутри альбома
const AlbumItemSchema = z.object({
    id: z.number(),
    title: z.string(),
    desc: z.string(),
    btn_text: z.string(),
    link: z.string(),
    date: z.string(),
    datecreate: z.string(),
    file: z.string(),
});
export type AlbumItemType = z.infer<typeof AlbumItemSchema>;

// Один альбом (пост динамики строительства за месяц)
const AlbumSchema = z.object({
    id: z.number(),
    code: z.string(),
    title: z.string(),
    desc: z.string(),
    dateGallery: z.string(),
    file: z.string(),
    items: z.array(AlbumItemSchema),
});
export type AlbumType = z.infer<typeof AlbumSchema>;

const AlbumsBlockSchema = z.object({
    albums: z.array(AlbumSchema),
    value: z.string(),
});

// Остальные ключи contents ("title", "text", "title_feb", "text_feb"...) —
// динамические текстовые блоки одинаковой формы { value: string }
const DynamicTextFieldSchema = z.object({
    value: z.string(),
});

const ContentsSchema = z.object({
    albums: AlbumsBlockSchema,
}).catchall(DynamicTextFieldSchema);

const ContentBlockSchema = z.object({
    title: z.string(),
    code: z.string(),
    contents: ContentsSchema,
});

const ConstructionDetailsBlocksSchema = z.object({
    content: ContentBlockSchema,
});

export const ConstructionDetailsSchema = z.object({
    id: z.number(),
    title: z.string(),
    code: z.string(),
    link: z.string(),
    redirect: z.string(),
    meta_title: z.string(),
    meta_desc: z.string(),
    meta_keys: z.string(),
    blocks: ConstructionDetailsBlocksSchema,
});
export type ConstructionDetailsType = z.infer<typeof ConstructionDetailsSchema>;
