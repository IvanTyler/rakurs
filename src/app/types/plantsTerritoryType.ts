

export type plantsType = {
    id: string;
    path: string;
    text: string;
}

export type plantsTerritoryType = {
    id: string;
    title: string;
    desc: string;
    active: boolean;
    plants: plantsType[];
}