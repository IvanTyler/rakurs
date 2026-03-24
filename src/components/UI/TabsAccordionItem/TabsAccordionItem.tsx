'use client'

import {FC, useEffect, useRef, useState} from "react";
import style from './TabsAccordionItem.module.scss'
import {plantsTerritoryType} from "@/src/app/types/plantsTerritoryType";
import {clsx} from "clsx";
import {Plants} from "@/src/app/home/Plants/Plants";
import {PlantsSlider} from "@/src/app/home/Plants/PlantsSlider";
import parse from 'html-react-parser';

interface TabsAccordionItem {
    className?: string;
    item: any;
    getIdTab: (item: any) => void;
    isShowSlide?: boolean;
}

export const TabsAccordionItem: FC<TabsAccordionItem> = (
    {
        item,
        getIdTab,
        isShowSlide,
        className
    }
) => {
    const elementRef = useRef<HTMLDivElement>(null);
    const [contentHeight, setContentHeight] = useState(0);

    useEffect(() => {
        if (!elementRef.current || !item.active) return;

        const updateHeight = () => {
            const height = elementRef.current!.scrollHeight;
            setContentHeight(height);
        };

        // Инициализация
        updateHeight();

        // Слушаем ресайз
        window.addEventListener('resize', updateHeight);

        return () => {
            window.removeEventListener('resize', updateHeight);
        };
    }, [item.active]); // Следим за изменением active


    return (
        <li className={clsx(style.tabsAccordionItem, className, item.active && style.active)}>
            <div className={style.tabsAccordionItem__top} onClick={() => getIdTab(item.id)}>
                <span className={clsx(style.tabsAccordionItem__title, item.active && style.active)}>{item.title}</span>

                <div className={style.tabsAccordionItem__toggle}>
                    <div
                        className={clsx(style.tabsAccordionItem__line, style.verticalLine, item.active && style.hide)}></div>
                    <div className={style.tabsAccordionItem__line}></div>
                </div>
            </div>


            <div
                className={style.tabsAccordionItem__content}
                ref={elementRef}
                style={{
                    maxHeight: item.active ? `${contentHeight}px` : '0px'
                }}
            >
                <div className={style.tabsAccordionItem__desc}>
                    {parse(item.desc)}
                </div>

                {!isShowSlide && item.data && <Plants item={item.data}/>}
                {isShowSlide && item.data && <PlantsSlider item={item.data}/>}
            </div>


        </li>
    );
};
