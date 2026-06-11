'use client'

import {FC} from "react";
import Image from "next/image";
import style from './MobileSlider.module.scss';
import imgSlide_svg from '@/public/images/infrastructure/numbering.svg';
import {ListItems} from "@/src/Components/List/ListItems";
import {infrastructureSlides, InfrastructureSlideType} from "@/src/app/home/Infrastructure/data";


export const MobileSlider: FC = () => {
    return (
        <div className={style.sliderScrollInfrastructure}>
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
    )
}
