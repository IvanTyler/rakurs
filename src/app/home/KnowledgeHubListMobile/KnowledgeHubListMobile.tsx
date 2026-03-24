import {FC} from "react";
import style from './KnowledgeHubListMobile.module.scss';
import {LinkToPage} from "@/src/Components/UI/LinkToPage/LinkToPage";

import img360 from "@/public/images/knowledge-hub-list/image360.webp";
import Image from "next/image";


export const KnowledgeHubListMobile: FC = () => {

    return (
        <div className={style.KnowledgeHubListMobile}>
            <div className={style.sliderScrollKnowledgeHub}>
                <div className={style.sliderScrollKnowledgeHub__wrapper}>

                    <div className={style.sliderScrollKnowledgeHub__slide}>
                        <span className={style.sliderScrollKnowledgeHub__number}>(01)</span>
                        <h3 className={style.sliderScrollKnowledgeHub__title}>
                            Подборка книг <br/>
                            под кураторством <br/>
                            «Подписных изданий»
                        </h3>
                        <p className={style.sliderScrollKnowledgeHub__desc}>
                            Сердце хаба – частная библиотека площадью 110 м²,
                            созданная легендарным книжным магазином из Петербурга
                            «Подписные издания». Команда кураторов создала книжный фонд,
                            который будет органично дополняться и меняться с течением
                            жизни дома. Атмосфера настоящего библиотечного
                            зала с настроем на вдумчивость, вдохновение и покой.
                        </p>
                        <Image className={style.sliderScrollKnowledgeHub__img} src={img360} alt={''}/>

                    </div>

                    <div className={style.sliderScrollKnowledgeHub__slide}>
                        <span className={style.sliderScrollKnowledgeHub__number}>(02)</span>
                        <h3 className={style.sliderScrollKnowledgeHub__title}>
                            Пространства <br/>
                            для детей <br/>
                            и взрослых
                        </h3>
                        <p className={style.sliderScrollKnowledgeHub__desc}>
                            В пространстве хаба команда «Подписных изданий» предложила зонирование:
                            отдельные места для детей и взрослых. В детской зоне младшее
                            поколение сможет учиться через игру и выбирать книги из большой
                            подборки детской литературы. Взрослые же смогут уединиться
                            с книгой там, где не помешает весёлый смех.
                        </p>

                        <Image className={style.sliderScrollKnowledgeHub__img} src={img360} alt={''}/>
                    </div>

                    <div className={style.sliderScrollKnowledgeHub__slide}>
                        <span className={style.sliderScrollKnowledgeHub__number}>(03)</span>
                        <h3 className={style.sliderScrollKnowledgeHub__title}>
                            Дизайн пространства <br/>
                            от архитектурного <br/>
                            бюро ХХХ
                        </h3>
                        <p className={style.sliderScrollKnowledgeHub__desc}>
                            В пространстве хаба команда «Подписных изданий» предложила
                            зонирование: отдельные места для детей и взрослых.
                            В детской зоне младшее поколение сможет учиться через игру
                            и выбирать книги из большой подборки детской литературы.
                            Взрослые же смогут уединиться с книгой там,
                            где не помешает весёлый смех.
                        </p>

                        <Image className={style.sliderScrollKnowledgeHub__img} src={img360} alt={''}/>
                    </div>

                    <div className={style.sliderScrollKnowledgeHub__slide}>
                        <span className={style.sliderScrollKnowledgeHub__number}>(04)</span>
                        <h3 className={style.sliderScrollKnowledgeHub__title}>
                            Места для работы <br/>
                            и учёбы
                        </h3>
                        <p className={style.sliderScrollKnowledgeHub__desc}>
                            В хабе предусмотрены пространства для занятий самостоятельно
                            или с репетитором — здесь будет удобно и школьнику,
                            готовящемуся к олимпиаде, и взрослому, изучающему язык
                            или осваивающему новую профессию. Из зум-капсул можно провести
                            онлайн-встречу, а у солнечных окон разместиться с ноутбуком или книгой.
                        </p>
                        <LinkToPage classname={style.sliderScrollKnowledgeHub__link}>
                            Подробнее <br /> о Knowledge hub
                        </LinkToPage>

                        <Image className={style.sliderScrollKnowledgeHub__img} src={img360} alt={''}/>
                    </div>

                </div>
            </div>
        </div>
    )
}