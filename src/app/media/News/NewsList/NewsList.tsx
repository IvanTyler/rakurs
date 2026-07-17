'use client'

import {FC} from "react";
import type SwiperClass from 'swiper';
import {NewsType} from "@/src/api/types/news";
import {PostItem} from "@/src/Components/List/PostItem/PostItem";
import {ListPost} from "@/src/Components/List/ListPost/ListPost";
import {getCurrentDateInRussian} from "@/src/utils/dateInRussian";

interface NewsListProps {
    news: NewsType[];
    isSlider?: boolean;
}

export const NewsList: FC<NewsListProps> = ({news, isSlider}) => {
    return (
        <ListPost
            items={news}
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
            isSlider={isSlider}
        />
    )
}
