'use client'
import {FC} from "react";
import {rubricsResponseType} from "@/src/api/types/typesRubrics";
import {useQuery} from "@tanstack/react-query";
import {fetchNews} from "@/src/api/Rubrics";
import {queryClient} from "@/src/api/queryClient";
import {Preloader} from "@/src/Components/UI/Preloader/Preloader";
import {OtherPosts} from "@/src/Components/List/OtherPosts/OtherPosts";
import {PostItem} from "@/src/Components/List/PostItem/PostItem";
import {getCurrentDateInRussian} from "@/src/utils/dateInRussian";

interface IOtherNewsListProps {
    rubrics: rubricsResponseType;
}

export const OtherNews: FC<IOtherNewsListProps> = ({rubrics}) => {

    const getIdNews = rubrics.rubrics?.find(news => news.code === "news");
    const LIMIT = 16;

    const newsData = useQuery({
        queryKey: ['news', getIdNews],
        queryFn: () => {
            if (!getIdNews) throw new Error('No rubric id');
            return fetchNews({
                id_rubric: [getIdNews.id],
                limit: LIMIT,
                page: 1
            });
        },
        enabled: !!getIdNews
    }, queryClient);


    if (newsData.status === 'pending') return <Preloader />

    if (newsData.status === 'success') return (
        <OtherPosts
            title="Другие новости"
            items={newsData.data.articles}
            getKey={(item) => item.id}
            renderItem={(item) => (
                <PostItem
                    key={item.id}
                    image={item.thumbnail}
                    title={item.title}
                    date={getCurrentDateInRussian(item.date_article)}
                    link={`/media/${item.translit}/${item.id}`}
                />
            )}
        />
    )
}
