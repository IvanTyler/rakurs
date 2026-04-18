import {FC} from "react";
import {fetchRubrics} from "@/src/api/Rubrics";
import {queryClient} from "@/src/api/queryClient";
import {useQuery} from "@tanstack/react-query";
import {Preloader} from "@/src/Components/UI/Preloader/Preloader";
import {OtherNews} from "@/src/app/media/News/OtherNewsManagementView/OtherNews/OtherNews";


export const OtherNewsManagementView: FC = () => {
    const rubrics = useQuery({
        queryFn: fetchRubrics,
        queryKey: ['rubrics']
    }, queryClient)


    console.log('rubrics.data', rubrics.data)

    switch (rubrics.status) {
        case 'pending':
            return <Preloader />
        case 'success':
            return <OtherNews rubrics={rubrics.data} />
        case 'error':
            <p>Рубрик нет</p>
    }

}
