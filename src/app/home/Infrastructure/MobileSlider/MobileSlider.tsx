'use client'

import {FC} from "react";
import Image from "next/image";

import style from './MobileSlider.module.scss';

import imgSlide_1 from '@/public/images/infrastructure/image-1.webp';
import imgSlide_2 from '@/public/images/infrastructure/image-2.webp';
import imgSlide_3 from '@/public/images/infrastructure/image-3.webp';
import imgSlide_4 from '@/public/images/infrastructure/image-4.webp';
import imgSlide_5 from '@/public/images/infrastructure/image-5.webp';

import imgSlide_svg from '@/public/images/infrastructure/numbering.svg';


export const MobileSlider: FC = () => {

    return (

        <div className={style.sliderScrollInfrastructure}>
            <div className={style.sliderScrollInfrastructure__slide}>

                <div className={style.sliderScrollInfrastructure__left}>
                    <span className={style.sliderScrollInfrastructure__line_1}></span>
                    <span className={style.sliderScrollInfrastructure__line_2}></span>
                    <Image className={style.sliderScrollInfrastructure__imgSlide} src={imgSlide_1}
                           alt={''}/>
                </div>
                <div className={style.sliderScrollInfrastructure__right}>
                    <span className={style.sliderScrollInfrastructure__counter}>1/5</span>

                    <h3 className={style.sliderScrollInfrastructure__title}>
                        Трёхуровневая детская площадка зонирована по возрастам
                        — каждый ярус рассчитан на свою аудиторию
                        <span className={style.sliderScrollInfrastructure__meter}>(1666 м²)</span>
                    </h3>

                    <ul className={style.sliderDescList}>
                        <li className={style.sliderDescList__item}>
                            Игровой павильон с горкой, подвесные качели, лестницы и сетки для
                            карабканья, песочная зона образуют единый комплекс, где активности
                            плавно перетекают одна в другую, пробуждают фантазию, но не перегружают
                            нейронные связи.
                        </li>
                        <li className={style.sliderDescList__item}>
                            Рядом прозрачный удобный павильон для родителей,
                            где они могут наблюдать за детьми, пока те играют.
                        </li>
                    </ul>

                    <Image className={style.sliderScrollInfrastructure__imgNumbering}
                           src={imgSlide_svg} alt={'numbering'}/>
                </div>
            </div>
            <div className={style.sliderScrollInfrastructure__slide}>
                <div className={style.sliderScrollInfrastructure__left}>
                    <span className={style.sliderScrollInfrastructure__line_1}></span>
                    <span className={style.sliderScrollInfrastructure__line_2}></span>
                    <Image className={style.sliderScrollInfrastructure__imgSlide} src={imgSlide_2}
                           alt={''}/>
                </div>
                <div className={style.sliderScrollInfrastructure__right}>
                    <span className={style.sliderScrollInfrastructure__counter}>2/5</span>

                    <h3 className={style.sliderScrollInfrastructure__title}>
                        Трёхуровневая детская площадка зонирована по возрастам
                        — каждый ярус рассчитан на свою аудиторию
                    </h3>

                    <ul className={style.sliderDescList}>
                        <li className={style.sliderDescList__item}>
                            Игровой павильон с горкой, подвесные качели, лестницы и сетки для
                            карабканья, песочная зона образуют единый комплекс, где активности
                            плавно перетекают одна в другую, пробуждают фантазию, но не перегружают
                            нейронные связи.
                        </li>
                        <li className={style.sliderDescList__item}>
                            Рядом прозрачный удобный павильон для родителей,
                            где они могут наблюдать за детьми, пока те играют.
                        </li>
                    </ul>

                    <Image className={style.sliderScrollInfrastructure__imgNumbering}
                           src={imgSlide_svg} alt={'numbering'}/>
                </div>
            </div>
            <div className={style.sliderScrollInfrastructure__slide}>
                <div className={style.sliderScrollInfrastructure__left}>
                    <span className={style.sliderScrollInfrastructure__line_1}></span>
                    <span className={style.sliderScrollInfrastructure__line_2}></span>
                    <Image className={style.sliderScrollInfrastructure__imgSlide} src={imgSlide_3}
                           alt={''}/>
                </div>
                <div className={style.sliderScrollInfrastructure__right}>
                    <span className={style.sliderScrollInfrastructure__counter}>3/5</span>

                    <h3 className={style.sliderScrollInfrastructure__title}>
                        Трёхуровневая детская площадка зонирована по возрастам
                        — каждый ярус рассчитан на свою аудиторию
                    </h3>

                    <ul className={style.sliderDescList}>
                        <li className={style.sliderDescList__item}>
                            Игровой павильон с горкой, подвесные качели, лестницы и сетки для
                            карабканья, песочная зона образуют единый комплекс, где активности
                            плавно перетекают одна в другую, пробуждают фантазию, но не перегружают
                            нейронные связи.
                        </li>
                        <li className={style.sliderDescList__item}>
                            Рядом прозрачный удобный павильон для родителей,
                            где они могут наблюдать за детьми, пока те играют.
                        </li>
                    </ul>

                    <Image className={style.sliderScrollInfrastructure__imgNumbering}
                           src={imgSlide_svg} alt={'numbering'}/>
                </div>
            </div>
            <div className={style.sliderScrollInfrastructure__slide}>
                <div className={style.sliderScrollInfrastructure__left}>
                    <span className={style.sliderScrollInfrastructure__line_1}></span>
                    <span className={style.sliderScrollInfrastructure__line_2}></span>
                    <Image className={style.sliderScrollInfrastructure__imgSlide} src={imgSlide_4}
                           alt={''}/>
                </div>
                <div className={style.sliderScrollInfrastructure__right}>
                    <span className={style.sliderScrollInfrastructure__counter}>4/5</span>

                    <h3 className={style.sliderScrollInfrastructure__title}>
                        Трёхуровневая детская площадка зонирована по возрастам
                        — каждый ярус рассчитан на свою аудиторию
                    </h3>

                    <ul className={style.sliderDescList}>
                        <li className={style.sliderDescList__item}>
                            Игровой павильон с горкой, подвесные качели, лестницы и сетки для
                            карабканья, песочная зона образуют единый комплекс, где активности
                            плавно перетекают одна в другую, пробуждают фантазию, но не перегружают
                            нейронные связи.
                        </li>
                        <li className={style.sliderDescList__item}>
                            Рядом прозрачный удобный павильон для родителей,
                            где они могут наблюдать за детьми, пока те играют.
                        </li>
                    </ul>

                    <Image className={style.sliderScrollInfrastructure__imgNumbering}
                           src={imgSlide_svg} alt={'numbering'}/>
                </div>
            </div>
            <div className={style.sliderScrollInfrastructure__slide}>
                <div className={style.sliderScrollInfrastructure__left}>
                    <span className={style.sliderScrollInfrastructure__line_1}></span>
                    <span className={style.sliderScrollInfrastructure__line_2}></span>
                    <Image className={style.sliderScrollInfrastructure__imgSlide} src={imgSlide_5}
                           alt={''}/>
                </div>
                <div className={style.sliderScrollInfrastructure__right}>
                    <span className={style.sliderScrollInfrastructure__counter}>5/5</span>

                    <h3 className={style.sliderScrollInfrastructure__title}>
                        Трёхуровневая детская площадка зонирована по возрастам
                        — каждый ярус рассчитан на свою аудиторию
                    </h3>

                    <ul className={style.sliderDescList}>
                        <li className={style.sliderDescList__item}>
                            Игровой павильон с горкой, подвесные качели, лестницы и сетки для
                            карабканья, песочная зона образуют единый комплекс, где активности
                            плавно перетекают одна в другую, пробуждают фантазию, но не перегружают
                            нейронные связи.
                        </li>
                        <li className={style.sliderDescList__item}>
                            Рядом прозрачный удобный павильон для родителей,
                            где они могут наблюдать за детьми, пока те играют.
                        </li>
                    </ul>

                    <Image className={style.sliderScrollInfrastructure__imgNumbering}
                           src={imgSlide_svg} alt={'numbering'}/>
                </div>
            </div>
        </div>


    )
}