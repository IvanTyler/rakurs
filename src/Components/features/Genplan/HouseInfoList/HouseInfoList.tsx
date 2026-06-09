import {FC} from "react";
import style from "./HouseInfoList.module.scss";
import {ListItems} from "@/src/Components/List/ListItems";
import {clsx} from "clsx";
import {HouseInfoListItem} from "@/src/Components/features/Genplan/HouseInfoListItem/HouseInfoListItem";
import {houseTotalType} from "@/src/api/types/typesGenplan";

interface IHouseInfoListProps {
    item: houseTotalType[]
}

export const HouseInfoList: FC<IHouseInfoListProps> = ({item}) => {

    const countApartment = item.length;

    return (
        <div className={clsx(style.houseInfoList, countApartment === 1 ? style.row : style.column)}>
            <ListItems
                items={item}
                renderItem={(item: houseTotalType) =>
                    <HouseInfoListItem key={item.min_cost} item={item} />
                }
            />
        </div>
    )
}
