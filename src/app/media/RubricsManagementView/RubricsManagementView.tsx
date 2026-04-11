'use client'

import {FC} from "react";
import {Preloader} from "@/src/Components/UI/Preloader/Preloader";
import {SectionNews} from "@/src/app/media/News/SectionNews/SectionNews";
import {useQuery} from "@tanstack/react-query";
import {fetchRubrics} from "@/src/api/Rubrics";
import {queryClient} from "@/src/api/queryClient";


export const RubricsManagementView: FC = () => {

    const rubrics = useQuery({
        queryFn: fetchRubrics,
        queryKey: ['rubrics']
    }, queryClient)

    switch (rubrics.status) {
        case 'pending':
            return <Preloader />
        case 'success':
            return <SectionNews rubrics={rubrics.data}/>
        case 'error':
            <p>Рубрик нет</p>
    }
}
