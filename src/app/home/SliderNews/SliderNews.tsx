"use client"

import {FC} from "react";
import {Swiper, SwiperSlide} from 'swiper/react';
import {Pagination} from 'swiper/modules';
import style from './SliderNews.module.scss';
import 'swiper/css';
import 'swiper/css/pagination';
import {clsx} from "clsx";
import {GalleryItemType} from "@/src/api/types/typesSliderMenu";

interface ISliderApartmentDiscount {
    slides: GalleryItemType[];
    classNameSlideContainer?: string;
    classNameDesc?: string;
    classNameDiscount?: string;
    classNameLink?: string;
}

const decode = (str: string) => str.replace(/&nbsp;/g, ' ');

export const SliderNews: FC<ISliderApartmentDiscount> = ({
    slides,
    classNameSlideContainer,
    classNameLink,
    classNameDesc,
    classNameDiscount,
}) => {
    return (
        <div className={clsx(style.sliderContainer, classNameSlideContainer)}>
            <Swiper
                className={style.sliderNews}
                slidesPerView={1}
                spaceBetween={5}
                pagination={{clickable: true, dynamicBullets: false}}
                modules={[Pagination]}
                speed={500}
            >
                {slides.map((slide: GalleryItemType) => (
                    <SwiperSlide className={style.sliderNews__slide} key={slide.id}>
                        <div className={clsx(classNameLink, style.sliderNews__link)}>
                            <div className={style.sliderNews__leftTop}></div>
                            <span className={clsx(classNameDiscount, style.sliderNews__discount)}>
                                {decode(slide.title)}
                            </span>
                            <div className={style.sliderNews__rightTop}></div>
                            {slide.desc && (
                                <p className={clsx(classNameDesc, style.sliderNews__desc)}>
                                    {decode(slide.desc)}
                                </p>
                            )}
                            <div className={style.sliderNews__rightBottom}></div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};
