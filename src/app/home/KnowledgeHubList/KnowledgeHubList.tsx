import {FC} from "react";
import style from './KnowledgeHubList.module.scss';
import {ContainerSection} from "@/src/Components/UI/Container/ContainerSection";
import {LinkToPage} from "@/src/Components/UI/LinkToPage/LinkToPage";

import imgSticky from "@/public/images/knowledge-hub-list/image.webp";
import imgSticky1024 from "@/public/images/knowledge-hub-list/image1024.webp";
import imgSticky768 from "@/public/images/knowledge-hub-list/image768.webp";

import Image from "next/image";

export const KnowledgeHubList: FC = () => {
    return (
        <section className={style.knowledgeHubListSection}>
            <ContainerSection className={style.containerKnowledgeHubList}>
                <div className={style.knowledgeHubListSection__wrapperImg}>
                    <picture className={style.knowledgeHubListSection__picture}>
                        <source className={style.knowledgeHubListSection__img} media="(max-width:850px)"
                                srcSet={imgSticky768.src}/>
                        <source className={style.knowledgeHubListSection__img} media="(max-width:1100px)"
                                srcSet={imgSticky1024.src}/>
                        <Image className={style.knowledgeHubListSection__img} src={imgSticky} alt={''}/>
                    </picture>
                </div>
                <ul className={style.knowledgeHubList}>
                    <li className={style.knowledgeHubList__item}>
                        <span className={style.knowledgeHubList__number}>(01)</span>
                        <h3 className={style.knowledgeHubList__title}>
                            Подборка книг <br/>
                            под кураторством <br/>
                            «Подписных изданий»
                        </h3>
                        <div className={style.knowledgeHubList__center}></div>
                        <div className={style.knowledgeHubList__penultimate}></div>
                        <p className={style.knowledgeHubList__desc}>
                            Сердце хаба – частная библиотека площадью 110 м²,
                            созданная легендарным книжным магазином из Петербурга
                            «Подписные издания». Команда кураторов создала книжный фонд,
                            который будет органично дополняться и меняться с течением
                            жизни дома. Атмосфера настоящего библиотечного
                            зала с настроем на вдумчивость, вдохновение и покой.
                        </p>
                    </li>
                    <li className={style.knowledgeHubList__item}>
                        <span className={style.knowledgeHubList__number}>(02)</span>
                        <h3 className={style.knowledgeHubList__title}>
                            Пространства <br/>
                            для детей <br/>
                            и взрослых
                        </h3>
                        <div className={style.knowledgeHubList__center}></div>
                        <div className={style.knowledgeHubList__penultimate}></div>

                        <p className={style.knowledgeHubList__desc}>
                            В пространстве хаба команда «Подписных изданий» предложила зонирование:
                            отдельные места для детей и взрослых. В детской зоне младшее
                            поколение сможет учиться через игру и выбирать книги из большой
                            подборки детской литературы. Взрослые же смогут уединиться
                            с книгой там, где не помешает весёлый смех.
                        </p>
                    </li>
                    <li className={style.knowledgeHubList__item}>
                        <span className={style.knowledgeHubList__number}>(03)</span>
                        <h3 className={style.knowledgeHubList__title}>
                            Дизайн пространства <br/>
                            от архитектурного <br/>
                            бюро ХХХ
                        </h3>
                        <div className={style.knowledgeHubList__center}></div>
                        <div className={style.knowledgeHubList__penultimate}></div>
                        <p className={style.knowledgeHubList__desc}>
                            В пространстве хаба команда «Подписных изданий» предложила
                            зонирование: отдельные места для детей и взрослых.
                            В детской зоне младшее поколение сможет учиться через игру
                            и выбирать книги из большой подборки детской литературы.
                            Взрослые же смогут уединиться с книгой там,
                            где не помешает весёлый смех.
                        </p>
                    </li>
                    <li className={style.knowledgeHubList__item}>
                        <span className={style.knowledgeHubList__number}>(04)</span>
                        <h3 className={style.knowledgeHubList__title}>
                            Места для работы <br/>
                            и учёбы
                        </h3>
                        <div className={style.knowledgeHubList__center}></div>
                        <div className={style.knowledgeHubList__penultimate}></div>
                        <p className={style.knowledgeHubList__desc}>
                            В хабе предусмотрены пространства для занятий самостоятельно
                            или с репетитором — здесь будет удобно и школьнику,
                            готовящемуся к олимпиаде, и взрослому, изучающему язык
                            или осваивающему новую профессию. Из зум-капсул можно провести
                            онлайн-встречу, а у солнечных окон разместиться с ноутбуком или книгой.
                        </p>

                        <LinkToPage classname={style.knowledgeHubList__link}>
                            Подробнее о Knowledge hub
                        </LinkToPage>
                    </li>
                </ul>
            </ContainerSection>
        </section>
    )
}