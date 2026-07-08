'use client'

import {FC} from "react";
import style from './ConstructionDetailsManagementView.module.scss';
import {AlbumType} from "@/src/api/types/typesConstructionDetails";
import {ListPost} from "@/src/Components/List/ListPost/ListPost";
import {PostItem} from "@/src/Components/List/PostItem/PostItem";

interface ConstructionDetailsManagementViewProps {
    albums: AlbumType[];
}

export const ConstructionDetailsManagementView: FC<ConstructionDetailsManagementViewProps> = ({albums}) => {

    return (
        <div className={style.constructionDetailsManagementView}>
            <ListPost
                items={albums}
                getKey={(item) => item.id}
                renderItem={(item) => (
                    <PostItem
                        key={item.id}
                        image={item.file}
                        title={item.title}
                        link={`/media/construction/${item.id}`}
                    />
                )}
            />
        </div>
    );
}
