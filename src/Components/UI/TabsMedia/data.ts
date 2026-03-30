import {v4 as uuidv4} from "uuid";
import {tabsMediaType} from "@/src/Components/UI/TabsMedia/type";

export const tabsMediaList: tabsMediaType[] = [
    {
        id: uuidv4(),
        text: 'Новости',
        params: 'news',
        active: true,
    },
    {
        id: uuidv4(),
        text: 'Динамика строительства',
        params: 'construction',
        active: false,
    },
    {
        id: uuidv4(),
        text: 'Акции',
        params: 'stock',
        active: false,
    },
]
