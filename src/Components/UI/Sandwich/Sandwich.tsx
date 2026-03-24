import {FC} from "react";
import {clsx} from "clsx";
import style from './Sandwich.module.scss'

interface ISandwichProps {
    isOpenMenu: boolean;
    setIsOpenMenu: (prev: boolean | ((prev: boolean) => boolean)) => void; // Указание на то, что это может быть функция или булево
}

export const Sandwich: FC<ISandwichProps> = ({ isOpenMenu, setIsOpenMenu }) => {

    const toggleMenu = () => setIsOpenMenu(prev => !prev);

    return (
        <div className={clsx(style.sandwich)} onClick={toggleMenu}>
            <div className={style.sandwich__wrapper}>
                <span className={clsx(style.sandwich__item, isOpenMenu && style.open)}></span>
            </div>
        </div>
    )
}