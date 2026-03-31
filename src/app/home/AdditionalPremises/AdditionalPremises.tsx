import {FC} from "react";
import style from './AdditionalPremises.module.scss';
import {ContainerSection} from "@/src/Components/UI/Container/ContainerSection";
import {SectionTitle} from "@/src/Components/UI/SectionTitle/SectionTitle";
import {UnderlinedTitle} from "@/src/Components/UI/UnderlinedText/UnderlinedTitle";

import {StoreroomsCard} from "@/src/app/home/AdditionalPremises/StoreroomsCard/StoreroomsCard";
import {ParkingCard} from "@/src/app/home/AdditionalPremises/ParkingCard/ParkingCard";


export const AdditionalPremises: FC = () => {
    return (
        <section className={style.additionalPremises}>
            <ContainerSection className={style.containerAdditionalPremises}>
                <SectionTitle
                    classNameTitle={style.additionalPremises__title}
                >
                    <span className={style.additionalPremises__firstLetter}>Дополнительные</span>
                    <UnderlinedTitle
                        className={style.additionalPremises__underlinedText}
                        text={'помещения'}
                    /> <br />
                    для автомобилей и хранения сезонных вещей.
                </SectionTitle>

                <StoreroomsCard />
                <ParkingCard className={style.additionalPremises__parking} />

            </ContainerSection>
        </section>
    )
}
