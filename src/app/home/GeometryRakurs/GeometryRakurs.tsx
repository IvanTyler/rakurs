import {FC} from "react";
import style from './geometryRakurs.module.scss'
import {ContainerSection} from "@/src/Components/UI/Container/ContainerSection";

import imgGeometryRakurs_1 from '../../../../public/images/geometry-rakurs/image-1.webp';
import imgGeometryRakurs_1_mobile from '../../../../public/images/geometry-rakurs/image-1-mobile.webp';

import imgGeometryRakurs_2 from '../../../../public/images/geometry-rakurs/image-2.webp';
import imgGeometryRakurs_3 from '../../../../public/images/geometry-rakurs/image-3.webp';
import imgGeometryRakursSun from '../../../../public/images/geometry-rakurs/sun.svg';

import Image from "next/image";
import {LinkToPage} from "@/src/Components/UI/LinkToPage/LinkToPage";
import imgLocationMobile from "@/public/images/location/location-mobile.png";


export const GeometryRakurs: FC = () => {
    return (
        <section className={style.geometryRakurs}>
            <ContainerSection className={style.containerGeometryRakurs}>
                <h2 className={style.geometryRakurs__title}>
                    Геометрия Rakurs со смещением отдельных этажей и
                    расположением домов относительно друг друга помогает
                    добиться качественной инсоляции — солнечный свет
                    будет поступать во все квартиры.
                </h2>

                <Image src={imgGeometryRakursSun} alt="sun" className={style.geometryRakurs__sun}/>

                <div className={style.geometryRakursImages}>
                    <div className={style.geometryRakursImages__item}>

                        <figure className={style.geometryRakursImages__figure}>
                            <picture className={style.geometryRakursImages__picture}>
                                <source className={style.geometryRakursImages__img} media="(max-width:580px)"
                                        srcSet={imgGeometryRakurs_1_mobile.src}/>
                                <Image src={imgGeometryRakurs_1} alt="корпус 2"
                                       className={style.geometryRakursImages__img}/>
                            </picture>
                            <figcaption className={style.geometryRakursImages__text}>рис.1 (корпус 2)</figcaption>
                        </figure>
                    </div>
                    <div className={style.geometryRakursImages__item}>
                        <figure className={style.geometryRakursImages__figure}>
                            <Image src={imgGeometryRakurs_2} alt="корпус 3" className={style.geometryRakursImages__img}/>
                            <figcaption className={style.geometryRakursImages__text}>рис.2 (корпус 3)</figcaption>
                        </figure>
                    </div>
                    <div className={style.geometryRakursImages__item}>
                        <figure className={style.geometryRakursImages__figure}>
                            <Image src={imgGeometryRakurs_3} alt="корпус 4"
                                   className={style.geometryRakursImages__img}/>
                            <figcaption className={style.geometryRakursImages__text}>рис.3 (корпус 4)</figcaption>
                        </figure>

                        <LinkToPage classname={style.geometryRakurs__link}>
                            Подробнее об архитектуре
                        </LinkToPage>
                    </div>
                </div>

                <div className={style.geometryRakurs__sunlightDescription}>
                    {/*<Image*/}
                    {/*    src={imgGeometryRakursRectangle}*/}
                    {/*    alt="Квартиры освещены солнцем большую часть дня"*/}
                    {/*    className={style.geometryRakurs__rectangle}*/}
                    {/*/>*/}
                    <span className={style.geometryRakurs__text}>Квартиры освещены солнцем большую часть дня</span>
                </div>


            </ContainerSection>
        </section>
    )
}