import {FC} from "react";
import style from "./KindergartenImg.module.scss";
import img768 from "@/public/images/kindergarten/kindergarten768.webp";
import img360 from "@/public/images/kindergarten/kindergarten360.webp";
import img from "@/public/images/kindergarten/kindergarten.webp";
import Image from "next/image";


export const KindergartenImg: FC = () => {
    return (
        <div className={style.kindergartenImg__wrapper}>
            <picture className={style.kindergartenImg__picture}>
                <source className={style.kindergartenImg__img} media="(max-width:800px)"
                        srcSet={img768.src}/>
                <source className={style.kindergartenImg__img} media="(max-width:550px)"
                        srcSet={img360.src}/>
                <Image className={style.kindergartenImg__img} src={img} alt={''}/>
            </picture>
        </div>
    )
}