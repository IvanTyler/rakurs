'use client'

import {FC} from "react";
import {useParams} from "next/navigation";
import {useQuery} from "@tanstack/react-query";
import {fetchConstructionDetails} from "@/src/api/ConstructionDetails";
import {queryClient} from "@/src/api/queryClient";
import {Preloader} from "@/src/Components/UI/Preloader/Preloader";
import {breadCrumbsType} from "@/src/Components/UI/BreadCrumbs/type";
import {PostDetail} from "@/src/Components/List/PostDetail/PostDetail";
import {OtherPosts} from "@/src/Components/List/OtherPosts/OtherPosts";
import {PostItem} from "@/src/Components/List/PostItem/PostItem";
import {tabTypesUrlParamEnum} from "@/src/app/media/types/enums";

const ConstructionDetailPage: FC = () => {

    const params = useParams();
    const albumId = Number(params.id);

    const constructionDetails = useQuery({
        queryFn: fetchConstructionDetails,
        queryKey: ['constructionDetails']
    }, queryClient);

    if (constructionDetails.status === 'pending') return <Preloader />
    if (constructionDetails.status === 'error') return <p>Не удалось загрузить данные</p>

    const albums = constructionDetails.data.blocks.content.contents.albums.albums;
    const album = albums.find(item => item.id === albumId);
    
    if (!album) return <p>Пост не найден</p>

    const otherAlbums = albums.filter(item => item.id !== albumId);

    const breadCrumbsList: breadCrumbsType[] = [
        {
            id: 'bc-construction',
            text: 'Динамика строительства',
            path: `/media/?tab=${tabTypesUrlParamEnum.construction}`,
            active: false,
        },
        {
            id: 'bc-album',
            text: album.title,
            path: `/media/construction/${album.id}`,
            active: false,
        },
    ];

    const images = album.items.length > 1
        ? album.items.map(item => ({src: item.file, alt: album.title}))
        : [{src: album.file, alt: album.title}];

    return (
        <PostDetail
            breadCrumbsList={breadCrumbsList}
            title={album.title}
            images={images}
            desc={album.desc.split('\n').map((line, index) => <p key={index}>{line}</p>)}
            otherPosts={
                <OtherPosts
                    title="Другие месяца"
                    items={otherAlbums}
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
            }
        />
    )
}

export default ConstructionDetailPage;
