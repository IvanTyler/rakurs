import {FC} from "react";
import style from './TerraceSilencePlace.module.scss';
import Image from "next/image";


interface ITerraceSilencePlaceProps {
    img: string;
    title: string;
    desc: string;
}

export const TerraceSilencePlace: FC<ITerraceSilencePlaceProps> = ({img, title, desc}) => {
    return (
        <div className={style.terraceSilencePlace}>
            <Image className={style.terraceSilencePlace__img} src={img} alt={title} />
            <h4 className={style.terraceSilencePlace__title}>{title}</h4>
            <p className={style.terraceSilencePlace}>{desc}</p>
        </div>
    )
}