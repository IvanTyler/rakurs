'use client'

import {FC} from "react";
import {useParams} from "next/navigation";
import {useQuery} from "@tanstack/react-query";
import {fetchNewsInfo} from "@/src/api/Rubrics";
import {queryClient} from "@/src/api/queryClient";
import {Preloader} from "@/src/Components/UI/Preloader/Preloader";
import {breadCrumbsType} from "@/src/Components/UI/BreadCrumbs/type";
import {getCurrentDateInRussian} from "@/src/utils/dateInRussian";
import parse from "html-react-parser";
import {OtherNewsManagementView} from "@/src/app/media/News/OtherNewsManagementView/OtherNewsManagementView";
import {PostDetail} from "@/src/Components/List/PostDetail/PostDetail";
import {tabTypesUrlParamEnum} from "@/src/app/media/types/enums";

const NewsDetailPage: FC = () => {

    const params = useParams();
    const newsId = Number(params.id);

    const newsQuery = useQuery({
        queryKey: ['newsInfo', newsId],
        queryFn: () => fetchNewsInfo(newsId),
        enabled: !!newsId,
    }, queryClient);

    const dataNews = newsQuery.data;

    const breadCrumbsList: breadCrumbsType[] = [
        {
            id: 'bc-news',
            text: 'Новости',
            path: `/media/?tab=${tabTypesUrlParamEnum.news}`,
            active: false,
        },
        {
            id: 'bc-article',
            text: dataNews?.title ?? '',
            path: dataNews?.translit ?? '',
            active: false,
        },
    ];

    if (newsQuery.status === 'pending') return <Preloader />
    if (newsQuery.status === 'error' || !dataNews) return <p>Не удалось загрузить новость</p>

    const date_article = new Date(dataNews.date_article)
    const getYear = date_article.getFullYear();
    const currentDate = getCurrentDateInRussian(dataNews.date_article)

    return (
        <PostDetail
            breadCrumbsList={breadCrumbsList}
            title={dataNews.title}
            date={`${currentDate} ${getYear}`}
            images={[{src: dataNews.thumbnail, alt: dataNews.title}]}
            desc={parse(dataNews.desc)}
            otherPosts={<OtherNewsManagementView />}
        />
    )
}

export default NewsDetailPage;
