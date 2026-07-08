'use client'

import {FC} from "react";
import style from './MediaContent.module.scss';
import {ContainerSection} from "@/src/Components/UI/Container/ContainerSection";
import {useSearchParams} from "next/navigation";
import {tabTypesEnum, tabTypesUrlParamEnum} from "@/src/app/media/types/enums";
import {RubricsManagementView} from "@/src/app/media/RubricsManagementView/RubricsManagementView";
import {ConstructionDetailsView} from "@/src/app/media/ConstructionDetails/ConstructionDetailsView/ConstructionDetailsView";

export const MediaContent: FC = () => {

    const searchParams = useSearchParams()
    const getTabUrlParams = searchParams.get(tabTypesEnum.tab);

    return (
        <section className={style.mediaContent}>
            {tabTypesUrlParamEnum.news === getTabUrlParams
                && <RubricsManagementView />
            }
            {tabTypesUrlParamEnum.construction === getTabUrlParams
                && <ConstructionDetailsView />
            }
        </section>
    )
}
