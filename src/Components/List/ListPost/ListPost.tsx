'use client'

import {ReactNode} from "react";
import type SwiperClass from 'swiper';
import style from './ListPost.module.scss'
import {ListItems} from "@/src/Components/List/ListItems";
import {Swiper, SwiperSlide} from "swiper/react";

interface ListPostProps<T> {
    items: T[];
    renderItem: (item: T) => ReactNode;
    getKey: (item: T) => string | number;
    isSlider?: boolean;
    onSwiperReady?: (swiper: SwiperClass) => void;
}

export function ListPost<T>({items, renderItem, getKey, isSlider, onSwiperReady}: ListPostProps<T>) {

    if (isSlider) {
        return (
            <Swiper
                slidesPerView='auto'
                spaceBetween={16}
                speed={500}
                grabCursor={true}
                onSwiper={onSwiperReady}
            >
                {items.map((item) => (
                    <SwiperSlide key={getKey(item)} className={style.listPost__slide}>
                        {renderItem(item)}
                    </SwiperSlide>
                ))}
            </Swiper>
        )
    }

    return (
        <ul className={style.listPost}>
            <ListItems
                items={items}
                renderItem={(item) => renderItem(item)}
            />
        </ul>
    )
}
