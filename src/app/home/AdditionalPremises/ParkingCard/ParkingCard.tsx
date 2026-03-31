import {FC} from "react";
import style from "./ParkingCard.module.scss";
import imgParking360 from "@/public/images/additional-premises/parking360.webp";
import imgParking768 from "@/public/images/additional-premises/parking768.webp";
import imgParking1024 from "@/public/images/additional-premises/parking1024.webp";
import imgParking from "@/public/images/additional-premises/parking.webp";
import {LinkToPage} from "@/src/Components/UI/LinkToPage/LinkToPage";
import Image from "next/image";
import {clsx} from "clsx";

interface IParkingCardProps {
    className?: string | any;
}

export const ParkingCard: FC<IParkingCardProps> = ({className}) => {
    return (
        <article className={clsx(style.parkingCard, className)}>
            <picture className={style.parkingCard__picture}>
                <source className={style.parkingCard__img}
                        media="(max-width:600px)"
                        srcSet={imgParking360.src}
                />
                <source className={style.parkingCard__img}
                        media="(max-width:780px)"
                        srcSet={imgParking768.src}
                />
                <source className={style.parkingCard__img}
                        media="(max-width:1050px)"
                        srcSet={imgParking1024.src}
                />
                <Image
                    className={style.parkingCard__img}
                    src={imgParking}
                    alt="Паркинг"
                />
            </picture>

            <div className={style.parkingCard__wrapper}>
                <h3 className={style.parkingCard__title}>
                    Паркинг на
                    <span className={style.parkingCard__count}>374</span>
                    места
                </h3>

                <p className={style.parkingCard__desc}>
                    Сдаётся с дизайнерской отделкой от Rymar.studio
                </p>
            </div>

            <LinkToPage classname={style.parkingCard__link}>
                Выбрать паркинг
            </LinkToPage>
        </article>

    )
}
