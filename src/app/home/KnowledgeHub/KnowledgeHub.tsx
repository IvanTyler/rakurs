import {FC} from "react";
import style from './KnowledgeHub.module.scss'
import {ContainerSection} from "@/src/Components/UI/Container/ContainerSection";
import {SectionTitle} from "@/src/Components/UI/SectionTitle/SectionTitle";
import Image from "next/image";

import imgKnowledgeHub from '@/public/images/knowledge-hub/image.webp';
import imgKnowledgeHub768 from '@/public/images/knowledge-hub/image768.webp';
import {LinkToPage} from "@/src/Components/UI/LinkToPage/LinkToPage";
import {KnowledgeHubList} from "@/src/app/home/KnowledgeHubList/KnowledgeHubList";


export const KnowledgeHub: FC = () => {
    return (
        <section className={style.knowledgeHubSection}>

            <picture className={style.knowledgeHubSection__picture}>
                <source className={style.knowledgeHubSection__img} media="(max-width:770px)"
                        srcSet={imgKnowledgeHub768.src}/>
                <Image className={style.knowledgeHubSection__img} src={imgKnowledgeHub} alt={'knowledge-hub'}/>
            </picture>
            <ContainerSection className={style.containerKnowledgeHubSection}>

                <SectionTitle
                    isDots={false}
                    classNameTitle={style.knowledgeHubSection__title}
                    classNameUnderlined={style.knowledgeHubSection__underlined}
                    textUnderlined={'Knowledge hub'}
                    isUnderlinedTitle={true}
                > станет смысловым <br/>
                    продолжением образовательной концепции.<br/>
                    Его сердце и основа — библиотека, созданная <br/>«Подписными изданиями»
                </SectionTitle>

                <div className={style.knowledgeHubSection__rightBlock}>
                    <div className={style.knowledgeHubSection__desc}>
                        Это камерное место, доступное только для резидентов Rakurs.
                        Знание становится не метафорой, а частью среды. Здесь встречаются
                        книги и разговор, одиночное сосредоточение и совместное исследование.
                    </div>
                    <div className={style.knowledgeHubSection__desc}>
                        Рядом появится кафе с книжным и лекторием: здесь можно будет за
                        чашкой кофе полистать понравившуюся книгу перед покупкой,
                        а затем остаться — чтобы обсудить идею или узнать новое на лекции.
                    </div>

                    <LinkToPage classname={style.knowledgeHubSection__LinkToPage}>
                        Подробнее <br/> о Knowledge hub
                    </LinkToPage>
                </div>
            </ContainerSection>

            <KnowledgeHubList/>

        </section>
    )
}
