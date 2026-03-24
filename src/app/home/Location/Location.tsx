import {FC} from "react";
import style from './Location.module.scss'
import {ContainerSection} from "@/src/Components/UI/Container/ContainerSection";
import Image from "next/image";

import imgLocation from '@/public/images/location/location.webp';
import imgLocationMobile from '@/public/images/location/location-mobile.webp'
import {LinkToPage} from "@/src/Components/UI/LinkToPage/LinkToPage";
import {Icon} from "@/src/Components/UI/Icon/Icon";
import {SectionTitle} from "@/src/Components/UI/SectionTitle/SectionTitle";


export const Location: FC = () => {
    return (
        <section className={style.location}>
            <ContainerSection className={style.containerLocation}>
                <div className={style.location__leftBlock}>
                    <span className={style.location__label}>рис.12 (локация  и окружение)</span>
                    <picture className={style.location__picture}>
                        <source className={style.location__img} media="(max-width:880px)"
                                srcSet={imgLocationMobile.src}/>
                        <Image className={style.location__img} src={imgLocation} alt={'Локация'}/>
                    </picture>

                    <ul className={style.locationTimesList}>
                        <li className={style.locationTimesList__item}>
                            <span className={style.locationTimesList__time}>5 мин</span>
                            <Icon className={style.locationTimesList__icon} myClassName={'man'}/>
                            <span className={style.locationTimesList__metro}>до МЦК Зорге</span>
                        </li>
                        <li className={style.locationTimesList__item}>
                            <span className={style.locationTimesList__time}>6 мин</span>
                            <Icon className={style.locationTimesList__icon} myClassName={'man'}/>
                            <span className={style.locationTimesList__metro}>до м. «Октябрьское поле»</span>
                        </li>
                        <li className={style.locationTimesList__item}>
                            <span className={style.locationTimesList__time}>8 мин</span>
                            <Icon className={style.locationTimesList__icon} myClassName={'car'}/>
                            <span className={style.locationTimesList__metro}>до ТЦ Авиапарк</span>
                        </li>
                        <li className={style.locationTimesList__item}>
                            <span className={style.locationTimesList__time}>9 мин</span>
                            <Icon className={style.locationTimesList__icon} myClassName={'car'}/>
                            <span className={style.locationTimesList__metro}>до ТТК</span>
                        </li>
                        <li className={style.locationTimesList__item}>
                            <span className={style.locationTimesList__time}>10 мин</span>
                            <Icon className={style.locationTimesList__icon} myClassName={'car'}/>
                            <span className={style.locationTimesList__metro}>до м. «Белорусская»</span>
                        </li>
                    </ul>

                </div>


                <SectionTitle
                    classNameTitle={style.location__title}
                    classNameUnderlined={style.location__underlinedText}
                    textUnderlined={'Локация'}
                    isUnderlinedTitle={true}
                > колыбель науки Щукино, старинный район,
                    знаменитый своей научной и образовательной деятельностью.
                </SectionTitle>

                <p className={style.location__desc}>
                    Здесь работали исследовательские институты:
                    Институт Гамалеи, Курчатовский институт и другие.
                    Rakurs станет тихим и спокойным местом,
                    которое располагает к познанию и развитию
                    благодаря своей истории, атмосфере, интеллигентному окружению.
                </p>

                <LinkToPage classname={style.location__link}>
                    Подробнее о расположении
                </LinkToPage>
            </ContainerSection>
        </section>
    )
}