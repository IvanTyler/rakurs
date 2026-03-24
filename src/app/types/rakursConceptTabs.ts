
export type ContentTabsImg = {
    id: string;
    path: string;
    label?: string;
}

export type ContentTabsType = {
    id: string;
    name?: string;
    price?: string;
    sizeRange?: string;
    label: string;
    title: string;
    active: boolean;
    images: ContentTabsImg[];
    desc?: string;
}