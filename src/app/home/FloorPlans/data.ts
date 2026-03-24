import {v4 as uuidv4} from "uuid";
import {ContentTabsType} from "@/src/app/types/rakursConceptTabs";

export const dataFloorPlans: ContentTabsType[] = [
    {
        id: uuidv4(),
        name: 'linear',
        title: 'Линейная',
        label: 'вид на 1 сторону',
        price: 'цены от 15 040 436 ₽',
        sizeRange: '28.7–127 м²',
        active: true,
        images: [
            {
                id: uuidv4(),
                path: '/images/floor-plans/plan-1.svg',
            },
        ],
    },
    {
        id: uuidv4(),
        name: 'corner',
        title: 'Угловая',
        label: 'вид на 2 стороны',
        price: 'цены от 15 986 006 ₽',
        sizeRange: '29–109 м²',
        active: false,
        images: [
            {
                id: uuidv4(),
                path: '/images/floor-plans/plan-2.svg',
            },
        ],
    },
    {
        id: uuidv4(),
        name: 'swing',
        label: 'вид на 2 стороны',
        title: 'Распашная',
        price: 'цены от 27 328 752 ₽',
        sizeRange: '59–115 м²',
        active: false,
        images: [
            {
                id: uuidv4(),
                path: '/images/floor-plans/plan-3.svg',
            },
        ],
    },
    {
        id: uuidv4(),
        name: 'conclusion',
        label: 'вид на 3 стороны',
        title: 'Торцевая',
        price: 'цены от 36 858 515 ₽',
        sizeRange: '83–112 м²',
        active: false,
        images: [
            {
                id: uuidv4(),
                path: '/images/floor-plans/plan-4.svg',
            },
        ],
    },
]