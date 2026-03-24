'use client'

import {FC, useEffect, useState} from "react";
import {ContentTabsImg} from "@/src/app/types/rakursConceptTabs";
import style from "./RakursConceptImagesItem.module.scss";
import {clsx} from "clsx";

interface IContentImagesItemProps {
    item: ContentTabsImg;
    prevContent?: ContentTabsImg | null;
    shouldAnimate?: boolean;
}

export const ContentImagesItem: FC<IContentImagesItemProps> = ({item, shouldAnimate}) => {

    return (
        <figure className={clsx(
            style.rakursConceptImagesItem,
            shouldAnimate && style.hiding,
            !shouldAnimate && style.showing,
        )}>
            <img loading="lazy" className={style.rakursConceptImagesItem__img} src={item.path} alt={item.label}/>
            {item.label && <figcaption className={style.rakursConceptImagesItem__label}>{item.label}</figcaption>}
        </figure>
    )
}
