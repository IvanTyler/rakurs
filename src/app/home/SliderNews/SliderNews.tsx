"use client"

import {FC} from "react";
import {Swiper, SwiperSlide} from 'swiper/react';
import {Pagination} from 'swiper/modules'; // Импортируем модуль пагинации
import style from './SliderNews.module.scss';
import Image from 'next/image';


import 'swiper/css'; // Основные стили Swiper
import 'swiper/css/pagination'; // Стили пагинации
import {v4 as uuidv4} from "uuid";
import Link from "next/link";
import {clsx} from "clsx";

type typeApartment = {
    id: string;
    discount: string;
    desc: string;
}

const dataSlider = Array.from((Array(3))).map((_, i) => {
    return {
        id: uuidv4(),
        discount: `–10 `,
        desc: `До 4 июня включительно квартиру в жилом проекте Rakurs можно приобрести со скидкой`
    }
});

interface ISliderApartmentDiscount {
    classNameSlideContainer?: string;
    classNameDesc?: string;
    classNameDiscount?: string;
    classNameLink?: string;
}


export const SliderNews: FC<ISliderApartmentDiscount> = (
    {
        classNameSlideContainer,
        classNameLink,
        classNameDesc,
        classNameDiscount
    }
) => {

    return (
        <div className={clsx(style.sliderContainer, classNameSlideContainer)}>
            <Swiper
                className={style.sliderNews}
                // Настройки для показа по одному слайду
                slidesPerView={1}
                spaceBetween={5}
                pagination={{
                    clickable: true, // Можно кликать на точки
                    dynamicBullets: false, // Обычные точки
                }}
                // Подключаем модули
                modules={[Pagination]}
                speed={500} // Скорость анимации
            >
                {dataSlider.map((slide: typeApartment) => (
                    <SwiperSlide className={style.sliderNews__slide} key={slide.id}>
                        <Link className={clsx(classNameLink, style.sliderNews__link)} href={''}>
                            {/*<Image className={style.SliderNews__bg} src={rectangleIcon} />*/}
                            <div className={style.sliderNews__leftTop}></div>
                            <span className={clsx(classNameDiscount, style.sliderNews__discount)}>
                                {slide.discount}% <br/>
                                на квартиры
                            </span>
                            <div className={style.sliderNews__rightTop}></div>
                            <p className={clsx(classNameDesc, style.sliderNews__desc)}>
                                {slide.desc}
                            </p>
                            <div className={style.sliderNews__rightBottom}></div>
                        </Link>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}