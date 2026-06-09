

export type accordionItemType = {
    id: string;
    active: boolean;
    title?: string;
    desc?: string;
    name?: string;
    img?: string;
}

export type selectionItemType = {
    id: string;
    selected: boolean;
    title?: string;
    name?: string;
    floor?: number;
    footage?: number;
    img?: string;
    itemDesc?: accordionItemType[]
}