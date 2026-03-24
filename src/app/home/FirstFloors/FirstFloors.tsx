'use client'

import {FC} from "react";
import style from "./FirstFloors.module.scss";
import {ContainerSection} from "@/src/Components/UI/Container/ContainerSection";
import {SectionTitle} from "@/src/Components/UI/SectionTitle/SectionTitle";
import {Swiper, SwiperSlide} from "swiper/react";
import {Pagination} from 'swiper/modules';

import Image from "next/image";

import imgSlide_1 from '@/public/images/first-floors/image-1.webp';
import imgSlide_2 from '@/public/images/first-floors/image-2.webp';
import imgSlide_3 from '@/public/images/first-floors/image-3.webp';

import {clsx} from "clsx";


export const FirstFloors: FC = () => {
    return (
        <section className={style.firstFloors}>
            <ContainerSection className={style.containerFirstFloors}>
                <p className={style.firstFloors__desc}>
                    На первых этажах Rakurs запланирована насыщенная коммерческая
                    инфраструктура, которая позволяет разместить разные форматы
                    бизнеса — от небольших студий до просторных шоурумов.
                </p>

                <SectionTitle
                    classNameUnderlined={style.firstFloors__underlined}
                    classNameTitle={style.firstFloors__title}
                    textUnderlined={'Первые этажи'}
                    isUnderlinedTitle={true}
                > формируют связь между <br />
                    жилой частью дома и городской средой, делая <br />
                    пространство живым и наполненным.
                </SectionTitle>

                <Swiper
                    slidesPerView='auto'
                    spaceBetween={0}
                    speed={500}
                    grabCursor={true}
                    modules={[Pagination]}

                    pagination={{
                        clickable: true,
                    }}
                    // Брейкпоинты
                    breakpoints={{
                        // На экранах до 640px - без пагинации (или другой конфиг)
                        0: {
                            pagination: {
                                enabled: true, // включена на мобилках
                            },
                        },
                        // На экранах от 640px выключаем пагинацию
                        640: {
                            pagination: {
                                enabled: false, // выключена на десктопе
                            },
                        },

                    }}
                    className={style.firstFloorsSlider}>
                    <SwiperSlide className={style.firstFloorsSlider__slide}>
                        <Image className={style.firstFloorsSlider__img} src={imgSlide_1} alt={'Супермаркет'} />
                        <div className={clsx(style.firstFloorsSlider__wrapperRectangle, style.rectangle_1)}>
                            <span className={style.firstFloorsSlider__number}>(01)</span>
                            <span className={style.firstFloorsSlider__title}>Супермаркет</span>

                            <p className={style.firstFloorsSlider__desc}>
                                В стилобате запланирован супермаркет площадью 600 м²,
                                который закроет все основные бытовые и ежедневные
                                потребности жильцов Rakurs
                            </p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className={style.firstFloorsSlider__slide}>
                        <Image className={style.firstFloorsSlider__img} src={imgSlide_2} alt={'Фитнес-центр'} />
                        <div className={clsx(style.firstFloorsSlider__wrapperRectangle, style.rectangle_2)}>
                            <span className={style.firstFloorsSlider__number}>(02)</span>
                            <span className={style.firstFloorsSlider__title}>Фитнес-центр</span>

                            <p className={style.firstFloorsSlider__desc}>
                                В проекте предполагается двухэтажный фитнес-центр
                                в стилобате площадью 1200 м²
                            </p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className={style.firstFloorsSlider__slide}>
                        <Image className={style.firstFloorsSlider__img} src={imgSlide_3} alt={'Коммерция'} />
                        <div className={clsx(style.firstFloorsSlider__wrapperRectangle, style.rectangle_3)}>
                            <span className={style.firstFloorsSlider__number}>(03)</span>
                            <span className={style.firstFloorsSlider__title}>Коммерция</span>

                            <p className={style.firstFloorsSlider__desc}>
                                Помимо супермаркета и фитнес-центра в проекте появится
                                коммерция общей площадью 2200 м2, которую можно будет
                                трансформировать в пространства от 50 до 700 м²
                                и создать насыщенную и удобную среду для жизни.
                            </p>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </ContainerSection>
        </section>
    )
}