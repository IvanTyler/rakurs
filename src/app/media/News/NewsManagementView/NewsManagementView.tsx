'use client'

import {FC} from "react";
import {fetchNews} from "@/src/api/Rubrics";
import {queryClient} from "@/src/api/queryClient";
import {useQuery} from "@tanstack/react-query";
import {Preloader} from "@/src/Components/UI/Preloader/Preloader";
import {NewsList} from "@/src/app/media/News/NewsList/NewsList";

interface NewsProps {
    IdNews: number | undefined;
}

export const NewsManagementView: FC<NewsProps> = ({IdNews}) => {
    console.log('IdNews', IdNews)
    const news = useQuery({
        queryFn: () => {
            if (!IdNews) {
                return Promise.reject(new Error('News rubric not found'));
            }
            return fetchNews([IdNews]);
        },
        queryKey: ['news']
    }, queryClient)

    switch (news.status) {
        case 'pending':
            return <Preloader />
        case 'success':
            return <NewsList news={news.data} />
        case 'error':
            <p>Новостей нет</p>
    }
}
