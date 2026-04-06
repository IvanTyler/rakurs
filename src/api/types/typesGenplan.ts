import {z} from "zod";
import {fetchHouseFloors} from "@/src/api/Genplan";

const PointSchema = z.object({
    title: z.string(),
    code: z.string(),
    desc: z.string(),
    href: z.string(),
    top: z.union([z.string(), z.number()]),
    left: z.union([z.string(), z.number()]),
    polygon: z.string(),
});
export type pointsType = z.infer<typeof PointSchema>

// Схема для распарсенного general.value
const ParsedGeneralPlanSchema = z.object({
    file: z.string(),
    viewBox: z.string(),
    points: z.record(z.string(), PointSchema)
});
export type generalPlanType = z.infer<typeof ParsedGeneralPlanSchema>

const filterFloorsSchema = z.object({
    file: z.string(),
    viewBox: z.string(),
    points: z.array(z.nullable(PointSchema))
});
export type filterFloorsType = z.infer<typeof filterFloorsSchema>

const GeneralBlockSchema = z.object({
    title: z.string(),
    code: z.string(),
    contents: z.object({
        general: z.object({
            value: z.string().transform((str) => {
                try {
                    return JSON.parse(str);
                } catch {
                    return str;
                }
            }).pipe((ParsedGeneralPlanSchema))
        })
    })
});
export type GenplanDataType = z.infer<typeof GeneralBlockSchema>

// Схема для select_floor (выбор этажа)
const SelectFloorBlockSchema = z.object({
    title: z.string(),
    code: z.string(),
    contents: z.record(z.string(), z.object({
        value: z.string().transform((str) => {
            try {
                return JSON.parse(str);
            } catch {
                return str;
            }
        })
    }))
});
export type SelectFloorBlockType = z.infer<typeof SelectFloorBlockSchema>

// Схема для genplan_lot
const GenplanLotBlockSchema = z.object({
    title: z.string(),
    code: z.string(),
    contents: z.record(z.string(), z.object({
        value: z.string().transform((str) => {
            try {
                return JSON.parse(str);
            } catch {
                return str;
            }
        })
    }))
});
export type GenplanLotBlockType = z.infer<typeof GenplanLotBlockSchema>

export const GenplanDataSchema = z.object({
    id: z.number(),
    title: z.string(),
    code: z.string(),
    link: z.string(),
    redirect: z.string(),
    meta_title: z.string(),
    meta_desc: z.string(),
    meta_keys: z.string(),
    blocks: z.object({
        general: GeneralBlockSchema,
        select_floor: SelectFloorBlockSchema,
        genplan_lot: GenplanLotBlockSchema
    })
});
export type GenolanDataType = z.infer<typeof GenplanDataSchema>


const TotalSchema = z.object({
    count: z.number(),
    max_cost: z.string(),
    max_square: z.string(),
    min_cost: z.string(),
    min_square: z.string(),
    rooms: z.string()
});
export type houseTotalType = z.infer<typeof TotalSchema>

// Основная схема
export const houseTotalsSchema = z.object({
    id: z.number(),
    num: z.string(),
    date_end: z.string(),
    totals: z.array(TotalSchema),
    countPlaces: z.number()
});
export type houseTotalsResponse = z.infer<typeof houseTotalsSchema>;



const houseFloorsSchema = z.object({
    countPlaces: z.number()
});

export const houseFloorsDataSchema = z.record(
    z.string(),
    houseFloorsSchema
);

export type HouseFloorsType = z.infer<typeof houseFloorsDataSchema>;
