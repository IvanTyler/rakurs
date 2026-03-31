'use client'

import {FC, useEffect, useState} from "react";
import style from './PointsInterest.module.scss';
import {ContainerSection} from "@/src/Components/UI/Container/ContainerSection";
import {selectPointsApartmentsData} from "@/src/app/home/PointsInterest/data";
import {SelectionItem} from "@/src/Components/UI/SelectionItem/SelectionItem";
import {selectionItemType} from "@/src/app/types/selectionCorps";
import {MobileScrollHint} from "@/src/Components/UI/MobileScrollHint/MobileScrollHint";
import {PointsInterestItem} from "@/src/app/home/PointsInterest/PointsInterestItem/PointsInterestItem";

export const PointsInterest: FC = () => {

    const [apartmentState, setApartmentState] = useState<any[]>(selectPointsApartmentsData);

    const setActivePoints = (id: string) => {
        setApartmentState(prev => prev.map(item => ({
            ...item,
            selected: item.id === id,
        })));
    }

    const activePoints = apartmentState.find((el: selectionItemType) => el.selected) || apartmentState[0];


    const [widthWindowSize, setWidthWindowSize] = useState<number>(0);

    const [isScrollbar, setIsScrollbar] = useState(false);
    const setScrollbar = (isScroll: boolean) => setIsScrollbar(isScroll);

    useEffect(() => {
        // Проверяем, что мы на клиенте
        if (typeof window === 'undefined') return;

        setWidthWindowSize(window.innerWidth);

        const windowWidthSize = () => {
            const widthWindow = window.innerWidth;
            setWidthWindowSize(widthWindow)
        }

        windowWidthSize()

        window.addEventListener('resize', windowWidthSize)
        return () => {
            window.removeEventListener('resize', windowWidthSize)
        }
    }, [])

    const isMobileSelect = widthWindowSize <= 500;

    return (
        <section className={style.pointsInterest}>
            <ContainerSection className={style.containerPointsInterest}>
                <SelectionItem
                    className={style.pointsInterest__selection}
                    item={apartmentState}
                    setActiveItem={setActivePoints}
                    activeItem={activePoints}
                    isMobileSelect={isMobileSelect}
                />

                <PointsInterestItem
                    key={activePoints.id}
                    name={activePoints.name}
                    img={activePoints.img}
                    title={activePoints.title}
                    activeItem={activePoints.itemDesc}
                />

                {widthWindowSize <= 500 && <MobileScrollHint setIsScrollbar={setScrollbar}/>}

            </ContainerSection>
        </section>
    )
}
