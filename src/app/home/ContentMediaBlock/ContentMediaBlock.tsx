'use client';

import {FC, useEffect, useState} from "react";
import {ContainerSection} from "@/src/Components/UI/Container/ContainerSection";
import style from './ContentMediaBlock.module.scss'
import {ContentTabs} from "@/src/Components/UI/ContentTabs/ContentTabs";
import {ContentTabsType} from "@/src/app/types/rakursConceptTabs";
import {clsx} from "clsx";
import {ContentMediaImages} from "@/src/app/home/ContentMediaImages/ContentMediaImages";

import {LinkToPage} from "@/src/Components/UI/LinkToPage/LinkToPage";
import {DescSection} from "@/src/app/home/ContentMediaBlock/DescSection/DescSection";
import {useWindowWidth} from "@/src/Hooks/WidthWindowSize";

interface IContentMediaBlockProps {
    isLink?: boolean;
    classContentTabs?: string;
    children?: React.ReactNode,
    data: ContentTabsType[];
    classNameSection?: string;
    classNameContentMediaImages?: string;
    classNameContainer?: string;
    classNameDescSection?: string;
    styleContext?: any;
}

export const ContentMediaBlock: FC<IContentMediaBlockProps> = (
    {
        data,
        classNameSection,
        classNameContainer,
        styleContext,
        isLink,
        classContentTabs,
        classNameContentMediaImages,
        classNameDescSection,
        children,
    }
) => {

    const [dataTabs, setDataTabs] = useState<ContentTabsType[]>(data);

    const getIdActiveTab = (id: string) => {
        setIsAnimate(true);

        setDataTabs(prev => prev.map((item: any) => {
            return {
                ...item,
                active: item.id === id,
            }
        }));
    }

    const activeTab = dataTabs.find(tab => tab.active) || dataTabs[0];

    const [isPrevContentTab, setIsPrevContentTab] = useState<ContentTabsType | null>(dataTabs[0]);
    const [isAnimate, setIsAnimate] = useState(false);

    useEffect(() => {
        if (isAnimate) {
            const timer = setTimeout(() => {
                setIsPrevContentTab(activeTab)
                setIsAnimate(false);

            }, 1500);

            return () => clearTimeout(timer)
        }

    }, [activeTab])

    const {widthWindow} = useWindowWidth(580)
    const isShowDesc = widthWindow <= 580;

    return (
        <section
            className={clsx(style.contentMediaBlock, classNameSection, activeTab.name && styleContext[activeTab.name])}>
            <ContainerSection className={clsx(style.contentMediaBlockContainer, classNameContainer)}>

                {children}

                {widthWindow >= 580 &&
					<ContentMediaImages
						images={activeTab.images}
						prevContent={isPrevContentTab?.images ?? activeTab.images}
						activeTabId={activeTab.id}
						shouldAnimate={isAnimate}
						className={clsx(
                            activeTab.name && style[activeTab.name],
                            classNameContentMediaImages
                        )}/>
                }

                <ContentTabs
                    tabs={dataTabs}
                    getTabId={getIdActiveTab}
                    className={clsx(style.widthContentTabs, classContentTabs)}
                    isShowDesc={isShowDesc}
                />

                {widthWindow >= 580 &&
					<DescSection
						className={classNameDescSection}
						desc={activeTab.desc}
						shouldAnimate={isAnimate}
						prevDesc={isPrevContentTab?.desc ?? activeTab.desc}

					/>}

                {isLink && <LinkToPage classname={style.contentMediaBlock__link}>
					Выбрать квартиру
				</LinkToPage>}

            </ContainerSection>
        </section>
    )
}
