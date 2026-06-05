import { z } from 'zod';

const GalleryItemSchema = z.object({
    id: z.number(),
    title: z.string(),
    desc: z.string(),
    btn_text: z.string(),
    link: z.string(),
    date: z.string(),
    datecreate: z.string(),
    file: z.string(),
    sizes: z.array(z.unknown())
});

const GalleryContentsSchema = z.object({
    items: z.array(GalleryItemSchema),
    value: z.string()
});

export const SliderMenuResponseSchema = z.object({
    id: z.number(),
    code: z.string(),
    title: z.string(),
    menu: z.object({
        title: z.string(),
        code: z.string(),
        contents: z.object({
            gallery: GalleryContentsSchema
        })
    })
});

export type SliderMenuResponse = z.infer<typeof SliderMenuResponseSchema>;
export type GalleryItemType = z.infer<typeof GalleryItemSchema>;
