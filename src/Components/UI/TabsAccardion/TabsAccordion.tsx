'use client'

import {FC, useState} from "react";
import style from './TabsAccordion.module.scss';
import {ListItems} from "@/src/Components/List/ListItems";
import {TabsAccordionItem} from "@/src/Components/UI/TabsAccordionItem/TabsAccordionItem";
import {clsx} from "clsx";


interface ITabsAccordion {
    dataTabs: any[];
    className?: string;
    classNameAccordionItem?: string;
    isShowSlide?: boolean
}

export const TabsAccordion: FC<ITabsAccordion> = (
    {
        dataTabs,
        className,
        isShowSlide,
        classNameAccordionItem
    }
) => {

    const [tabs, setTabs] = useState(dataTabs);

    const getIdActiveTab = (id: string) => {
        setTabs(prev => prev.map(item => ({
            ...item,
            active: item.id === id ? !item.active : false
        })));
    };


    return (
        <ul className={clsx(style.tabsAccordion, className)}>
            <ListItems
                items={tabs}
                renderItem={(item: any) =>
                    <TabsAccordionItem
                        key={item.id}
                        item={item}
                        getIdTab={getIdActiveTab}
                        isShowSlide={isShowSlide}
                        className={classNameAccordionItem}
                    />}
            />
        </ul>
    )
}
