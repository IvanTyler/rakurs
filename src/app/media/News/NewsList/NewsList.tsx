import {FC} from "react";
import style from './NewsList.module.scss'
import {NewsResponse, NewsResponseSchema, NewsType} from "@/src/api/types/news";
import {ListItems} from "@/src/Components/List/ListItems";
import {NewsItem} from "@/src/app/media/News/NewsItem/NewsItem";

interface NewsListProps {
    news: NewsResponse;
}

export const NewsList: FC<NewsListProps> = ({news}) => {

    console.log('news', news)

    return (
        <ul className={style.newsList}>
            <ListItems
                items={news.articles}
                renderItem={(item: NewsType) => <NewsItem key={item.id} item={item} />}
            />
        </ul>
    )
}
