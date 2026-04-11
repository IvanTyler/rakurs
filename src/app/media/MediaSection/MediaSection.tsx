'use client'

import {FC} from "react";
import style from './MediaSection.module.scss'
import {ContainerSection} from "@/src/Components/UI/Container/ContainerSection";
import {BreadCrumbs} from "@/src/Components/UI/BreadCrumbs/BreadCrumbs";
import {TabsMedia} from "@/src/Components/UI/TabsMedia/TabsMedia";
import {breadCrumbsList} from "../MediaContent/breadCrumbsData";
import {tabsMediaList} from "../MediaContent/tabsMediaData";

export const MediaSection: FC = () => {

    return (
        <section className={style.mediaSection}>
            <ContainerSection className={style.containerMedia}>
                <BreadCrumbs dataBreadCrumbs={breadCrumbsList} />
                <TabsMedia dataTabs={tabsMediaList} />
            </ContainerSection>
        </section>
    )
}
