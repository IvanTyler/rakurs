'use client'

import {FC} from "react";
import Link from "next/link";
import style from './HeaderMenu.module.scss';
import {tabTypesUrlParamEnum} from "@/src/app/media/types/enums";

interface HeaderMenuProps {
    isOpen: boolean;
    onClose: () => void;
}

export const HeaderMenu: FC<HeaderMenuProps> = ({isOpen, onClose}) => {

    if (!isOpen) return null;

    return (
        <nav className={style.headerMenu}>
            <ul className={style.headerMenu__list}>
                <li>
                    <Link
                        className={style.headerMenu__link}
                        href={'/'}
                        onClick={onClose}
                    >
                        Главная
                    </Link>
                </li>
                <li>
                    <Link
                        className={style.headerMenu__link}
                        href={`/media/?tab=${tabTypesUrlParamEnum.news}`}
                        onClick={onClose}
                    >
                        Новости
                    </Link>
                </li>
                <li>
                    <Link
                        className={style.headerMenu__link}
                        href={`/media/?tab=${tabTypesUrlParamEnum.construction}`}
                        onClick={onClose}
                    >
                        Динамика строительства
                    </Link>
                </li>
            </ul>
        </nav>
    )
}
