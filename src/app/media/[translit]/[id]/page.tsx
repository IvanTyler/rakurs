'use client'

import {FC, useEffect} from "react";
import {useParams} from "next/navigation";
import {useMutation} from "@tanstack/react-query";
import {fetchNewsInfo} from "@/src/api/Rubrics";
import {queryClient} from "@/src/api/queryClient";
import style from './newsDetailed.module.scss'
import {Preloader} from "../../../../Components/UI/Preloader/Preloader";
import {ContainerSection} from "../../../../Components/UI/Container/ContainerSection";
import {breadCrumbsType} from "@/src/Components/UI/BreadCrumbs/type";
import {v4 as uuidv4} from "uuid";
import {BreadCrumbs} from "@/src/Components/UI/BreadCrumbs/BreadCrumbs";
import {getCurrentDateInRussian} from "../../../../utils/dateInRussian";
import parse from "html-react-parser";
import {OtherNewsManagementView} from "@/src/app/media/News/OtherNewsManagementView/OtherNewsManagementView";


const FetchNewsInfo: FC = () => {

    const params = useParams();
    const newsId = params.id as number;

    const submitMutation = useMutation({
        mutationFn: () => fetchNewsInfo(newsId),
        onError: (error) => {
            console.log('Error submitting entry info data new:', error)
        }
    }, queryClient);


    const dataNews = submitMutation.data;

    const breadCrumbsList: breadCrumbsType[] = [
        {
            id: uuidv4(),
            text: 'Новости',
            path: '/media/?tab=news',
            active: false,
        },
        {
            id: uuidv4(),
            text: dataNews?.title,
            path: dataNews?.translit,
            active: false,
        },
    ];


    useEffect(() => {
        submitMutation.mutate();
    }, [newsId]);


    if (submitMutation.isPending) return <Preloader />
    if (submitMutation.isError) return <p>Не удалось загрузить новость</p>

    if (submitMutation.status === 'success') {

        const date_article = new Date(dataNews.date_article)
        const getYear = date_article.getFullYear();

        const currentDate = getCurrentDateInRussian(dataNews.date_article)

        return (
            <section className={style.newsDetailed}>
                <BreadCrumbs
                    dataBreadCrumbs={breadCrumbsList}
                    classBreadCrumbs={style.newsDetailed__breadCrumbs}
                />

                <ContainerSection className={style.containerNewsDetailed}>
                    <h2 className={style.newsDetailed__title}>
                        {dataNews.title}
                    </h2>
                    <span className={style.newsDetailed__date}>
                        {currentDate} {getYear}
                    </span>
                    <img
                        loading='lazy'
                        src={dataNews.thumbnail}
                        alt={dataNews.title}
                        className={style.newsDetailed__banner}
                    />
                    <div className={style.newsDetailed__desc}>
                        {parse(dataNews.desc)}
                    </div>
                </ContainerSection>

                <OtherNewsManagementView />
            </section>
        )
    }
}

export default FetchNewsInfo;
