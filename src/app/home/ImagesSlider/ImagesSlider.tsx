import {FC} from "react";
import {Swiper, SwiperSlide} from 'swiper/react';
import style from "./ImagesSlider.module.scss";
import styleSlider from '../ImagesListItem/ImagesListItem.module.scss'
import {imagesType} from "@/src/app/types/improvement";
import {clsx} from "clsx";

interface IImagesSliderProps {
    slidesPerView?: any;
    classNameSlider?: string;
    classNameDesc?: string;
    classNameDate?: string;
    slides: imagesType[]
}

export const ImagesSlider: FC<IImagesSliderProps> = (
    {
        slides,
        classNameSlider,
        classNameDesc,
        classNameDate,
        slidesPerView
    }
) => {
    return (
        <Swiper
            slidesPerView={slidesPerView}
            spaceBetween={8}
            speed={500}
            grabCursor={true}
            className={clsx(style.imagesSlider, classNameSlider)}>

            {slides.map((slide: imagesType) => (
                <SwiperSlide className={styleSlider.imagesListItem}>
                    <figure className={styleSlider.imagesListItem__figure}>
                        <img src={slide.img} alt={slide.label}
                               className={styleSlider.imagesListItem__img}/>
                    </figure>
                    <div className={styleSlider.imagesListItem__bottom}>
                        {slide.label && <figcaption className={styleSlider.imagesListItem__label}>
                            {slide.label}
                        </figcaption>}
                        {slide.desc && <p className={clsx(styleSlider.imagesListItem__desc, classNameDesc)}>
                            {slide.desc}
                        </p>}
                        {slide.date && <p className={clsx(styleSlider.imagesListItem__date, classNameDate)}>
                            {slide.date}
						</p>}
                    </div>
                </SwiperSlide>
            ))}

        </Swiper>
    )
}