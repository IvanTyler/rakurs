'use client'

import {FC, useState} from "react";
import style from './SectionNews.module.scss'
import {rubricsResponseType} from "@/src/Api/types/typesRubrics";
import {useQuery} from "@tanstack/react-query";
import {fetchNews} from "@/src/Api/Rubrics";
import {queryClient} from "@/src/Api/queryClient";


interface SectionNewsProps {
    rubrics: rubricsResponseType;
}

export const SectionNews: FC<SectionNewsProps> = ({rubrics}) => {

    const getIdNews = rubrics.rubrics?.find(news => news.code === "news");

    console.log('rubrics', rubrics)

    const news = useQuery({
        queryFn: () => {
            if (!getIdNews?.id) {
                return Promise.reject(new Error('News rubric not found'));
            }
            return fetchNews([getIdNews.id]);
        },
        queryKey: ['news']
    }, queryClient)

    console.log('news', news.data)

    return (

        <section className={style.sectionNews}>


        </section>
    )
}
