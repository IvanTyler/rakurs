import {FC} from "react";
import style from "./HouseInfoListItem.module.scss"
import {plural} from "@/src/utils/Pluar";
import {formatPrice} from "@/src/utils/FormatPrice";
import {houseTotalType} from "@/src/api/types/typesGenplan";

interface IHouseInfoListProps {
    item: houseTotalType;
}

export const HouseInfoListItem: FC<IHouseInfoListProps> = ({item}) => {
    return (
        <div className={style.houseInfoListItem}>
            <span className={style.houseInfoListItem__rooms}>
                {item.rooms}-комнатная
            </span>
            <span className={style.houseInfoListItem__countApartments}>
               {item.count} {plural(item.count, ['квартира', 'квартиры', 'квартир'])}
            </span>
            <span className={style.houseInfoListItem__price}>
                {formatPrice(Number(item.min_cost))}
            </span>
        </div>
    )
}
