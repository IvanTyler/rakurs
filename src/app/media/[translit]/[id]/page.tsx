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

    console.log('dataNews', dataNews)

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
    ]


    useEffect(() => {
        submitMutation.mutate();
    }, [newsId]);

    console.log('submitMutation.status', submitMutation.status)
    console.log('breadCrumbsList', breadCrumbsList)

    if (submitMutation.isPending) return <Preloader />
    if (submitMutation.isError) return <p>Не удалось загрузить новость</p>

    if (submitMutation.status === 'success') {
        return (
            <section className={style.newsDetailed}>
                <div className={style.newsDetailed__wrapperImg}>
                    <BreadCrumbs
                        dataBreadCrumbs={breadCrumbsList}
                        classBreadCrumbs={style.newsDetailed__breadCrumbs}
                    />
                    <img
                        loading='lazy'
                        src={dataNews?.thumbnail}
                        alt={dataNews?.title}
                        clasName={style.newsDetailed__imgHead}
                    />
                </div>
                <ContainerSection className={style.containerNewsDetailed}>

                </ContainerSection>
            </section>
        )
    }
}

export default FetchNewsInfo;
