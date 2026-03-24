'use client'


import {FC} from "react";
import style from './Plants.module.scss';

interface IPlantsProps {
    item: any[];
}

export const Plants: FC<IPlantsProps> = ({item}) => {
    return (
        <ul className={style.plants}>
            {item.map((plant: any) => (
                <li className={style.plants__item} key={plant.id}>
                    <figure className={style.plants__figure}>
                        <img className={style.plants__img} loading='lazy' src={plant.path}
                             alt={plant.text}/>
                        <figcaption className={style.plants__figcaption}>
                            {plant.text}
                        </figcaption>
                    </figure>
                </li>
            ))}
        </ul>
    )
}