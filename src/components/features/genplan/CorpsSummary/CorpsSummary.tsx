import {FC} from "react";
import style from './CorpsSummary.module.scss';
import {plural} from "@/src/Utils/Pluar";
import {formatPrice} from "@/src/Utils/FormatPrice";
import {formatQuarterYear} from "@/src/Utils/FormatQuarterYear";


interface ICorpsSummaryProps {
    data: any;
    countFloors: number;
    minPrice: any | undefined;
}

export const CorpsSummary: FC<ICorpsSummaryProps> = (
    {
        data,
        countFloors,
        minPrice,
    }
) => {

    return (
		<>
        {data &&
			<div className={style.corpsSummary}>
				<h3 className={style.corpsSummary__title}>
					Корпус {data.num}
				</h3>

				<div className={style.corpsSummary__item}>
					<dt className={style.corpsSummary__term}>Этажность</dt>
					<dd className={style.corpsSummary__desc}>{countFloors} {plural(countFloors, ['этаж', 'этажа', 'этажей'])}</dd>
				</div>

				<div className={style.corpsSummary__item}>
					<dt className={style.corpsSummary__term}>Объекты</dt>
					<dd className={style.corpsSummary__desc}>{data.countPlaces} {plural(data.countPlaces, ['квартира', 'квартиры', 'квартир'])}</dd>
				</div>

				<div className={style.corpsSummary__item}>
					<dt className={style.corpsSummary__term}>Ввод в эксплуатацию</dt>
					<dd className={style.corpsSummary__desc}>{formatQuarterYear(data.date_end)}</dd>
				</div>

				<div className={style.corpsSummary__item}>
					<dt className={style.corpsSummary__term}>Цены</dt>
					<dd className={style.corpsSummary__desc}>{formatPrice(minPrice)}</dd>
				</div>

			</div>}
		</>
    )
}