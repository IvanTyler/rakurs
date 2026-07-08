'use client'

import {FC} from "react";
import {Preloader} from "@/src/Components/UI/Preloader/Preloader";
import {useQuery} from "@tanstack/react-query";
import {fetchConstructionDetails} from "@/src/api/ConstructionDetails";
import {queryClient} from "@/src/api/queryClient";
import {SectionConstructionDetails} from "@/src/app/media/ConstructionDetails/SectionConstructionDetails/SectionConstructionDetails";

export const ConstructionDetailsView: FC = () => {

    const constructionDetails = useQuery({
        queryFn: fetchConstructionDetails,
        queryKey: ['constructionDetails']
    }, queryClient)

    switch (constructionDetails.status) {
        case 'pending':
            return <Preloader />
        case 'success':
            return <SectionConstructionDetails constructionDetails={constructionDetails.data} />
        case 'error':
            return <p>Не удалось загрузить данные</p>
    }
}
