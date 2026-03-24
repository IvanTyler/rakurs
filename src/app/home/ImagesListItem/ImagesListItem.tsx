import {FC} from "react";
import style from './ImagesListItem.module.scss'
import Image from "next/image";

import {imagesType} from "@/src/app/types/improvement";
import {clsx} from "clsx";


interface IImagesListProps {
    classNameDate?: string;
    classNameDesc?: string;
    item: imagesType;
}

export const ImagesListItem: FC<IImagesListProps> = ({item, classNameDate, classNameDesc}) => {
    return (
            <li className={style.imagesListItem}>
                <figure className={style.imagesListItem__figure}>
                    <img loading={'lazy'} src={item.img} alt={item.label}
                           className={style.imagesListItem__img}/>
                </figure>
                <div className={style.imagesListItem__bottom}>
                    {item.label && <figcaption className={style.imagesListItem__label}>
                        {item.label}
                    </figcaption>}
                    {item.desc && <p className={clsx(style.imagesListItem__desc, classNameDesc)}>
                        {item.desc}
                    </p>}
                    {item.date && <p className={clsx(style.imagesListItem__date, classNameDate)}>
                        {item.date}
					</p>}
                </div>
            </li>
    )
}