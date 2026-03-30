'use client'

import {FC, Suspense } from "react";
import style from './TabsMedia.module.scss';
import {TabsMediaContent} from "@/src/Components/UI/TabsMedia/TabsMediaContent/TabsMediaContent";
import {tabsMediaType} from "@/src/Components/UI/TabsMedia/type";


interface TabsMediaProps {
    classNameTabs?: string;
    dataTabs: tabsMediaType[]
}

export const TabsMedia: FC<TabsMediaProps> = (props) => {
    return (
        <Suspense fallback={<div className={style.tabsMediaSkeleton}>Загрузка...</div>}>
            <TabsMediaContent {...props} />
        </Suspense>
    );
};
