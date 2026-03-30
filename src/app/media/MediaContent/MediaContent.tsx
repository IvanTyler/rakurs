'use client'

import {FC} from "react";
import style from './MediaContent.module.scss';
import {ContainerSection} from "@/src/Components/UI/Container/ContainerSection";
import {useSearchParams} from "next/navigation";
import {tabTypesEnum, tabTypesUrlParamEnum} from "@/src/app/media/types/enums";
import {RubricsManagementView} from "@/src/app/media/RubricsManagementView/RubricsManagementView";

export const MediaContent: FC = () => {

    const searchParams = useSearchParams()
    const getTabUrlParams = searchParams.get(tabTypesEnum.tab);

    return (
        <section className={style.mediaContent}>
            <ContainerSection className={style.containerMediaContentr}>
                {tabTypesUrlParamEnum.news === getTabUrlParams
                    && <RubricsManagementView />
                }
                {tabTypesUrlParamEnum.construction === getTabUrlParams
                    && <div>Динамика строительства</div>
                }
                {tabTypesUrlParamEnum.stock === getTabUrlParams
                    && <div>Акции</div>
                }
            </ContainerSection>
        </section>
    )
}
