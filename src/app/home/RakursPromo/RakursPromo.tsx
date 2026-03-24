import {FC} from "react";
import style from './RakursPromo.module.scss'
import {ContainerSection} from "@/src/Components/UI/Container/ContainerSection";
import {SliderNews} from "@/src/app/home/SliderNews/SliderNews";


export const RakursPromo: FC = () => {
    return (
        <section className={style.rasursPromo}>
            <ContainerSection className={style.containerRasursPromo}>
                <h1 className={style.rasursPromo__title}>
                    Жилой проект высокого класса  в районе науки  и образования
                </h1>
                <div className={style.rasursPromo__center}></div>
                <SliderNews
                    classNameLink={style.linkSlider}
                    classNameSlideContainer={style.rasursPromo__sliderContainer}
                    classNameDesc={style.rasursPromo__desc}
                    classNameDiscount={style.rasursPromo__discount}
                />
            </ContainerSection>
        </section>
    )
}