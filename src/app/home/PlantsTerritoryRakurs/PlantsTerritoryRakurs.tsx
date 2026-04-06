'use client'

import {FC, useEffect, useState} from "react";
import style from './PlantsTerritoryRakurs.module.scss'
import {ContainerSection} from "@/src/Components/UI/Container/ContainerSection";
import {TabsAccordion} from "@/src/Components/UI/TabsAccardion/TabsAccordion";
import {plantsTerritoryData} from "@/src/app/home/PlantsTerritoryRakurs/data";
import {plantsTerritoryType} from "@/src/app/types/plantsTerritoryType";
import {useWindowWidth} from "@/src/hooks/WidthWindowSize";

export const PlantsTerritoryRakurs: FC = () => {


    const { isMobileContent } = useWindowWidth(1030);

    return (
        <section className={style.plantsTerritoryRakurs}>
            <ContainerSection className={style.containerPlantsTerritoryRakurs}>
                <h2 className={style.plantsTerritoryRakurs__title}>
                    Растения <br/>
                    на территории <br/>
                    Rakurs
                </h2>
                <span className={style.plantsTerritoryRakurs__subTitle}>
                    Проектом предусмотрено <br/>
                    сохранение 52 деревьев <br/>
                    и 33 кустарников
                </span>

                <TabsAccordion
                    dataTabs={plantsTerritoryData}
                    className={style.accordion}
                    isShowSlide={isMobileContent}
                />
            </ContainerSection>
        </section>
    )
}
