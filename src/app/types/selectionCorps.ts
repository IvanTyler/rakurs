

export type accordionItemType = {
    id: string;
    active: boolean;
    desc?: string;
}

export type selectionItemType = {
    id: string;
    selected: boolean;
    name?: string;
    floor?: number;
    footage?: number;
    img?: string;
    itemDesc?: accordionItemType[]
}