'use client'

import {FC, useState} from "react";
import style from './Header.module.scss';
import Image from 'next/image';

import Link from "next/link";

import logo from '../../../assets/icons/logo.svg';
import favoritesIcon from '../../../assets/icons/favorites.svg';
import {Sandwich} from "@/src/Components/UI/Sandwich/Sandwich";
import {ContainerSection} from "@/src/Components/UI/Container/ContainerSection";
import {LinkToPage} from "@/src/Components/UI/LinkToPage/LinkToPage";

export const Header: FC = () => {

    const [isOpenMenu, setIsOpenMenu] = useState(false);

    return (
        <header className={style.header}>
            <ContainerSection className={style.containerHeader}>
                <Link className={style.header__linkLogo} href={'/'}>
                    <Image src={logo} alt="logo" className={style.header__logo}/>
                </Link>
                <LinkToPage classname={style.header__elector}>Выбрать квартиру</LinkToPage>
                <Link className={style.header__tel} href={'tel:+74958593634'}>+7 (495) 859-36-34</Link>
                <Link className={style.header__favorites} href={'/favorites'}>
                    <Image src={favoritesIcon} alt='favorites' className={style.header__iconFavorites}/>
                </Link>
                <Sandwich isOpenMenu={isOpenMenu} setIsOpenMenu={setIsOpenMenu}/>
            </ContainerSection>
        </header>
    )
}