import {FC} from "react";
import style from './ApartmentsFromStudios.module.scss'
import {ContainerSection} from "@/src/Components/UI/Container/ContainerSection";
import {SectionTitle} from "@/src/Components/UI/SectionTitle/SectionTitle";

import imgLayout_1 from '@/public/images/apartments-from-studios/layout-1.svg'
import imgLayout_2 from '@/public/images/apartments-from-studios/layout-2.svg'
import imgLayout_3 from '@/public/images/apartments-from-studios/layout-3.svg'

import imgLayout_1_768 from '@/public/images/apartments-from-studios/layout-1-768.svg'
import imgLayout_2_768 from '@/public/images/apartments-from-studios/layout-2-768.svg'

import imgBackground from '@/public/images/apartments-from-studios/image.webp'
import imgBackground768 from '@/public/images/apartments-from-studios/image768.webp'
import imgBackground360 from '@/public/images/apartments-from-studios/image360.webp'

import Image from "next/image";
import {TabsAccordion} from "@/src/Components/UI/TabsAccardion/TabsAccordion";
import {planningSolutionsData} from "@/src/app/home/ApartmentsFromStudios/data";
import {clsx} from "clsx";


export const ApartmentsFromStudios: FC = () => {
    return (
        <section className={style.apartmentsFromStudios}>
            <ContainerSection className={style.containerApartmentsFromStudios}>
                <picture className={style.apartmentsFromStudios__picture}>
                    {/*<source className={style.apartmentsFromStudios__img} media="(max-width:400px)"*/}
                    {/*        srcSet={imgBackground360.src}/>*/}

                    <source className={style.apartmentsFromStudios__img} media="(max-width:770px)"
                            srcSet={imgBackground768.src}/>
                    <Image className={style.apartmentsFromStudios__img} src={imgBackground} alt={'Квартиры от студий'}/>
                </picture>

                <SectionTitle
                    classNameTitle={style.apartmentsFromStudios__title}
                    classNameUnderlined={style.apartmentsFromStudios__undelined}
                    textUnderlined={'Квартиры'}
                    isUnderlinedTitle={true}
                > от студий 28.7 м² <br/>
                    до четырёхкомнатных квартир 152.5 м² — есть <br/>
                    выбор для любого жизненного сценария.
                </SectionTitle>


                <ul className={style.apartmentsFromStudiosList}>
                    <li className={style.apartmentsFromStudiosList__item}>
                        <SectionTitle
                            classNameTitle={style.apartmentsFromStudios__title}
                            classNameUnderlined={style.apartmentsFromStudios__undelined}
                            textUnderlined={'Квартиры'}
                            isUnderlinedTitle={true}
                        > от студий 28.7 м² <br/>
                            до четырёхкомнатных квартир 152.5 м² — есть <br/>
                            выбор для любого жизненного сценария.
                        </SectionTitle>

                        <picture className={style.apartmentsFromStudiosList__picture}>

                            <source className={style.apartmentsFromStudiosList__img} media="(max-width:550px)"
                                    srcSet={imgBackground360.src}/>
                            <Image className={style.apartmentsFromStudiosList__img} src={imgBackground768}
                                   alt={'Квартиры от студий'}/>
                        </picture>
                    </li>
                    <li className={clsx(style.apartmentsFromStudiosList__item, style.apartmentFinishing)}>
                        <div className={style.apartmentsFromStudiosList__left}>
                            <span className={style.apartmentsFromStudiosList__number}>(01)</span>
                            <h3 className={style.apartmentsFromStudiosList__title}>Отделка квартир</h3>

                            <h4 className={style.apartmentsFromStudiosList__titleDesc}>
                                Квартиры без отделки
                            </h4>
                            <p className={style.apartmentsFromStudiosList__desc}>
                                В таких квартирах можно написать свою историю жизни,
                                полностью спланировать помещение и реализовать самые смелые идеи
                            </p>

                            <h4 className={style.apartmentsFromStudiosList__titleDesc}>
                                Отделка white box
                            </h4>
                            <p className={style.apartmentsFromStudiosList__desc}>
                                Для тех, кто выбрал идеальную планировку и стремится потратить на обстановку минимальные
                                усилия, затраты и время
                            </p>

                        </div>

                        <picture className={style.apartmentsFromStudiosList__picture}>
                            <source className={style.apartmentsFromStudiosList__img} media="(max-width:550px)"
                                    srcSet={imgLayout_1.src}/>
                            <source className={style.apartmentsFromStudiosList__img} media="(max-width:770px)"
                                    srcSet={imgLayout_1_768.src}/>
                            <Image className={style.apartmentsFromStudiosList__img} src={imgLayout_1}
                                   alt={'Отделка квартир'}/>
                        </picture>
                    </li>
                    <li className={clsx(style.apartmentsFromStudiosList__item, style.planningSolutions)}>
                    <div className={style.apartmentsFromStudiosList__left}>

                            <span className={style.apartmentsFromStudiosList__number}>(02)</span>
                            <h3 className={style.apartmentsFromStudiosList__title}>
                                Выверенные планировочные решения
                            </h3>

                            <TabsAccordion
                                dataTabs={planningSolutionsData}
                                className={style.accordion}
                            />
                        </div>

                        <picture className={style.apartmentsFromStudiosList__picture}>

                            <source className={style.apartmentsFromStudiosList__img} media="(max-width:770px)"
                                    srcSet={imgLayout_2_768.src}/>
                            <Image className={style.apartmentsFromStudiosList__img} src={imgLayout_2}
                                   alt={'Отделка квартир'}/>
                        </picture>

                    </li>
                    <li className={clsx(style.apartmentsFromStudiosList__item, style.combiningApartments)}>
                        <div className={style.apartmentsFromStudiosList__left}>

                            <span className={style.apartmentsFromStudiosList__number}>(03)</span>
                            <h3 className={style.apartmentsFromStudiosList__title}>
                                Объединение квартир
                            </h3>

                            <p className={style.apartmentsFromStudiosList__desc}>
                                Можно соединить две соседние понравившиеся планировки
                                в одну, если квартиры разделены силикатными газоблоками,
                                а не стенами из монолитного железобетона.
                            </p>
                        </div>

                        <picture className={style.apartmentsFromStudiosList__picture}>


                            <Image className={style.apartmentsFromStudiosList__img} src={imgLayout_3}
                                   alt={'Отделка квартир'}/>
                        </picture>

                    </li>
                </ul>
            </ContainerSection>

        </section>
    )
}
