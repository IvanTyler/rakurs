'use client'

import {FC, useEffect, useState} from "react";
import style from './ImprovementRakurs.module.scss';
import {ContainerSection} from "@/src/Components/UI/Container/ContainerSection";
import {SectionTitle} from "@/src/Components/UI/SectionTitle/SectionTitle";
import {ImagesList} from "@/src/app/home/ImagesList/imagesList";
import {ImagesSlider} from "@/src/app/home/ImagesSlider/ImagesSlider";
import {improvementData} from "@/src/app/home/ImprovementRakurs/data";


export const ImprovementRakurs: FC = () => {
    const [widthWindowSize, setWidthWindowSize] = useState(0);


    useEffect(() => {

        setWidthWindowSize(window.innerWidth);

        const windowWidthSize = () => {
            const widthWindow = window.innerWidth;
            setWidthWindowSize(widthWindow);
        }

        window.addEventListener('resize', windowWidthSize)
        return () => {
            window.removeEventListener('resize', windowWidthSize)
        }
    }, []);


    return (
        <section className={style.improvementRakurs}>
            <ContainerSection className={style.containerImprovementRakurs}>
                <SectionTitle
                    classNameUnderlined={style.improvementRakurs__underlined}
                    classNameTitle={style.improvementRakurs__title}
                    textUnderlined={'Благоустройство'}
                    isUnderlinedTitle={true}
                > визуально размывает границы между
                    геометричностью архитектурных форм и хаотичностью живой природ
                </SectionTitle>

                {widthWindowSize >= 500 ?
                    <ImagesList classNameImages={style.improvementRakurs__images} item={improvementData}/> :
                    <ImagesSlider slidesPerView={'auto'} slides={improvementData}/>}

            </ContainerSection>
        </section>
    )
}