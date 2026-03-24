'use client'

import {FC, useMemo, useState} from "react";
import style from './Genplan.module.scss'
import Image from "next/image";
import imgGenplan from '@/public/images/genplan/genplan.webp';
import imgGenplan768 from '@/public/images/genplan/genplan768.webp';

import {clsx} from "clsx";
import {ContainerSection} from "@/src/Components/UI/Container/ContainerSection";
import {SectionTitle} from "@/src/Components/UI/SectionTitle/SectionTitle";
import {LinkToPage} from "@/src/Components/UI/LinkToPage/LinkToPage";
import {Button} from "@/src/Components/UI/SubmitButton/Button";
import {useQuery} from "@tanstack/react-query";
import {fetchGenplan, fetchHouseFloors, fetchHouseTotals} from "@/src/Api/Genplan";
import {queryClient} from "@/src/Api/queryClient";
import {ListItems} from "@/src/Components/List/ListItems";
import {MobileScrollHint} from "@/src/Components/UI/MobileScrollHint/MobileScrollHint";
import {useWindowWidth} from "@/src/Hooks/WidthWindowSize";

import {houseTotalType, pointsType} from "@/src/Api/types/typesGenplan";
import {GenplanOverlay} from "@/src/Components/features/Genplan/GenplanOverlay/GenplanOverlay";
import {InfoCardBuild} from "@/src/Components/features/Genplan/InfoCardBuild/InfoCardBuild";
import {RoomFilter} from "@/src/Components/features/Genplan/RoomFilter/RoomFilter";
import {CorpsSummary} from "@/src/Components/features/Genplan/CorpsSummary/CorpsSummary";
import {FloorPlan} from "@/src/Components/features/Genplan/FloorPlan/FloorPlan";
import {dataSvg} from "@/src/Components/features/Genplan/dataSvg";


