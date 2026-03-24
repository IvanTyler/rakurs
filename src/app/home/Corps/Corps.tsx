'use client'

import {FC, useEffect, useState} from "react";
import style from './Corps.module.scss'
import {selectionItemType} from "@/src/app/types/selectionCorps";
import {selectCorpsData} from "@/src/app/home/Corps/data";
import {CorpsItem} from "@/src/app/home/Corps/CorpsItem/CorpsItem";
import {SelectionItem} from "@/src/Components/UI/SelectionItem/SelectionItem";
import {MobileScrollHint} from "@/src/Components/UI/MobileScrollHint/MobileScrollHint";
import {clsx} from "clsx";
import {ContainerSection} from "@/src/Components/UI/Container/ContainerSection";
import {useWindowWidth} from "@/src/Hooks/WidthWindowSize";

export const Corps: FC = () => {

    const [corpsState, setCorpsState] = useState<any[]>(selectCorpsData);

    const setActiveCorps = (id: string) => {
        setCorpsState(prev => prev.map(item => ({
            ...item,
            selected: item.id === id,
        })));
    }

    const activeCorps = corpsState.find((el: selectionItemType) => el.selected) || corpsState[0];


    const [isScrollbar, setIsScrollbar] = useState(false);
    const setScrollbar = (isScroll: boolean) => setIsScrollbar(isScroll);

    const {widthWindow, isMobileContent} = useWindowWidth(760)


    const isMobileSelect = widthWindow <= 500;



    return (
        <section className={style.corpsSection}>
            <ContainerSection className={style.containerCorps}>
                <div className={clsx(style.corpsSection__wrapperCorps)}>
                    <SelectionItem
                        className={style.corpsSection__selectionItem}
                        item={corpsState}
                        setActiveItem={setActiveCorps}
                        activeItem={activeCorps}
                        isMobileSelect={isMobileSelect}
                    />
                    <CorpsItem
                        key={activeCorps.id}
                        name={activeCorps.name}
                        img={activeCorps.img}
                        title={activeCorps.title}
                        activeItem={activeCorps.itemDesc}
                    />

                    {isMobileContent && <MobileScrollHint setIsScrollbar={setScrollbar} />}
                </div>
                <h2 className={style.corpsSection__title}>
                    Здесь всё собрано  вокруг идеи знания как эстетической категории.
                </h2>
                <div className={style.corpsSection__desc}>
                    В интерьере — предметы с интеллектуальной биографией.
                    Дизайны этих объектов признаны важными произведениями
                    дизайнерской мысли  XX века — и сегодня они формируют
                    среду,  в которой хочется думать, наблюдать и чувствовать.
                </div>
            </ContainerSection>
        </section>
    )
}