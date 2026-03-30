import {FC} from "react";
import {breadCrumbsType} from "@/src/Components/UI/BreadCrumbs/type";
import Link from "next/link";
import style from './BreadCrumbsItem.module.scss'
import {clsx} from "clsx";

interface BreadCrumbsItemProps {
    item: breadCrumbsType
}

export const BreadCrumbsItem: FC<BreadCrumbsItemProps> = ({item}) => {
    return (
        <li className={style.breadCrumbsItem}>
            <Link className={clsx(
                style.breadCrumbsItem__link, item.active && style.breadCrumbsItem__active)}
                  href={item.path}>{item.text}</Link>
        </li>
    )
}
