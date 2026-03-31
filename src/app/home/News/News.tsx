'use client';

import {FC, useEffect, useState} from "react";
import {ContainerSection} from "@/src/Components/UI/Container/ContainerSection";
import style from './News.module.scss'
import {ImagesList} from "@/src/app/home/ImagesList/imagesList";
import {ImagesSlider} from "@/src/app/home/ImagesSlider/ImagesSlider";
import {newsData} from "@/src/app/home/News/data";
import {LinkToPage} from "@/src/Components/UI/LinkToPage/LinkToPage";

export const News: FC = () => {

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
