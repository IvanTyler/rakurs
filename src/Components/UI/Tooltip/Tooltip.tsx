import {FC, useState} from "react";
import style from './Tooltip.module.scss'
import {ListItems} from "@/src/Components/List/ListItems";
import {TooltipItem} from "@/src/Components/UI/AccordionItem/TooltipItem";
import {accordionItemType} from "@/src/app/types/selectionCorps";


interface ICorpsItemProps {
    classNameTooltip?: string;
    name?: string | undefined,
    item: accordionItemType[],
}

export const Tooltip: FC<ICorpsItemProps> = ({item, classNameTooltip}) => {

    const [itemState, setItemState] = useState<accordionItemType[]>(item);

    const setActiveCorps = (id: string) => {
        setItemState((prev: accordionItemType[]) => prev.map((item: accordionItemType) => ({
            ...item,
            active: item.id === id ? !item.active : false,
        })));
    }

    return (
        <div className={style.tooitip}>

            <ListItems
                items={itemState}
                renderItem={(item: accordionItemType) => (
                    <TooltipItem
                        claasName={classNameTooltip}
                        key={item.id}
                        item={item}
                        getId={setActiveCorps}
                        isContent={true}
                    />
                )}
            />
        </div>
    )
}
