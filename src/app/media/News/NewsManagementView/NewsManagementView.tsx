'use client'

import { FC, useEffect, useState } from "react";
import { useMutation, useQuery } from "@tanstack/react-query";
import { fetchNews } from "@/src/api/Rubrics";
import { Preloader } from "@/src/Components/UI/Preloader/Preloader";
import { NewsList } from "@/src/app/media/News/NewsList/NewsList";
import { queryClient } from "@/src/api/queryClient";
import style from './NewsManagementView.module.scss';
import {NewsType} from "@/src/api/types/news";
import {LoadMoreButton} from "@/src/Components/UI/LoadMoreButton/LoadMoreButton";

interface NewsManagementViewProps {
    IdNews: number | undefined;
}

export const NewsManagementView: FC<NewsManagementViewProps> = ({ IdNews }) => {
    const [page, setPage] = useState(1);
    const [allNews, setAllNews] = useState<NewsType[] | any[]>([]);
    const [hasMore, setHasMore] = useState(true);
    const [totalCount, setTotalCount] = useState(0);
    const LIMIT = 16;

    const { data, isLoading, isError } = useQuery({
        queryKey: ['news', IdNews],
        queryFn: () => {
            if (!IdNews) throw new Error('No rubric id');
            return fetchNews({
                id_rubric: [IdNews],
                limit: LIMIT,
                page: 1  // 👈 всегда первая страница
            });
        },
        enabled: !!IdNews
    }, queryClient);


    // Сохраняем первую страницу в allNews
    useEffect(() => {
        if (data?.articles?.length) {
            setAllNews(data.articles);
            setTotalCount(data.count);

            if (data.count === LIMIT)  setHasMore(false);
        }
    }, [data]);

    // Подгрузка следующих страниц
    const { mutate: loadMore, isPending: isLoadingMore } = useMutation({
        mutationFn: () => {
            if (!IdNews) throw new Error('No rubric id');
            const nextPage = page + 1;
            return fetchNews({
                id_rubric: [IdNews],
                limit: LIMIT,
                page: nextPage
            });
        },
        onSuccess: (newData) => {
            if (newData?.articles?.length) {
                setAllNews(prev => [...prev, ...newData.articles]);
                setPage(prev => prev + 1);

                if (allNews.length + newData.articles.length >= totalCount) {
                    setHasMore(false);
                }
            } else {
                setHasMore(false);
            }
        }
    }, queryClient);

    const remainingCount = totalCount - allNews.length;
    const currentCountNews = remainingCount < LIMIT ? remainingCount : LIMIT;

    if (isLoading) return <Preloader />;
    if (isError) return <p>Не удалось загрузить новости</p>;

    return (
        <div className={style.newsManagementView}>
            <NewsList news={allNews} />
            {hasMore &&
                <LoadMoreButton
                    classNameButton={style.newsManagementView__loadContentButton}
                    count={currentCountNews}
                    total={totalCount}
                    onClick={() => loadMore()}
                    isLoading={isLoadingMore}
                />
            }
        </div>
    );
}
