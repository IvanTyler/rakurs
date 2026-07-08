'use client';

import {FC} from "react";
import {ContainerSection} from "@/src/Components/UI/Container/ContainerSection";
import style from './News.module.scss'
import {ImagesList} from "@/src/app/home/ImagesList/imagesList";
import {ImagesSlider} from "@/src/app/home/ImagesSlider/ImagesSlider";
import {newsData} from "@/src/app/home/News/data";
import {LinkToPage} from "@/src/Components/UI/LinkToPage/LinkToPage";
import {useWindowWidth} from "@/src/hooks/WidthWindowSize";

export const News: FC = () => {

    const {widthWindow: widthWindowSize} = useWindowWidth();


    return (
        <section className={style.newsSection}>
            <ContainerSection className={style.containerNewsSection}>
                {widthWindowSize > 550 ?
                    <ImagesList
                        classNameImages={style.newsSection__images}
                        classNameDesc={style.newsSection__desc}
                        classNameDate={style.newsSection__date}
                        item={newsData}/> :
                    <ImagesSlider slidesPerView={'auto'} classNameSlider={style.newsSection__slider} slides={newsData}/>}

                <LinkToPage classname={style.newsSection__link}>
                    Все новости
                </LinkToPage>
            </ContainerSection>
        </section>
    )
}
