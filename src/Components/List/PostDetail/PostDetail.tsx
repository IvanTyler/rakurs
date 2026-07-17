'use client'

import {FC, ReactNode, useState} from "react";
import type SwiperClass from 'swiper';
import {Swiper, SwiperSlide} from "swiper/react";
import style from './PostDetail.module.scss'
import {ContainerSection} from "@/src/Components/UI/Container/ContainerSection";
import {BreadCrumbs} from "@/src/Components/UI/BreadCrumbs/BreadCrumbs";
import {breadCrumbsType} from "@/src/Components/UI/BreadCrumbs/type";

export interface PostDetailImage {
    src: string;
    alt: string;
}

interface PostDetailProps {
    breadCrumbsList: breadCrumbsType[];
    title: string;
    date?: string;
    images: PostDetailImage[];
    desc: ReactNode;
    otherPosts: ReactNode;
}

export const PostDetail: FC<PostDetailProps> = (
    {
        breadCrumbsList,
        title,
        date,
        images,
        desc,
        otherPosts,
    }
) => {

    const [swiper, setSwiper] = useState<SwiperClass | null>(null);

    return (
        <section className={style.postDetail}>
            <BreadCrumbs
                dataBreadCrumbs={breadCrumbsList}
                classBreadCrumbs={style.postDetail__breadCrumbs}
            />

            <ContainerSection className={style.containerPostDetail}>
                <h2 className={style.postDetail__title}>
                    {title}
                </h2>

                {date &&
                    <span className={style.postDetail__date}>
                        {date}
                    </span>
                }

                {images.length > 1
                    ? (
                        <div className={style.postDetail__mediaWrapper}>
                            <Swiper
                                slidesPerView={1}
                                speed={500}
                                grabCursor={true}
                                onSwiper={setSwiper}
                            >
                                {images.map((image, index) => (
                                    <SwiperSlide key={index}>
                                        <img
                                            loading='lazy'
                                            src={image.src}
                                            alt={image.alt}
                                            className={style.postDetail__banner}
                                        />
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                            <button
                                className={`${style.postDetail__sliderArrow} ${style.postDetail__sliderArrow_prev}`}
                                onClick={() => swiper?.slidePrev()}
                                aria-label="Назад"
                            >
                                <img src="/icons/arrow-black.svg" alt="" />
                            </button>
                            <button
                                className={`${style.postDetail__sliderArrow} ${style.postDetail__sliderArrow_next}`}
                                onClick={() => swiper?.slideNext()}
                                aria-label="Вперёд"
                            >
                                <img src="/icons/arrow-black.svg" alt="" />
                            </button>
                        </div>
                    )
                    : images[0] && (
                        <img
                            loading='lazy'
                            src={images[0].src}
                            alt={images[0].alt}
                            className={style.postDetail__banner}
                        />
                    )
                }

                <div className={style.postDetail__desc}>
                    {desc}
                </div>
            </ContainerSection>
            {otherPosts}
        </section>
    )
}
