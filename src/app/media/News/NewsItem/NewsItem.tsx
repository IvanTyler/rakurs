import {FC} from "react";
import style from './NewsItem.module.scss'
import {NewsType} from "@/src/api/types/news";
import {getCurrentDateInRussian} from "@/src/Utils/dateInRussian";
import {LinkToPage} from "@/src/Components/UI/LinkToPage/LinkToPage";

interface NewsItemProps {
    item: NewsType;
}

export const NewsItem: FC<NewsItemProps> = ({item}) => {

    const newDate = getCurrentDateInRussian(item.date_article)

    const link = `${item.translit}/${item.id}`
    return (
        <li className={style.newsItem}>
            <div className={style.newsItem__wrapperImg}>
                <img className={style.newsItem__img} src={item.thumbnail} alt={item.title} />
            </div>

            <div className={style.newsItem__bottom}>
                <p className={style.newsItem__desc}>
                    {item.title}
                </p>

                <span className={style.newsItem__date}>{newDate}</span>
            </div>
            <LinkToPage
                classname={style.newsItem__link}
                path={link}
            >
                    Подробнее
            </LinkToPage>
        </li>
    )
}
