'use client'

import {FC} from "react";
import style from './BiophilicLandscaping.module.scss';
import {ContainerSection} from "@/src/Components/UI/Container/ContainerSection";
import {SectionTitle} from "@/src/Components/UI/SectionTitle/SectionTitle";
import {ImagesSlider} from "@/src/app/home/ImagesSlider/ImagesSlider";
import {ImagesList} from "@/src/app/home/ImagesList/imagesList";
import {biophilicLandscapingImagesData} from "@/src/app/home/BiophilicLandscaping/data";
import {useWindowWidth} from "@/src/Hooks/WidthWindowSize";

export const BiophilicLandscaping: FC = () => {

    const { widthWindow } = useWindowWidth(500)

    return (
        <section className={style.biophilicLandscaping}>
            <ContainerSection className={style.containerbiophilicLandscaping}>
                <SectionTitle
                    classNameUnderlined={style.biophilicLandscaping__underlined}
                    classNameTitle={style.biophilicLandscaping__title}
                    textUnderlined={'Биофильное озеленение'}
                    isUnderlinedTitle={true}
                > получится насыщенным благодаря многоуровневости.
                    В проекте заложены 2 контрастные зоны.
                </SectionTitle>

                {widthWindow >= 500 ?
                    <ImagesList classNameImages={style.biophilicLandscaping__images} item={biophilicLandscapingImagesData} /> :
                    <ImagesSlider slidesPerView={'auto'} slides={biophilicLandscapingImagesData} />}
            </ContainerSection>
        </section>
    )
}