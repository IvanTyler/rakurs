import {FC} from "react";
import style from './CorpsItem.module.scss'
import {clsx} from "clsx";
import {Tooltip} from "@/src/Components/UI/Tooltip/Tooltip";
import {accordionItemType} from "@/src/app/types/selectionCorps";


interface ICorpsItemProps {
    name: string | undefined,
    img: string | undefined,
    title: string | undefined,
    activeItem?: accordionItemType[],
}

export const CorpsItem: FC<ICorpsItemProps> = ({img, title, activeItem, name}) => {

    return (
        <div className={style.corpsItem}>
            <img loading='lazy' className={style.corpsItem__img} src={img} alt={title} />

            <Tooltip item={activeItem ?? []} classNameTooltip={clsx(style.corpsItem__tooltip, name && style[name])}/>

        </div>
    )
}
