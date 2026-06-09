'use client'

import {FC, useEffect, useRef, useState} from "react";
import Image from "next/image";

import style from './DesktopSlider.module.scss'
import imgSlide_svg from '@/public/images/infrastructure/numbering.svg';
import {ListItems} from "@/src/Components/List/ListItems";
import {infrastructureSlides, InfrastructureSlideType} from "@/src/app/home/Infrastructure/data";


interface IDesktopSliderProps {
    elementRefSection: React.RefObject<HTMLDivElement | null>,
}

export const DesktopSlider: FC<IDesktopSliderProps> = ({elementRefSection}) => {

    const elementRefSliderScroll = useRef<HTMLDivElement>(null);

    const [scrollContainerHeight, setScrollContainerHeight] = useState(0);
    const [bufferState, setBufferState] = useState(0);


    useEffect(() => {
        if (!elementRefSliderScroll.current || !elementRefSection?.current) return;

        const slider = elementRefSliderScroll.current;
        const section = elementRefSection?.current;

        const updateHeight = () => {
            const scrollHeight = slider.scrollHeight;
            const clientHeight = slider.clientHeight;

            const innerWidth = window.innerWidth;

            const isBufferFunc = () => {
                if (innerWidth >= 1200) {
                    return setBufferState(750);
                }
            }

            isBufferFunc();

            setScrollContainerHeight((scrollHeight - clientHeight));
        };

        updateHeight();

        const handleScroll = () => {
            if (!slider || !section) return;

            const rect = section.getBoundingClientRect();
            const scrollTop = Math.floor(rect.y);

            if (scrollTop <= 0) {
                const scrollTopAbs = Math.abs(scrollTop);
                const maxSliderScroll = (slider.scrollHeight - slider.clientHeight);

                slider.scrollTop = Math.min(scrollTopAbs, maxSliderScroll);

            } else {
                section.scrollTop = 0;
            }
        };

        window.addEventListener('scroll', handleScroll);
        window.addEventListener('resize', updateHeight)

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.addEventListener('resize', updateHeight)
        };
    }, []);


    return (
        <div className={style.scrollContainer} style={{height: `${scrollContainerHeight + bufferState}px`}}>
            <div className={style.wrapperSlider}>
                <div ref={elementRefSliderScroll} className={style.sliderScrollInfrastructure}>
                    <div className={style.sliderScrollInfrastructure__wrapper}>
                        <ListItems
                            items={infrastructureSlides}
                            renderItem={(item: InfrastructureSlideType) => (
                                <div key={item.id} className={style.sliderScrollInfrastructure__slide}>
                                    <div className={style.sliderScrollInfrastructure__left}>
                                        <span className={style.sliderScrollInfrastructure__line_1}></span>
                                        <span className={style.sliderScrollInfrastructure__line_2}></span>
                                        <Image className={style.sliderScrollInfrastructure__imgSlide} src={item.img} alt={''}/>
                                    </div>
                                    <div className={style.sliderScrollInfrastructure__right}>
                                        <span className={style.sliderScrollInfrastructure__counter}>{item.counter}</span>

                                        <h3 className={style.sliderScrollInfrastructure__title}>
                                            {item.title}
                                            {item.meter && <span className={style.sliderScrollInfrastructure__meter}>{item.meter}</span>}
                                        </h3>

                                        <ul className={style.sliderDescList}>
                                            <ListItems
                                                items={item.descItems}
                                                renderItem={(desc: string, i: number) => (
                                                    <li key={i} className={style.sliderDescList__item}>{desc}</li>
                                                )}
                                            />
                                        </ul>

                                        <Image className={style.sliderScrollInfrastructure__imgNumbering}
                                               src={imgSlide_svg} alt={'numbering'}/>
                                    </div>
                                </div>
                            )}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
