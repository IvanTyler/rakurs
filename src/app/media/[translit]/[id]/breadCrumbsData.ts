import {v4 as uuidv4} from "uuid";
import {breadCrumbsType} from "@/src/Components/UI/BreadCrumbs/type";

export const breadCrumbsList: breadCrumbsType[] = [
    {
        id: uuidv4(),
        text: 'Новости',
        path: '/media/?tab=news',
        active: false,
    },
    {
        id: uuidv4(),
        text: 'Медиа',
        path: '/media',
        active: false,
    },
]
