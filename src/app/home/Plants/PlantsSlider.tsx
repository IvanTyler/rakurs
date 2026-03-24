'use client'


import {FC} from "react";
import style from "./Plants.module.scss";
import {Pagination} from "swiper/modules";
import {Swiper, SwiperSlide} from "swiper/react";


interface IPlantsProps {
    item: any[];
}

export const PlantsSlider: FC<IPlantsProps> = ({item}) => {

    return (
        <Swiper
            className={style.sliderMobile}
            slidesPerView={4}

            pagination={{
                clickable: true, // Можно кликать на точки
                dynamicBullets: false, // Обычные точки
            }}
            // Подключаем модули
            modules={[Pagination]}
            speed={500} // Скорость анимации

            breakpoints={{
                0: {
                    slidesPerView: 3,
                },
                390: {
                    slidesPerView: 3,
                    spaceBetween: 4,
                },
                550: {
                    slidesPerView: 4,
                    spaceBetween: 16,
                }
            }}
        >
            {item.map((slide: any) => (
                <SwiperSlide className={style.sliderMobile__slide} key={slide.id}>
                    <figure className={style.sliderMobile__figure}>
                        <img className={style.sliderMobile__img} loading='lazy' src={slide.path}
                             alt={slide.text}/>
                        <figcaption className={style.sliderMobile__figcaption}>
                            {slide.text}
                        </figcaption>
                    </figure>

                </SwiperSlide>
            ))}
        </Swiper>
    )
}