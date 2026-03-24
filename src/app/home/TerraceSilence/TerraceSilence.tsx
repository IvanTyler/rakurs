'use client'

import {FC, useEffect, useState} from "react";
import style from './TerraceSilence.module.scss'
import {ContainerSection} from "@/src/Components/UI/Container/ContainerSection";
import {SectionTitle} from "@/src/Components/UI/SectionTitle/SectionTitle";

import imgterraceSilence from '@/public/images/terrace-silence/background.webp';
import Image from "next/image";
import {dataTerraceSilence} from "@/src/app/home/TerraceSilence/data";
import {accordionType} from "@/src/app/types/terraceSilence";
import {TerraceSilenceDesc} from "@/src/app/home/TerraceSilenceDesc/TerraceSilenceDesc";
import {MobileScrollHint} from "@/src/Components/UI/MobileScrollHint/MobileScrollHint";
import {clsx} from "clsx";
import {TooltipItem} from "@/src/Components/UI/AccordionItem.module/TooltipItem";

export const TerraceSilence: FC = () => {

    const [placeTerraceSilence, setPlaceTerraceSilence] = useState<accordionType[]>(dataTerraceSilence);

    const getIdActiveTab = (id: string) => {
        setPlaceTerraceSilence(prev => prev.map((item: any) => {
            return {
                ...item,
                active: item.id === id,
            }
        }));
    }

    const activePlace = placeTerraceSilence.find((place: accordionType) => place.active) || placeTerraceSilence[0];

    const [widthWindowSize, setWidthWindowSize] = useState<number>(0);

    const [isScrollbar, setIsScrollbar] = useState(false);
    const setScrollbar = (isScroll: boolean) => setIsScrollbar(isScroll);

    useEffect(() => {
        // Проверяем, что мы на клиенте
        if (typeof window === 'undefined') return;

        setWidthWindowSize(window.innerWidth);

        const windowWidthSize = () => {
            const widthWindow = window.innerWidth;
            setWidthWindowSize(widthWindow)

            if (widthWindow > 550) setIsScrollbar(false);
        }

        windowWidthSize()

        window.addEventListener('resize', windowWidthSize)
        return () => {
            window.removeEventListener('resize', windowWidthSize)
        }
    }, [])

    const isShowDesc = widthWindowSize <= 750;

    return (
        <section className={style.terraceSilence}>
            <ContainerSection className={style.containerTerraceSilence}>

                <div className={style.terraceSilence__topWrapper}>
                    <SectionTitle
                        isUnderlinedTitle={true}
                        classNameUnderlined={style.terraceSilence__underlined}
                        classNameTitle={style.terraceSilence__title}
                        textUnderlined={'Терасса тишины'}
                    > на крыше рядом <br />
                        со вторым корпусом будет доступна только <br />
                        для жителей.
                    </SectionTitle>

                    <h3 className={style.terraceSilence__subTitle}>
                        Это камерное пространство делится на две зоны — для общения и уединения. <br />
                        Здесь можно поработать в коворкинге, сделать паузу в капсуле тишины, <br />
                        сыграть в шахматы или заняться йогой под навесом.
                    </h3>
                </div>


                <div className={style.terraceSilence__descriptionBlock}>
                    <div className={style.terraceSilence__wrapperContent}>
                        <div className={clsx(style.terraceSilence__wrapperImg, isScrollbar && widthWindowSize <= 550 && style.scrollbarThin)}>
                            {
                                placeTerraceSilence.map((item: accordionType) => (
                                    <TooltipItem
                                        claasName={style.accordionItem}
                                        item={item}
                                        key={item.id}
                                        getId={getIdActiveTab}
                                        isContent={isShowDesc}
                                    />
                                ))
                            }
                            <Image className={style.terraceSilence__img} src={imgterraceSilence} alt={'Терасса тишины'}/>
                            {widthWindowSize <= 550 && <MobileScrollHint setIsScrollbar={setScrollbar} />}
                        </div>

                    </div>
                    <p className={style.terraceSilence__desc}>
                        Растения, высаженные плотным рядом вдоль окон и края кровли,
                        помогают создать ощущение тишины и приватности,
                        при этом не закрывая свет и не создавая тени: сосны,
                        ирга, черемуха, яблони, душистые травы и тенелюбивые цветы.
                    </p>
                </div>

                {widthWindowSize >= 750 ?
                    <TerraceSilenceDesc
                        key={activePlace.id}
                        img={activePlace.img}
                        title={activePlace.title}
                        desc={activePlace.desc}
                    /> : null
                }


                <div className={style.terraceSilence__bottomWrapper}>
                    <div className={style.terraceSilence__rectangle}>
                        <span className={style.terraceSilence__rectangleText}>
                            Всё здесь — для тонкой настройки внимания:
                            на дыхание, на окружающее, на собственные мысли
                        </span>
                    </div>
                </div>

            </ContainerSection>
        </section>
    )
}