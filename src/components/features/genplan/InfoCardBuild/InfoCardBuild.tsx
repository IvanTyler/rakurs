import {FC} from "react";
import style from './InfoCardBuild.module.scss'
import {Button} from "@/src/Components/UI/SubmitButton/Button";

import {clsx} from "clsx";
import {plural} from "@/src/Utils/Pluar";
import {formatQuarterYear} from "@/src/Utils/FormatQuarterYear";
import {HouseInfoList} from "@/src/Components/features/Genplan/HouseInfoList/HouseInfoList";


interface IInfoCardBuildProps {
    data: any
    position?: { top: number; left: number } | null;
    code?: any;
    textButton: string;
    className?: string;
    showBtnClose?: boolean;
    mode: 'corps' | 'floors';
    closeCardClick?: () => void
}

export const InfoCardBuild: FC<IInfoCardBuildProps> = (
    {
        code,
        position,
        textButton,
        data,
        mode,
        className,
        showBtnClose,
        closeCardClick
    }) => {

    return (
        <>
            {data &&
				<div
					style={{
                        position: 'absolute',
                        top: position?.top ? `${position.top}px` : undefined,
                        left: position?.left ? `${position.left}px` : undefined,
                    }}
					 className={clsx(
                         style.infoCardBuild,
                         mode === 'corps' && style[`code${code}`],
                         style.floors,
                         className
                     )}
				>
                    {mode === 'corps' && <h3 className={style.infoCardBuild__title}>Корпус {data.num}</h3>}
                    {mode === 'floors' && <h3 className={style.infoCardBuild__title}>{data.floor} Этаж</h3>}

                    {mode === 'floors' &&
                        <span className={clsx(style.infoCardBuild__countApartments, style.infoCardBuild__floors)}>
                            Доступно {data.countPlaces} {plural(data.countPlaces, ['квартира', 'квартиры', 'квартир'])}
                        </span>
                    }

                    {showBtnClose && <div onClick={() => closeCardClick?.()} className={style.infoCardBuild__close}></div>}


                    {mode === 'corps' &&
						<div className={style.infoCardBuild__commissioning}>
							<span className={style.infoCardBuild__headline}>Ввод в эксплуатацию</span>
							<span className={style.infoCardBuild__date}>
                                {formatQuarterYear(data.date_end)}
                            </span>
							<span className={style.infoCardBuild__countApartments}>
                                Доступно {data.countPlaces} {plural(data.countPlaces, ['квартира', 'квартиры', 'квартир'])}
                            </span>
						</div>
                    }

                    {data.totals &&
						<HouseInfoList item={data.totals}/>
                    }

					<Button
						className={style.infoCardBuild__button}
						label={textButton}
					/>
				</div>
            }
        </>
    )
}
