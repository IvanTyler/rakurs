'use client';


import {FC, useEffect, useState} from "react";
import style from './FloorPlans.module.scss'
import {ContainerSection} from "@/src/Components/UI/Container/ContainerSection";
import {ContentTabsType} from "@/src/app/types/rakursConceptTabs";
import {dataFloorPlans} from "@/src/app/home/FloorPlans/data";
import Image from "next/image";
import {clsx} from "clsx";
import {ContentTabs} from "@/src/Components/UI/ContentTabs/ContentTabs";
import {LinkToPage} from "@/src/Components/UI/LinkToPage/LinkToPage";

export const FloorsPlans: FC = () => {
    const [dataTabs, setDataTabs] = useState<ContentTabsType[]>(dataFloorPlans);

    const getIdActiveTab = (id: string) => {
        setDataTabs(prev => prev.map((item: any) => {
            return {
                ...item,
                active: item.id === id,
            }
        }));
    }

    const activeTab = dataTabs.find(tab => tab.active) || dataTabs[0];

    const [widthWindowSize, setWidthWindowSize] = useState<number>(0);


    useEffect(() => {
        // Проверяем, что мы на клиенте
        if (typeof window === 'undefined') return;

        setWidthWindowSize(window.innerWidth);

        const windowWidthSize = () => {
            const widthWindow = window.innerWidth;
            setWidthWindowSize(widthWindow)
        }

        window.addEventListener('resize', windowWidthSize)
        return () => {
            window.removeEventListener('resize', windowWidthSize)
        }
    }, [])

    const isShowDesc = widthWindowSize <= 550;

    return (
        <section className={clsx(style.floorsPlans, style[activeTab.name as keyof typeof style])}>
            <ContainerSection className={style.containerFloorsPlans}>
                <p className={style.floorsPlans__desc}>
                    Компактные, но продуманные до деталей студии в этом доме
                    созданы для тех, кто ценит свободу, личное пространство и
                    комфорт. Благодаря панорамным окнам и грамотным планировкам
                    они наполнены естественным светом весь день. Идеальный выбор для
                    уединения, работы над собой и отдыха в гармонии с собой и городом.
                </p>

                {widthWindowSize >= 550 && <div className={style.floorsPlans__infoPlan}>
					<span className={style.floorsPlans__price}>{activeTab.price}</span>
					<span className={style.floorsPlans__sizeRange}>{activeTab.sizeRange}</span>
				</div>}

                {widthWindowSize >= 550 &&
					<div className={style.floorsPlans__wrapperImg}>
						<img
							key={activeTab.id}
							loading='lazy'
							className={style.floorsPlans__img}
							src={activeTab.images[0].path}
							alt={activeTab.title}
						/></div>
                }

                <ContentTabs
                    tabs={dataTabs}
                    getTabId={getIdActiveTab}
                    className={clsx(style.floorsPlans__tabs)}
                    isShowDesc={isShowDesc}
                />

                <LinkToPage classname={style.floorsPlans__link}>
                    Выбрать квартиру
                </LinkToPage>

            </ContainerSection>
        </section>
    )
}
