import {FC} from "react";
import {tabsMediaType} from "@/src/Components/UI/TabsMedia/type";
import style from './TabsMediaItem.module.scss';
import {clsx} from "clsx";

interface TabsMediaItemProps {
    setActiveTab: (item: string) => void,
    item: tabsMediaType,
}

export const TabsMediaItem: FC<TabsMediaItemProps> = ({item, setActiveTab}) => {
    return (
        <li
            onClick={() => setActiveTab(item.id)}
            className={style.tabsMediaItem}
        >
            <span
                className={
                    clsx(style.tabsMediaItem__text,
                    item.active && style.tabsMediaItem__active)
            }>
                    {item.text}
            </span>

        </li>
    )
}
