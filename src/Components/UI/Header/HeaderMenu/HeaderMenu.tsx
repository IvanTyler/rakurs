'use client'

import {FC} from "react";
import Link from "next/link";
import {clsx} from "clsx";
import style from './HeaderMenu.module.scss';
import {tabTypesUrlParamEnum} from "@/src/app/media/types/enums";

interface HeaderMenuProps {
    isOpen: boolean;
    onClose: () => void;
}

export const HeaderMenu: FC<HeaderMenuProps> = ({isOpen, onClose}) => {

    return (
        <nav
            className={clsx(style.headerMenu, isOpen && style.headerMenu_open)}
            aria-hidden={!isOpen}
        >
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
