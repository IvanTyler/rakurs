'use client'

import {FC, useMemo} from "react";
import {ListItems} from "@/src/Components/List/ListItems";
import style from './BreadCrumbs.module.scss';
import {breadCrumbsType} from "@/src/Components/UI/BreadCrumbs/type";
import {BreadCrumbsItem} from "@/src/Components/UI/BreadCrumbs/BreadCrumbsListItem/BreadCrumbsItem";
import {usePathname} from "next/navigation";

interface BreadCrumbsProps {
    dataBreadCrumbs: breadCrumbsType[]
}

export const BreadCrumbs: FC<BreadCrumbsProps> = ({dataBreadCrumbs}) => {

    const pathname = usePathname();

    const breadCrumbsData = useMemo(() => {
        return dataBreadCrumbs.map(item => ({
            ...item,
            active: item.path === pathname,
        }));
    }, [pathname]);


    return (
        <nav className={style.breadCrumbsNav}>
            <ul className={style.breadCrumbs}>
                <ListItems
                    items={breadCrumbsData}
                    renderItem={(item: breadCrumbsType) => <BreadCrumbsItem key={item.id} item={item} />}
                />
            </ul>
        </nav>
    )
}
