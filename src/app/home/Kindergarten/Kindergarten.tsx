import {FC} from "react";
import style from './Kindergarten.module.scss'
import {KindergartenImg} from "@/src/app/home/KindergartenImg/KindergartenImg";
import {ContentMediaBlock} from "@/src/app/home/ContentMediaBlock/ContentMediaBlock";
import {SectionTitle} from "@/src/Components/UI/SectionTitle/SectionTitle";
import {kindergartenData} from "@/src/app/home/Kindergarten/data";
import {FirstFloors} from "@/src/app/home/FirstFloors/FirstFloors";


export const Kindergarten: FC = () => {
    return (
        <section className={style.kindergarten}>
            <KindergartenImg />

            <ContentMediaBlock
                isLink={false}
                classNameContainer={style.containerKindergarten}
                classContentTabs={style.kindergarten__contentTabs}
                classNameContentMediaImages={style.kindergarten__images}
                classNameDescSection={style.kindergarten__descSection}
                data={kindergartenData}
                styleContext={style}
            >
                <SectionTitle
                    classNameUnderlined={style.kindergarten__underlined}
                    classNameTitle={style.kindergarten__title}
                    textUnderlined={'Детский сад'}
                    isUnderlinedTitle={true}
                > на 75 мест и начальная школа <br />
                    на 200 мест — с высоким педагогическим стандартом <br />
                    и современной архитектурой.
                </SectionTitle>
                <p className={style.kindergarten__desc}>
                    Эстетичные, продуманные пространства созданы для раскрытия
                    потенциала ребёнка: здесь интересно расти, узнавать новое
                    и формировать первые связи с миром.
                </p>
                <h3 className={style.kindergarten__titleTabs}>
                    Стандарт московской <br />
                    школы 2.0
                </h3>

            </ContentMediaBlock>
            <FirstFloors />
        </section>
    )
}
