import {FC, useState} from "react";
import style from './Tooltip.module.scss'
import {ListItems} from "@/src/Components/List/ListItems";
import {TooltipItem} from "@/src/Components/UI/AccordionItem.module/TooltipItem";


interface ICorpsItemProps {
    classNameTooltip?: string;
    name?: string | undefined,
    item: any[],
}

export const Tooltip: FC<ICorpsItemProps> = ({item, classNameTooltip}) => {

    const [itemState, setItemState] = useState(item);

    const setActiveCorps = (id: string) => {
        setItemState((prev: any) => prev.map((item: any) => ({
            ...item,
            active: item.id === id ? !item.active : false,
        })));
    }

    return (
        <div className={style.tooitip}>

            <ListItems
                items={itemState}
                renderItem={(item: any) => (
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
