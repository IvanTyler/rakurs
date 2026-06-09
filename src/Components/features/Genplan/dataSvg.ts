import {v4 as uuidv4} from "uuid";

export type SvgItemType = {
    id: string;
    active: boolean;
    name: string;
    code?: string;
    numCorps?: string;
}

export const dataSvg: SvgItemType[] = [
    {
        id: uuidv4(),
        active: true,
        name: 'left',
    },
    {
        id: uuidv4(),
        name: 'center',
        active: true,
    },
    {
        id: uuidv4(),
        name: 'right',
        active: true,
    }
];