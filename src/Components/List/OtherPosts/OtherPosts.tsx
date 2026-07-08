'use client'

import {ReactNode, useState} from "react";
import type SwiperClass from 'swiper';
import style from './OtherPosts.module.scss'
import {ListPost} from "@/src/Components/List/ListPost/ListPost";
import {ContainerSection} from "@/src/Components/UI/Container/ContainerSection";

interface OtherPostsProps<T> {
    title: string;
    items: T[];
    getKey: (item: T) => string | number;
    renderItem: (item: T) => ReactNode;
}

export function OtherPosts<T>({title, items, getKey, renderItem}: OtherPostsProps<T>) {

    const [swiper, setSwiper] = useState<SwiperClass | null>(null);

    return (
        <section className={style.otherPosts}>
            <ContainerSection className={style.otherPostsContainer}>
                <div className={style.otherPosts__header}>
                    <h3 className={style.otherPosts__title}>{title}</h3>
                    <div className={style.otherPosts__nav}>
                        <button
                            className={style.otherPosts__arrow}
                            onClick={() => swiper?.slidePrev()}
                            aria-label="Назад"
                        >
                            <img src="/icons/arrow-black.svg" alt="" />
                        </button>
                        <button
                            className={`${style.otherPosts__arrow} ${style.otherPosts__arrow_next}`}
                            onClick={() => swiper?.slideNext()}
                            aria-label="Вперёд"
                        >
                            <img src="/icons/arrow-black.svg" alt="" />
                        </button>
                    </div>
                </div>

                <ListPost
                    items={items}
                    getKey={getKey}
                    renderItem={renderItem}
                    isSlider={true}
                    onSwiperReady={setSwiper}
                />
            </ContainerSection>
        </section>
    )
}
