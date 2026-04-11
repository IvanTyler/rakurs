'use client'

import {FC, useMemo} from "react";
import {ListItems} from "@/src/Components/List/ListItems";
import style from './BreadCrumbs.module.scss';
import {breadCrumbsType} from "@/src/Components/UI/BreadCrumbs/type";
import {BreadCrumbsItem} from "@/src/Components/UI/BreadCrumbs/BreadCrumbsListItem/BreadCrumbsItem";
import {useParams, usePathname} from "next/navigation";
import {clsx} from "clsx";

interface BreadCrumbsProps {
    dataBreadCrumbs: breadCrumbsType[];
    classBreadCrumbs?: string | undefined;
}

export const BreadCrumbs: FC<BreadCrumbsProps> = (
    {
        dataBreadCrumbs,
        classBreadCrumbs,
    }
) => {

    const pathname = usePathname();
    const params = useParams();

    const cleanPathname = pathname.replace(/\/$/, '');
    const comparePath = params.translit
        ? decodeURIComponent(params.translit)
        : cleanPathname;

    const breadCrumbsData = useMemo(() => {
        return dataBreadCrumbs.map(item => ({
            ...item,
            active: item.path === comparePath,
        }));
    }, [dataBreadCrumbs, comparePath]);


    return (
        <nav className={clsx(style.breadCrumbsNav, classBreadCrumbs)}>
            <ul className={style.breadCrumbs}>
                <ListItems
                    items={breadCrumbsData}
                    renderItem={(item: breadCrumbsType) => <BreadCrumbsItem key={item.id} item={item} />}
                />
            </ul>
        </nav>
    )
}
