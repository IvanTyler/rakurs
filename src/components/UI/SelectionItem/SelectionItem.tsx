import {FC, useState} from "react";
import style from './SelectionItem.module.scss'
import {selectionItemType} from "@/src/app/types/selectionCorps";
import {ListItems} from "@/src/Components/List/ListItems";
import {clsx} from "clsx";
import {Icon} from "@/src/Components/UI/Icon/Icon";


interface ISelectionCorpsProps {
    className?: string;
    item: any[];
    activeItem: any;
    setActiveItem: (item: string) => void;
    isMobileSelect?: boolean,
}

export const SelectionItem: FC<ISelectionCorpsProps> = (
    {
        item,
        setActiveItem,
        className,
        activeItem,
        isMobileSelect,
    }
) => {

    const [toggleState, setToggleState] = useState(false);

    const toggleSelect = () => setToggleState(prev => !prev);


    return (
        <div className={clsx(style.selectionItem, className, !toggleState && style.open)}>
            {isMobileSelect &&
				<div onClick={() => toggleSelect()} className={style.selectionItem__wrapperSelectItem}>
					<div className={clsx(style.selectionItem__item, style.selected)}>
						<span className={style.selectionItem__title}>{activeItem.title}</span>
					</div>
					<div className={clsx(style.selectionItem__toggle, toggleState && style.open)}
						 ></div>
				</div>
            }

            <div className={clsx(style.selectionItem__wrapper, toggleState && isMobileSelect && style.open)}>
                <ListItems
                    items={item}
                    renderItem={(item: any) => (

                        <div onClick={() => setActiveItem(item.id)}

                             className={clsx(style.selectionItem__item, item.selected && style.selected)}
                             key={item.id}>
                            <span className={style.selectionItem__title}>{item.title}</span>
                            {item.selected && <div className={style.selectionItem__selected}>
								<Icon className={style.selectionItem__icon} myClassName={'check'}/>
							</div>}
                        </div>
                    )}
                />
            </div>
        </div>
    )
}