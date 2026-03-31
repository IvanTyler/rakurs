'use client'

import {FC} from "react";
import {Preloader} from "@/src/Components/UI/Preloader/Preloader";
import {SectionNews} from "@/src/app/media/News/SectionNews/SectionNews";
import {useQuery} from "@tanstack/react-query";
import {fetchRubrics} from "@/src/Api/Rubrics";
import {queryClient} from "@/src/Api/queryClient";


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
