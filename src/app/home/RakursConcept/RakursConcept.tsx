'use client';

import {FC} from "react";
import style from './RakursConcept.module.scss'
import {ContentMediaBlock} from "@/src/app/home/ContentMediaBlock/ContentMediaBlock";
import {rakursConceptTabs} from "@/src/app/home/RakursConcept/dataTabs";
import {SectionTitle} from "@/src/Components/UI/SectionTitle/SectionTitle";
import {clsx} from "clsx";

export const RakursConcept: FC = () => {

    return (
        <section className={style.rakursConcept}>
            <ContentMediaBlock
                classNameSection={style.rakursConcept}
                classNameContainer={style.rakursConceptContainer}
                data={rakursConceptTabs}
                styleContext={style}
                isLink={true}
            >
                <SectionTitle
                    isDots={true}
                    isUnderlinedTitle={true}
                    classNameTitle={style.title}
                    classNameUnderlined={style.text_1}
                    textUnderlined={'Концепция'}
                > среда для жизни и познания
                </SectionTitle>

                <p className={clsx(style.desc, style.desc_1)}>
                    Rakurs — жилой проект высокого класса в районе с научной историей.
                    Это проект с фокусом на развитие и познание.
                </p>
                <p className={clsx(style.desc, style.desc_2)}>
                    Это место, в котором мы стремимся подтолкнуть к любознательности и вызвать
                    тягу к изучению мира. Здесь сама среда говорит: продолжайте учиться и расти.
                </p>
            </ContentMediaBlock>
        </section>
    )
}
