'use client'

import {FC, useRef} from "react";

import style from './Infrastructure.module.scss'
import {SectionTitle} from "@/src/Components/UI/SectionTitle/SectionTitle";
import {ContainerSection} from "@/src/Components/UI/Container/ContainerSection";
import {useWindowWidth} from "@/src/hooks/WidthWindowSize";
import {DesktopSlider} from "@/src/app/home/Infrastructure/DesktopSlider/DesktopSlider";
import {MobileSlider} from "@/src/app/home/Infrastructure/MobileSlider/MobileSlider";


export const Infrastructure: FC = () => {

    const elementRefSection = useRef<HTMLDivElement>(null);
    const {isMobileContent} = useWindowWidth(1200);


    return (
        <div ref={elementRefSection} className={style.infrastructure}>
            <ContainerSection className={style.containerInfrastructure}>
                <SectionTitle
                    classNameUnderlined={style.infrastructure__underlined}
                    classNameTitle={style.infrastructure__title}
                    textUnderlined={'Инфраструктура'}
                    isUnderlinedTitle={true}
                > запроектирована так, <br/>
                    чтобы каждый квадрат компактной придомовой <br/>
                    территории был эффективен.
                </SectionTitle>

                {isMobileContent ?
                    <MobileSlider/> :
                    <DesktopSlider elementRefSection={elementRefSection}/>
                }

            </ContainerSection>
        </div>
    )
}
