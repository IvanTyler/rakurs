import {FC} from "react";
import style from "./StoreroomsCard.module.scss";
import imgStorerooms360 from "@/public/images/additional-premises/storerooms360.webp";
import imgStorerooms768 from "@/public/images/additional-premises/storerooms768.webp";
import imgStorerooms1024 from "@/public/images/additional-premises/storerooms1024.webp";
import imgStorerooms from "@/public/images/additional-premises/storerooms.webp";
import {LinkToPage} from "@/src/Components/UI/LinkToPage/LinkToPage";
import {clsx} from "clsx";
import Image from "next/image";


interface IStoreroomsCardProps {
    className?: string | any;
}

export const StoreroomsCard: FC<IStoreroomsCardProps> = ({className}) => {
    return (
        <article className={clsx(style.storeroomsCard, className)}>
            <figure className={style.storeroomsCard__figure}>
                <picture className={style.storeroomsCard__picture}>
                    <source className={style.storeroomsCard__img}
                            media="(max-width:500px)"
                            srcSet={imgStorerooms360.src}
                    />
                    <source className={style.storeroomsCard__img}
                            media="(max-width:780px)"
                            srcSet={imgStorerooms768.src}
                    />
                    <source className={style.storeroomsCard__img}
                            media="(max-width:1050px)"
                            srcSet={imgStorerooms1024.src}
                    />
                    <Image
                        className={style.storeroomsCard__img}
                        src={imgStorerooms}
                        alt="Кладовые"
                    />
                </picture>
                <figcaption className={style.storeroomsCard__figcaption}>
                    <span className={style.storeroomsCard__count}>184</span>
                    <h3 className={style.storeroomsCard__title}>Кладовых</h3>
                </figcaption>
            </figure>

            <p className={style.storeroomsCard__desc}>
                Будут сданы без отделки
            </p>

            <LinkToPage classname={style.storeroomsCard__link}>
                Выбрать кладовую
            </LinkToPage>
        </article>

    )
}
