import {FC} from "react";
import style from './BuildingVisualization.module.scss';
import Image from "next/image";

import imgBuilding from '@/public/images/building-visualization/image.webp';
import imgBuilding768 from '@/public/images/building-visualization/image-768.webp';
import imgBuilding360 from '@/public/images/building-visualization/image-360.webp';


export const BuildingVisualization: FC = () => {
    return (
        <section className={style.buildingVisualization}>
            <picture className={style.buildingVisualization__picture}>

                <source className={style.buildingVisualization__img} media="(max-width:400px)"
                        srcSet={imgBuilding360.src}/>

                <source className={style.buildingVisualization__img} media="(max-width:850px)"
                        srcSet={imgBuilding768.src}/>
                <Image className={style.buildingVisualization__img} src={imgBuilding} alt={'Визуализация здания'}/>
            </picture>
        </section>
    )
}