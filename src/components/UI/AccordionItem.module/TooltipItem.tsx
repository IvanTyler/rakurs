import {FC} from "react";
import style from './AccordionItem.module.scss'
import {clsx} from "clsx";
import {accordionType} from "@/src/app/types/terraceSilence";

interface IAccordionItemProps {
    claasName?: string;
    item: accordionType;
    isContent?: boolean;
    getId: (item: string) => void;
}

export const TooltipItem: FC<IAccordionItemProps> = (
    {
        item,
        getId,
        isContent,
        claasName,
    }) => {
    return (
        <div className={clsx(style.accordionItem, claasName, item.active && isContent && style.white)}>
            <div
                className={clsx(
                    style.accordionItem__circleToggle,
                    item.active && style.open,
                    item.active && isContent && style.openWhite)}
                onClick={() => getId(item.id)
            }>
                <div className={clsx(style.accordionItem__line, style.verticalLine)}></div>
                <div className={clsx(style.accordionItem__line, style.horizontalLine)}></div>
            </div>

            {item.active && isContent &&
				<div className={style.accordionItem__content}>
					<span className={style.accordionItem__title}>{item.title}</span>
					<span className={style.accordionItem__desc}>{item.desc}</span>
				</div>
            }
        </div>
    )
}