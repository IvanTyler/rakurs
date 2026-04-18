import {FC} from "react";
import {rubricsResponseType} from "@/src/api/types/typesRubrics";
import {NewsList} from "@/src/app/media/News/NewsList/NewsList";
import {useQuery} from "@tanstack/react-query";
import {fetchNews} from "@/src/api/Rubrics";
import {queryClient} from "@/src/api/queryClient";
import {ContainerSection} from "@/src/Components/UI/Container/ContainerSection";
import style from './OtherNews.module.scss'
import {Preloader} from "@/src/Components/UI/Preloader/Preloader";

interface IOtherNewsListProps {
    rubrics: rubricsResponseType;
}

export const OtherNews: FC<IOtherNewsListProps> = ({rubrics}) => {

    const getIdNews = rubrics.rubrics?.find(news => news.code === "news");
    const LIMIT = 16;

    console.log('getIdNews', getIdNews)

    const newsData = useQuery({
        queryKey: ['news', getIdNews],
        queryFn: () => {
            if (!getIdNews) throw new Error('No rubric id');
            return fetchNews({
                id_rubric: [getIdNews.id],
                limit: LIMIT,
                page: 1
            });
        },
        enabled: !!getIdNews
    }, queryClient);


    if (newsData.status === 'pending') return <Preloader />

    if (newsData.status === 'success') return (
        <section className={style.otherNews}>
            <ContainerSection className={style.otherNewsContainer}>
                <h3 className={style.otherNews__title}>Другие новости</h3>
                <NewsList news={newsData.data.articles} isSlider={true}/>
            </ContainerSection>
        </section>
    )
}
