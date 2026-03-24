import {FC} from "react";
import style from './SetIntersectionPoint.module.scss'
import {ContainerSection} from "@/src/Components/UI/Container/ContainerSection";
import {SectionTitle} from "@/src/Components/UI/SectionTitle/SectionTitle";
import {FormFeedback} from "@/src/Components/UI/FormFeedback/FormFeedback";

export const SetIntersectionPoint: FC = () => {
    return (
        <section className={style.setIntersectionPoint}>
            <ContainerSection className={style.containerSetIntersectionPoint}>
                <SectionTitle
                    isUnderlinedTitle={false}
                    classNameTitle={style.setIntersectionPoint__title}
                >
                    Назначить точку <br />
                    пересечения
                </SectionTitle>

                <FormFeedback classNameForm={style.setIntersectionPoint__form} />
            </ContainerSection>
        </section>
    )
}