import {FC} from "react";
import style from "./DescSection.module.scss";
import {clsx} from "clsx";
import parse from "html-react-parser";


interface IDescSection {
    desc: string | undefined;
    prevDesc?: any | undefined;
    className?: string | undefined;
    shouldAnimate?: boolean;
}

export const DescSection: FC<IDescSection> = (
    {
        desc = '',
        className,
        shouldAnimate,
        prevDesc
    }) => {
    return (
        <p className={clsx(
            style.descSection,
            className,
            shouldAnimate && style.hiding,
            !shouldAnimate && style.showing,
        )}>
            {!prevDesc ? parse(desc) : parse(prevDesc)}
        </p>
    )
}
