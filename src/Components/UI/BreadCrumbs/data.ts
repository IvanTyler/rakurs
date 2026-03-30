import {breadCrumbsType} from "@/src/Components/UI/BreadCrumbs/type";
import {v4 as uuidv4} from "uuid";

export const breadCrumbsList: breadCrumbsType[] = [
    {
        id: uuidv4(),
        text: 'Главная',
        path: '/',
        active: false,
    },
    {
        id: uuidv4(),
        text: 'Медиа',
        path: '/media',
        active: false,
    },
]
