import {FC} from "react";
import style from './ContentTabs.module.scss'
import {ContentTabsType} from "@/src/app/types/rakursConceptTabs";
import {ContentTabsItem} from "@/src/Components/UI/ContentTabs/ContentTabsItem/ContentTabsItem";
import {ListItems} from "../../List/ListItems";
import {clsx} from "clsx";


interface IContentTabs {
    tabs: ContentTabsType[];
    className: string;
    getTabId: (item: any) => void;
    isShowDesc?: boolean
}

export const ContentTabs: FC<IContentTabs> = (
    {
        tabs,
        className,
        getTabId,
        isShowDesc
    }
) => {

    const getIdTab = (id: string) => getTabId(id);

    return (
        <ul className={clsx(style.contentTabs, className)}>
            <ListItems
                items={tabs}
                renderItem={(item: ContentTabsType) =>
                    <ContentTabsItem
                        item={item}
                        desc={item.desc}
                        price={item.price}
                        sizeRange={item.sizeRange}
                        isShowDesc={isShowDesc}
                        getIdTab={getIdTab}
                        key={item.id}
                    />}
            />
        </ul>
    )
}
