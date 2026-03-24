import style from './TerraceSilenceDesc.module.scss';
import {FC} from "react";

interface ITerraceSilenceDescProps {
    img: string;
    title: string;
    desc: string;
}

export const TerraceSilenceDesc: FC<ITerraceSilenceDescProps> = ({img, title, desc}) => {
    return (
        <div className={style.terraceSilenceDesc}>
            <figure className={style.terraceSilenceDesc__figure}>
                <div className={style.terraceSilenceDesc__wrapperImg}>
                    <img className={style.terraceSilenceDesc__img} src={img} alt={title}/>
                </div>
                <span className={style.terraceSilenceDesc__title}>
                    {title}
                </span>
                <p className={style.terraceSilenceDesc__desc}>{desc}</p>
            </figure>
        </div>
    )
}