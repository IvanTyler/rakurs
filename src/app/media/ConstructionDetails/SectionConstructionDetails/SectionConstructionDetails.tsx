'use client'

import {FC} from "react";
import style from './SectionConstructionDetails.module.scss'
import {ContainerSection} from "@/src/Components/UI/Container/ContainerSection";
import {ConstructionDetailsType} from "@/src/api/types/typesConstructionDetails";
import {ConstructionDetailsManagementView} from "@/src/app/media/ConstructionDetails/ConstructionDetailsManagementView/ConstructionDetailsManagementView";

interface SectionConstructionDetailsProps {
    constructionDetails: ConstructionDetailsType;
}

export const SectionConstructionDetails: FC<SectionConstructionDetailsProps> = ({constructionDetails}) => {

    const albums = constructionDetails.blocks.content.contents.albums.albums;

    return (
        <section className={style.sectionConstructionDetails}>
            <ContainerSection className={style.containerConstructionDetails}>
                <ConstructionDetailsManagementView albums={albums} />
            </ContainerSection>
        </section>
    )
}
