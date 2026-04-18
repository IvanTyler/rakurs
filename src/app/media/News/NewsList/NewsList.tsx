import {FC} from "react";
import style from './NewsList.module.scss'
import {NewsType} from "@/src/api/types/news";
import {ListItems} from "@/src/Components/List/ListItems";
import {NewsItem} from "@/src/app/media/News/NewsItem/NewsItem";
import {Swiper, SwiperSlide} from "swiper/react";

interface NewsListProps {
    news: NewsType[];
    isSlider?: boolean;
}

export const NewsList: FC<NewsListProps> = ({news, isSlider}) => {

    if (isSlider) {
        return (
            <Swiper
                slidesPerView='auto'
                spaceBetween={16}
                speed={500}
                grabCursor={true}
                className={style.newsList}
            >
                {news.map((slide: NewsType) => (
                    <SwiperSlide key={slide.id} className={style.newsList__slide}>
                        <NewsItem item={slide} />
                    </SwiperSlide>
                ))}
            </Swiper>)
    }
    return (
        <ul className={style.newsList}>
            <ListItems
                items={news}
                renderItem={(item: NewsType) => <NewsItem key={item.id} item={item} />}
            />
        </ul>
    )
}
