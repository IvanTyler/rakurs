'use client'

import {FC, useEffect, useMemo, useRef, useState} from "react";
import style from "./FloorPlan.module.scss";
import {fetchHouseFloorsFilterRooms, fetchHouseFloorTotals} from "@/src/api/Genplan";
import {clsx} from "clsx";
import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation} from "swiper/modules";
import {useQuery} from "@tanstack/react-query";
import {queryClient} from "@/src/api/queryClient";
import {filterFloorsType, generalPlanType, HouseFloorsType, pointsType} from "@/src/api/types/typesGenplan";
import {useWindowWidth} from "@/src/hooks/WidthWindowSize";
import {InfoCardBuild} from "@/src/Components/features/Genplan/InfoCardBuild/InfoCardBuild";


interface IFloorPlanProps {
    codeCorps: string
    houseFloorsData: HouseFloorsType;
    floorData: filterFloorsType;
    rooms: any[];
    mode: 'corps' | 'floors';
}

export const FloorPlan: FC<IFloorPlanProps> = (
    {
        codeCorps,
        houseFloorsData,
        floorData,
        rooms,
        mode,
    }
) => {

    const [floorState, setFloorState] = useState<string | any>(null);
    const [cardPosition, setCardPosition] = useState<{ top: number; left: number } | null>(null);
    const [activeFloor, setActiveFloor] = useState<string | null>(null);

    const [swiperInstance, setSwiperInstance] = useState<any>(null);

    const svgRef = useRef<SVGSVGElement>(null);
    const polygonRefs = useRef<Map<string, SVGPolygonElement>>(new Map());

    const {widthWindow} = useWindowWidth(980)

    const isShowSlider: any = widthWindow <= 980;


    const positionInfoCardBuildFunc = () => {
        if (widthWindow <= 780) return -60;
        if (widthWindow <= 980) return -55;
        if (widthWindow <= 1080) return -50;

        return 20;
    }

    const positionInfoCardBuild: any = positionInfoCardBuildFunc();


    // Функция для показа карточки этажа
    const showFloorCard = (floorCode: string) => {
        // Получаем polygon элемент по коду этажа
        const polygonElement = polygonRefs.current.get(floorCode);

        if (polygonElement && svgRef.current) {
            const rect = polygonElement.getBoundingClientRect();
            const svgRect = svgRef.current.getBoundingClientRect();

            // Устанавливаем позицию карточки
            setCardPosition({
                left: rect.right - svgRect.left + positionInfoCardBuild,
                top: rect.top - svgRect.top - 20,
            });

            // Устанавливаем данные этажа
            setFloorState(floorCode);
            setActiveFloor(floorCode);
        }
    };


    // Функция для показа карточки этажа при наведении на полигон
    const handlePolygonHover = (
        event: React.MouseEvent<SVGPolygonElement>,
        code: string,
        index: number) => {
        if (swiperInstance) {
            swiperInstance.slideTo(index);
        }

        const rect = event.currentTarget.getBoundingClientRect();
        const svgRect = svgRef.current?.getBoundingClientRect();

        if (!svgRect) return;

        setCardPosition({
            left: rect.right - svgRect.left + positionInfoCardBuild,
            top: rect.top - svgRect.top - 20,
        });

        setFloorState(code);
        setActiveFloor(code);
    };


    const handlePolygonHide = () => {
        setActiveFloor(null);

        // А карточку скрываем
        setFloorState(null);
        setCardPosition(null);
    };

    // Обработчик клика по слайду
    const handleFloorClick = (floorCode: string, index: number) => {
        if (swiperInstance) {
            swiperInstance.slideTo(index);
        }
        showFloorCard(floorCode);
    };

    // Обработчик изменения слайда
    const handleSlideChange = (swiper: any) => {
        const activeSlide = swiper.slides[swiper.activeIndex];
        if (activeSlide) {
            const floorCode = activeSlide.textContent;
            if (floorCode) {
                showFloorCard(floorCode);
            }
        }
    };

    const houseFloorsDataFilterRooms = useQuery<Record<string, boolean>>({
        queryFn: () => fetchHouseFloorsFilterRooms(codeCorps, rooms),
        queryKey: ['houseFloors', codeCorps, rooms],
    }, queryClient);

    const filtersFloorsByRoom = (): Record<string, boolean> | undefined => {
        if (houseFloorsDataFilterRooms.status === 'success') {
            return houseFloorsDataFilterRooms.data
        }
    }

    const filtersFloorsByRooms = filtersFloorsByRoom();

    const coordinatesAdaptivePolygonsFunc = () => {
        const dataСoordinatesPolygons: any = {
            1183: {
                scaleX: 0.89,
                scaleY: 0.85,
                offsetX: 30,
                offsetY: 435,
            },
            1184: {
                scaleX: 1.35,
                scaleY: 1.28,
                offsetX: 87,
                offsetY: 100,
            },
            1185: {
                scaleX: 0.70,
                scaleY: 0.60,
                offsetX: 841,
                offsetY: 620,
            }
        }

        const dataСoordinatesPolygons780: any = {
            1183: {
                scaleX: 1.48,
                scaleY: 0.7,
                offsetX: -740,
                offsetY: 540,
            },
            1184: {
                scaleX: 2.23,
                scaleY: 1.08,
                offsetX: -625,
                offsetY: 245,
            },
            1185: {
                scaleX: 1.2,
                scaleY: 0.55,
                offsetX: 600,
                offsetY: 667,
            }
        }

        return widthWindow <= 780 ? dataСoordinatesPolygons780 : dataСoordinatesPolygons;
    }


    const coordinatesPolygons = coordinatesAdaptivePolygonsFunc()

    console.log('floorData', floorData)

    const newDataPoints = useMemo(() => {
        if (!floorData?.points || !houseFloorsData) return [];

        return floorData.points
            // type predicate
            .filter((point): point is pointsType => Boolean(point))
            .map((point: pointsType) => {
                const scaleX = coordinatesPolygons[codeCorps]?.scaleX;
                const scaleY = coordinatesPolygons[codeCorps]?.scaleY;
                const offsetX = coordinatesPolygons[codeCorps]?.offsetX;
                const offsetY = coordinatesPolygons[codeCorps]?.offsetY;

                const split = point.polygon.split(' ');
                const newSplit = split.map((item: any, index: number) => {
                    const num = parseFloat(item);
                    if (index % 2 === 0) {
                        return (num * scaleX + offsetX).toFixed(2);
                    }
                    return (num * scaleY + offsetY).toFixed(2);
                });

                return {
                    ...point,
                    polygon: newSplit.join(' '),
                };
            })
            .filter((point: pointsType) => {
                if (filtersFloorsByRooms) {
                    return filtersFloorsByRooms[point.code]
                }

                return houseFloorsData[point.code]
            });
    }, [floorData, filtersFloorsByRooms, houseFloorsData, widthWindow, codeCorps]);


    const dataHouseFloorTotalsRooms = useQuery({
        queryFn: () => fetchHouseFloorTotals(codeCorps, floorState),
        queryKey: ['houseFloors', codeCorps, floorState],
    }, queryClient);


    return (
        <>
            {mode === 'floors' && isShowSlider &&
				<div
					className={style.floorSliderWrapper}
				>
					<div className={style.floorSlider__prevSlide}></div>
					<Swiper
						onSwiper={setSwiperInstance}
						onSlideChange={handleSlideChange}
						direction="vertical"
						slidesPerView={6}
						centeredSlides={false}
						initialSlide={0}
						spaceBetween={0}
						mousewheel={{
                            forceToAxis: true,
                            sensitivity: 1,
                            releaseOnEdges: true,
                        }}
						navigation={{
                            nextEl: `.${style.floorSlider__nextSlide}`,
                            prevEl: `.${style.floorSlider__prevSlide}`,
                        }}
						modules={[Navigation]}
						className={style.floorSlider}
					>
                        {newDataPoints.map((el: any, index: number) => (
                            <SwiperSlide
                                key={el.code}
                                className={clsx(
                                    style.floorSlider__floorSlide,
                                    activeFloor === el.code && style.active
                                )}
                                onClick={() => handleFloorClick(el.code, index)}
                            >
                                {el.code}
                            </SwiperSlide>
                        ))}
					</Swiper>
					<div className={style.floorSlider__nextSlide}></div>
				</div>
            }

            <svg
                ref={svgRef}
                className={style.floorPlanSvg}
                width="100%"
                height="100%"
                viewBox="0 0 1920 1076"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
            >
                {floorData && newDataPoints.length ?
                    newDataPoints.map((point: any, index: number) => {
                        if (point !== null) {
                            return <polygon
                                ref={(el) => {
                                    if (el) polygonRefs.current.set(point.code, el);
                                }}
                                className={clsx(
                                    style.floorPlanSvg__polygon,
                                    (activeFloor === point.code) && style.hover
                                )}
                                onMouseEnter={(e) => handlePolygonHover(e, point.code, index)}
                                onMouseLeave={widthWindow <= 680 ? undefined : handlePolygonHide}
                                key={point.polygon}
                                points={point.polygon}
                                data-floor={point.code}
                            />
                        }
                    }) : null
                }
            </svg>
            {mode === 'floors' && floorState && dataHouseFloorTotalsRooms.data &&
				<InfoCardBuild
					data={dataHouseFloorTotalsRooms.data}
					mode={'floors'}
					textButton={'Выбрать квартиру'}
					position={cardPosition}
					className={style.infoCardBuild}
					showBtnClose={widthWindow <= 680}
                    closeCardClick={handlePolygonHide}
				/>
            }
        </>
    )
}
