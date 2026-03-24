'use client'

import {FC, useEffect, useRef, useState} from "react";
import {ContentTabsImg, ContentTabsType} from "@/src/app/types/rakursConceptTabs";
import style from './ContentTabsItem.module.scss'
import {clsx} from "clsx";
import {Swiper, SwiperSlide} from "swiper/react";
import {DescSection} from "@/src/app/home/ContentMediaBlock/DescSection/DescSection";

interface IContentTabsItem {
    item: ContentTabsType;
    getIdTab: (item: any) => void;
    desc?: string;
    price?: string;
    sizeRange?: string;
    isShowDesc?: boolean;
}

export const ContentTabsItem: FC<IContentTabsItem> = (
    {
        item,
        getIdTab,
        desc,
        isShowDesc,
        price,
        sizeRange,
    }
) => {
    const elementRef = useRef<HTMLDivElement>(null);
    const [contentHeight, setContentHeight] = useState(0);

    useEffect(() => {
        if (!elementRef.current || !item.active) return;

        const updateHeight = () => {
            const height = elementRef.current!.scrollHeight;
            setContentHeight(height);
        };

        updateHeight();

        window.addEventListener('resize', updateHeight);

        return () => {
            window.removeEventListener('resize', updateHeight);
        };
    }, [item.active]); // Следим за изменением active

    const countSlides = item.images.length


    return (
        <li className={clsx(style.contentTabsItem, item.active && style.active, isShowDesc && style.mobile)}
            onClick={() => getIdTab(item.id)}>
            <span className={style.contentTabsItem__label}>({item.label})</span>
            <span className={style.contentTabsItem__title}>{item.title}</span>

            {isShowDesc &&
				<div
					className={style.mobileContent}
					ref={elementRef}
					style={{
                        maxHeight: item.active ? `${contentHeight}px` : '0px'
                    }}
				>
                    {countSlides > 1 &&
						<Swiper
							className={style.sliderMobile}
							slidesPerView={'auto'}
							spaceBetween={5}
						>
                            {item.images.map((slide: ContentTabsImg) => (
                                <SwiperSlide className={style.sliderMobile__slide} key={slide.id}>
                                    <figure className={style.sliderMobile__figure}>
                                        <img className={style.sliderMobile__img} loading='lazy' src={slide.path}
                                             alt={slide.label}/>
                                        <figcaption className={style.sliderMobile__label}>
                                            {slide.label}
                                        </figcaption>
                                    </figure>

                                </SwiperSlide>
                            ))}
						</Swiper>
                    }

                    {countSlides === 1 &&
						<figure className={style.sliderMobile__figure}>
							<img className={style.sliderMobile__img} loading='lazy' src={item.images[0].path}
								 alt={item.images[0].label}/>
							<figcaption className={style.sliderMobile__label}>
                                {item.images[0].label}
							</figcaption>
						</figure>
                    }

                    {desc && <DescSection desc={desc} className={style.descSectionStyle}/>}
                    {price && <span className={style.mobileContent__price}>{price}</span>}
                    {sizeRange && <span className={style.mobileContent__sizeRange}>{price}</span>}

				</div>
            }
        </li>
    );
};
