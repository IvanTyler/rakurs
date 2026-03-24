import {FC, useState} from "react";
import style from './MobileScrollHint.module.scss';

import imgMobileScrollHint from '../../../../public/images/mobileScrollHint/MobileScrollHint.svg';
import Image from "next/image";


interface MobileScrollHintProps {
    setIsScrollbar: (item: boolean) => void;
}

export const MobileScrollHint: FC<MobileScrollHintProps> = ({setIsScrollbar}) => {

    const [isShowBlock, setIsShowBlock] = useState(true);

    const isHideBlock = () => {
        setIsShowBlock((prev: boolean) => prev = false);
        setIsScrollbar(true)
    }

    return (
        <>
            {isShowBlock && <div className={style.mobileScrollHint} onClick={isHideBlock}>
                <Image src={imgMobileScrollHint} alt={'Двигай влево и вправо для изучения пространства'}/>
                <p className={style.mobileScrollHint__text}>
                    Двигай влево и вправо для изучения пространства
                </p>
            </div>}
        </>
    )
}