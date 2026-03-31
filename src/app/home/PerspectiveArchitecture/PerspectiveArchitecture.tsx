import {FC} from "react";
import style from './PerspectiveArchitecture.module.scss'
import {ContainerSection} from "@/src/Components/UI/Container/ContainerSection";
import {SectionTitle} from "@/src/Components/UI/SectionTitle/SectionTitle";
import Image from "next/image";


import img from "../../../../public/images/perspective-architecture/background.webp";
import img768 from "../../../../public/images/perspective-architecture/background-768.webp";
import img360 from "../../../../public/images/perspective-architecture/background-360.webp";


export const PerspectiveArchitecture: FC = () => {
    return (
        <section className={style.perspectiveArchitecture}>
            <picture className={style.perspectiveArchitecture__picture}>
                <source className={style.perspectiveArchitecture__img} media="(max-width:580px)"
                        srcSet={img360.src}/>
                <source className={style.perspectiveArchitecture__img} media="(max-width:800px)"
                        srcSet={img768.src}/>

                <Image className={style.perspectiveArchitecture__img} src={img} alt={'knowledge-hub'}/>
            </picture>
            <ContainerSection className={style.containerPerspectiveArchitecture}>
                <SectionTitle
                    isDots={true}
                    isUnderlinedTitle={true}
                    classNameTitle={style.perspectiveArchitecture__title}
                    classNameUnderlined={style.perspectiveArchitecture__underlined}
                    textUnderlined={`Ракурсная архитектура`}
                > пространственная метафора знаний, воплощённая в формах.
                </SectionTitle>

                <ul className={style.perspectiveArchitectureList}>
                    <li className={style.perspectiveArchitectureList__item}>
                        Харизматичные силуэты
                    </li>
                    <li className={style.perspectiveArchitectureList__item}>
                        Продуманная геометрия линий
                    </li>
                    <li className={style.perspectiveArchitectureList__item}>
                        Архитектурная подсветка «Звёздное небо»
                    </li>
                    <li className={style.perspectiveArchitectureList__item}>
                        Натуральные материалы фасадов
                    </li>
                    <li className={style.perspectiveArchitectureList__item}>
                        Уютные и минималистичные цвета
                    </li>
                    <li className={style.perspectiveArchitectureList__item}>
                        Авторы – бюро СПИЧ
                    </li>
                </ul>

            </ContainerSection>
        </section>
    )
}
