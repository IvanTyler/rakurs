import {clsx} from "clsx";
import style from "./ContentMediaImages.module.scss";
import {FC} from "react";
import {ContentTabsImg} from "@/src/app/types/rakursConceptTabs";
import {ListItems} from "@/src/Components/List/ListItems";
import {ContentImagesItem} from "@/src/app/home/RakursConceptImagesItem/ContentImagesItem";


interface IRakursConceptImagesProps {
    className?: string;
    images: ContentTabsImg[];
    prevContent?: ContentTabsImg[] | null | undefined;
    activeTabId: string;
    shouldAnimate?: boolean;
}

export const ContentMediaImages: FC<IRakursConceptImagesProps> = (
    {
        images,
        className,
        activeTabId,
        prevContent,
        shouldAnimate,
    }
) => {

    return (
        <div className={clsx(style.rakursConceptImages, className)}>
            <ListItems
                key={activeTabId}
                items={!prevContent ? images : prevContent}
                renderItem={(item: ContentTabsImg) =>
                    <ContentImagesItem item={item} shouldAnimate={shouldAnimate} key={item.id} /> }
            />
        </div>
    )
}
