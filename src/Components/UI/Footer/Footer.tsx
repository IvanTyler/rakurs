import {FC} from "react";
import style from './Footer.module.scss';
import {ContainerSection} from "@/src/Components/UI/Container/ContainerSection";
import Link from "next/link";

import imgBanner from '@/public/images/rakurs-banner.svg'
import Image from "next/image";
import {SliderNews} from "@/src/app/home/SliderNews/SliderNews";
import {clsx} from "clsx";
import {Button} from "@/src/Components/UI/SubmitButton/Button";

export const Footer: FC = () => {
    return (
        <footer className={style.footer}>
            <ContainerSection className={style.containerFooter}>
                <Image className={style.footer__banner} src={imgBanner} alt={'rakurs'}/>

                <div className={style.footer__left}>
                    <nav className={style.footerNav}>
                        <ul className={style.footerNavList}>
                            <li className={style.footerNavList__item}>
                                <Link className={style.footerNavList__link} href={''}>О проекте</Link>
                            </li>
                            <li className={style.footerNavList__item}>
                                <Link className={style.footerNavList__link} href={''}>Квартиры</Link>
                            </li>
                            <li className={style.footerNavList__item}>
                                <Link className={style.footerNavList__link} href={''}>Паркинг</Link>
                            </li>
                            <li className={style.footerNavList__item}>
                                <Link className={style.footerNavList__link} href={''}>Кладовые</Link>
                            </li>
                            <li className={style.footerNavList__item}>
                                <Link className={style.footerNavList__link} href={''}>Помещения</Link>
                            </li>
                        </ul>

                        <ul className={style.footerNavList}>
                            <li className={style.footerNavList__item}>
                                <Link className={style.footerNavList__link} href={''}>Новости</Link>
                            </li>
                            <li className={style.footerNavList__item}>
                                <Link className={style.footerNavList__link} href={''}>Контакты</Link>
                            </li>
                            <li className={style.footerNavList__item}>
                                <Link className={style.footerNavList__link} href={''}>Способы покупки</Link>
                            </li>
                            <li className={style.footerNavList__item}>
                                <Link className={style.footerNavList__link} href={''}>Документы</Link>
                            </li>
                            <li className={style.footerNavList__item}>
                                <Link className={style.footerNavList__link} href={''}>Динамика строительства</Link>
                            </li>
                        </ul>
                    </nav>

                    <SliderNews classNameSlideContainer={style.footer__sliderContainer} />
                </div>

                <div className={style.footer__right}>
                    <div className={clsx(style.contacts, style.dar)}>
                        <h4 className={style.contacts__title}>(офис продаж Dar)</h4>
                        <p className={style.contacts__address}>БЦ Белые Сады, ул. Лесная, д. 7, вход А, эт. 7</p>
                        <a href="tel:+74958379573" className={style.contacts__phone}>+7 (495) 837-95-73</a>
                    </div>

                    <div className={clsx(style.contacts, style.rakurs)}>
                        <h4 className={style.contacts__title}>(адрес ЖК RAKURS)</h4>
                        <p className={style.contacts__address}>ул. Маршала Бирюзова, влд. 1</p>
                        <a href="tel:+74951724088" className={style.contacts__phone}>+7 (495) 172-40-88</a>
                    </div>

                    <span className={style.footer__copyright}>
                        © 2025 RAKURS
                    </span>

                    <span className={style.footer__reboot}>Made by REBOOT</span>

                    <Button className={style.footer__button} label={'Оставить заявку'} />
                </div>
            </ContainerSection>
        </footer>
    )
}
