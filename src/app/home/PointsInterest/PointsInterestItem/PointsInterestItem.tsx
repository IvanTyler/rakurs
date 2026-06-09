import {FC} from "react";
import style from './PointsInterestItem.module.scss'
import {clsx} from "clsx";
import {Tooltip} from "@/src/Components/UI/Tooltip/Tooltip";
import {accordionItemType} from "@/src/app/types/selectionCorps";


interface IPointsItemProps {
    name?: string | undefined,
    img?: string | undefined,
    title: string | undefined,
    activeItem?: accordionItemType[],
}

export const PointsInterestItem: FC<IPointsItemProps> = ({img, title, activeItem, name}) => {

    return (
        <div className={style.pointsInterestItem}>
            <img loading='lazy' className={style.pointsInterestItem__img} src={img} alt={title} />

            <Tooltip item={activeItem ?? []} classNameTooltip={clsx(style.pointsInterestItem__tooltip, name && style[name])}/>

        </div>
    )
}
