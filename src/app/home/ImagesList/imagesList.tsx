import {FC} from "react";
import style from "./imagesList.module.scss";
import {ListItems} from "@/src/Components/List/ListItems";
import {imagesType} from "@/src/app/types/improvement";
import {ImagesListItem} from "@/src/app/home/ImagesListItem/ImagesListItem";
import {clsx} from "clsx";

interface InterfaceImagesListProps {
    classNameImages?: string;
    classNameDesc?: string;
    classNameDate?: string;
    item: imagesType[];
}

export const ImagesList: FC<InterfaceImagesListProps> = (
    {
        item,
        classNameImages,
        classNameDate,
        classNameDesc,
    }
) => {
    return (
        <ul className={clsx(style.imagesList, classNameImages)}>
            <ListItems
                items={item}
                renderItem={(item: imagesType) => <ImagesListItem key={item.id} item={item} classNameDesc={classNameDesc} classNameDate={classNameDate}/>}
            />
        </ul>

    )
}