export const Genplan: FC = () => {

    const [hoveredCode, setHoveredCode] = useState<string | null>(null);
    const [selectedCorps, setSelectedCorps] = useState<string | null | any>(null);
    const [mode, setMode] = useState<'corps' | 'floors'>('corps');

    const [selectedRooms, setSelectedRooms] = useState<any[]>([]);

    const [isScrollbar, setIsScrollbar] = useState(false);


    const {widthWindow} = useWindowWidth(980)
    const isShowFilterRooms: boolean = widthWindow >= 980;


    const handleCorpsClick = (code: string) => {
        setSelectedCorps(code);
        setMode('floors');
        setHoveredCode(null);
    };

    const handleBackToCorps = () => {
        setMode('corps');
        setSelectedCorps(null);
    };


    const GenplanData = useQuery({
        queryFn: fetchGenplan,
        queryKey: ['genplan'],
    }, queryClient);

    const generalGenplan: pointsType[] = useMemo(() => {
        if (!GenplanData.data) return [];

        const parseData = GenplanData.data.blocks.general.contents.general.value;
        const corpsNumbers: pointsType[] = Object.values(parseData.points)
            .filter((el: pointsType) => el.title.toLowerCase() !== 'школа');

        return corpsNumbers;
    }, [GenplanData.data]);



    const mutateDataSvg = dataSvg.map((el: any, i: number) => ({
        ...el,
        code: generalGenplan[i]?.code,
        numCorps: generalGenplan[i]?.title,
    }));

    const activeCardData: pointsType = generalGenplan.find((el: pointsType) => el.code === hoveredCode) || generalGenplan[0]

    const houseTotalsData = useQuery({
        queryFn: () => fetchHouseTotals(mode === 'corps' ? hoveredCode : selectedCorps),
        queryKey: ['houseTotals', mode === 'corps' ? hoveredCode : selectedCorps],
    }, queryClient);

    const minPriceApartment = () => {
        if (selectedCorps && houseTotalsData.status === 'success') {

            const prices = houseTotalsData?.data.totals.map((el: houseTotalType) => Number(el.min_cost));
            return Math.min(...prices);
        }
    }
    const minPrice = minPriceApartment();

    const floorData = useMemo(() => {
        if (!selectedCorps || !GenplanData.data) return null;
        return GenplanData.data.blocks.select_floor.contents[selectedCorps].value;
    }, [selectedCorps, GenplanData.data]);

    console.log('floorData', floorData)

    const houseFloorsData = useQuery({
        queryFn: () => fetchHouseFloors(selectedCorps),
        queryKey: ['houseFloors', selectedCorps],
    }, queryClient);


    const isFloorsData = () => {
        if (selectedCorps) {
            return floorData.points?.filter((point: pointsType) => Boolean(point)).length
        }
    }
    const countFloors = isFloorsData();


    const setScrollbar = (isScroll: boolean) => setIsScrollbar(isScroll);


    return (
        <section
            className={clsx(style.genplan, isScrollbar && style.genplan__scrollbar)}>
            {widthWindow <= 600 && <MobileScrollHint setIsScrollbar={setScrollbar}/>}

            <div className={clsx(style.genplan__wrapperFloorPlan)}>
                <picture className={style.genplan__picture}>
                    <source className={style.genplan__img} srcSet={imgGenplan768.src} media="(max-width:780px)"/>
                    <Image className={style.genplan__img} src={imgGenplan} alt={'genplan'}/>
                </picture>

                {houseFloorsData.status === 'success' &&
					<FloorPlan
						codeCorps={selectedCorps}
						houseFloorsData={houseFloorsData.data}
						floorData={floorData}
						rooms={selectedRooms}
						mode={mode}
					/>
                }
            </div>

            <GenplanOverlay
                widthWindowSize={widthWindow}
                dataSvg={mutateDataSvg}
                hoveredCode={mode === 'corps' ? hoveredCode : null}
                setHoveredCode={mode === 'corps' ? setHoveredCode : undefined}
                onCorpsClick={handleCorpsClick}
                selectedCorps={selectedCorps}
                mode={mode}
            />

            {mode === 'corps' && (
                <ListItems
                    items={generalGenplan}
                    renderItem={(item: pointsType) =>
                        <Button
                            top={item.top}
                            left={item.left}
                            key={item.code}
                            className={clsx(style.genplan__numberCorps, hoveredCode ? style.opacity : '')}
                            label={`K${item.title}`}
                        />
                    }
                />
            )}

            {mode === 'corps' && hoveredCode && <InfoCardBuild
				data={houseTotalsData.data}
				code={hoveredCode}
				key={activeCardData.code}
				className={style.infoCardBuild}
				mode={'corps'}
				textButton={'Нажмите на здание, чтобы выбрать этаж'}
			/>}

            {mode === 'floors' && isShowFilterRooms &&
				<RoomFilter
					selectedRooms={selectedRooms}
					setSelectedRooms={setSelectedRooms}
				/>
            }


            <ContainerSection className={
                clsx(
                    style.containerGenplan, hoveredCode ? style.opacity : '',
                    mode === 'floors' && style.overlay
                )}>
                {mode === 'corps' &&
					<SectionTitle
						classNameUnderlined={style.genplan__underlined}
						classNameTitle={style.genplan__title}
						isUnderlinedTitle={true}
						textUnderlined={'Генплан'}
					> позволяет определиться <br/>
						с корпусом, этажом и видом из окна <br/>
						до выбора планировки.
					</SectionTitle>
                }

                {mode === 'corps' &&
					<LinkToPage classname={style.genplan__link}>
						Выбрать <br/>
						по параметрам
					</LinkToPage>
                }

                {mode === 'floors' &&
					<button
						className={style.genplan__backToCorps}
						onClick={handleBackToCorps}
					>
						К выбору корпуса
					</button>}

                {mode === 'floors' &&
					<CorpsSummary
						data={houseTotalsData.status === 'success' && houseTotalsData.data}
						countFloors={countFloors}
						minPrice={minPrice}
					/>}


            </ContainerSection>
        </section>
    );
}
