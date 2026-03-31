'use client'

import {FC, useEffect, useState} from "react";
import style from './Lobby.module.scss';
import {ContentMediaBlock} from "@/src/app/home/ContentMediaBlock/ContentMediaBlock";
import {lobbyDataTabs} from "@/src/app/home/Lobby/dataTabs";
import {SectionTitle} from "@/src/Components/UI/SectionTitle/SectionTitle";
import {Corps} from "@/src/app/home/Corps/Corps";
import {KnowledgeHub} from "@/src/app/home/KnowledgeHub/KnowledgeHub";
import {KnowledgeHubListMobile} from "@/src/app/home/KnowledgeHubListMobile/KnowledgeHubListMobile";
import {useWindowWidth} from "@/src/Hooks/WidthWindowSize";

export const Lobby: FC = () => {

    const {widthWindow} = useWindowWidth(520);


    return (
        <section className={style.lobby}>
            <ContentMediaBlock
                classNameSection={style.lobby}
                classNameContainer={style.lobbyContainer}
                classNameContentMediaImages={style.lobby__images}
                data={lobbyDataTabs}
                styleContext={style}
            >
                <div className={style.lobby__top}>
                    <SectionTitle
                        classNameTitle={style.lobby__title}
                        classNameUnderlined={style.lobby__underlined}
                        textUnderlined={'Лобби'}
                        isUnderlinedTitle={true}
                    > продолжает архитектурную тему проекта — строгая геометрия,
                        ясные линии и точные пропорции, в которые
                        вписаны тактильные, почти домашние детали.
                    </SectionTitle>

                    <p className={style.lobby__desc}>
                        Первое впечатление о доме рождается в лобби — это первая встреча
                        со сдержанным, исполненным достоинства характером проекта Rakurs.
                    </p>
                </div>
            </ContentMediaBlock>

            <Corps/>

            {widthWindow <= 570 ?
                <KnowledgeHubListMobile/> :
                <KnowledgeHub/>}

        </section>
    )
}
