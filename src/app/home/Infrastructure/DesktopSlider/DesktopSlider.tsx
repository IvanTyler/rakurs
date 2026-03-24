'use client'

import {FC, useEffect, useRef, useState} from "react";
import Image from "next/image";

import style from './DesktopSlider.module.scss'

import imgSlide_1 from '@/public/images/infrastructure/image-1.webp';
import imgSlide_2 from '@/public/images/infrastructure/image-2.webp';
import imgSlide_3 from '@/public/images/infrastructure/image-3.webp';
import imgSlide_4 from '@/public/images/infrastructure/image-4.webp';
import imgSlide_5 from '@/public/images/infrastructure/image-5.webp';

import imgSlide_svg from '@/public/images/infrastructure/numbering.svg';


interface IDesktopSliderProps {
    elementRefSection: React.RefObject<HTMLDivElement | null>,
}

export const DesktopSlider: FC<IDesktopSliderProps> = ({elementRefSection}) => {

    const elementRefSliderScroll = useRef<HTMLDivElement>(null);

    const [scrollContainerHeight, setScrollContainerHeight] = useState(0);
    const [bufferState, setBufferState] = useState(0);


    useEffect(() => {
        // Проверяем оба рефа
        if (!elementRefSliderScroll.current || !elementRefSection?.current) return;

        const slider = elementRefSliderScroll.current;
        const section = elementRefSection?.current;

        // Получаем полную высоту контента
        const updateHeight = () => {
            const scrollHeight = slider.scrollHeight;
            const clientHeight = slider.clientHeight;

            const innerWidth = window.innerWidth;

            const isBufferFunc = () => {

                if (innerWidth >= 1200) {
                    return setBufferState(750);
                }
            }

            isBufferFunc();

            setScrollContainerHeight((scrollHeight - clientHeight));
        };

        updateHeight();

        const handleScroll = () => {
            // Проверяем ещё раз внутри обработчика
            if (!slider || !section) return;

            const rect = section.getBoundingClientRect();
            const scrollTop = Math.floor(rect.y);

            if (scrollTop <= 0) {
                const scrollTopAbs = Math.abs(scrollTop);
                const maxSliderScroll = (slider.scrollHeight - slider.clientHeight);

                // Ограничиваем максимальное значение
                slider.scrollTop = Math.min(scrollTopAbs, maxSliderScroll);

            } else {
                // Сбрасываем когда секция выше viewport
                section.scrollTop = 0;
            }
        };

        window.addEventListener('scroll', handleScroll);
        window.addEventListener('resize', updateHeight)

        // Важно: очистка эффекта
        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.addEventListener('resize', updateHeight)

        };
    }, []);


    return (

        <div className={style.scrollContainer} style={{height: `${scrollContainerHeight + bufferState}px`}}>
            <div className={style.wrapperSlider}>
                <div ref={elementRefSliderScroll} className={style.sliderScrollInfrastructure}>
                    <div className={style.sliderScrollInfrastructure__wrapper}>
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
                </div>
            </div>

        </div>

    )
}