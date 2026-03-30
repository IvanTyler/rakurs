'use client'

import {FC} from "react";
import style from './SectionNews.module.scss'
import {rubricsResponseType} from "@/src/api/types/typesRubrics";
import {ContainerSection} from "@/src/Components/UI/Container/ContainerSection";
import {NewsManagementView} from "@/src/app/media/News/NewsManagementView/NewsManagementView";


interface SectionNewsProps {
    rubrics: rubricsResponseType;
}

export const SectionNews: FC<SectionNewsProps> = ({rubrics}) => {
    console.log('rubrics', rubrics)
    const getIdNews = rubrics.rubrics?.find(news => news.code === "news");
    console.log('getIdNews', getIdNews)

    return (

        <section className={style.sectionNews}>
            <ContainerSection className={style.containerNews}>
               <NewsManagementView IdNews={getIdNews?.id} />
            </ContainerSection>

        </section>
    )
}
