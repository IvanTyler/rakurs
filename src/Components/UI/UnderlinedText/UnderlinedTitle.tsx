import {FC} from "react";
import style from './UnderlinedText.module.scss';
import {clsx} from "clsx";

interface IUnderlinedTextProps {
    className?: string;
    isDots?: boolean;
    text: string;
}

export const UnderlinedTitle: FC<IUnderlinedTextProps> = ({text, className, isDots}) => {
    return (
        <span className={clsx(style.underlinedText, className, !isDots && style.noneDots)}>
            <span className={clsx(style.underlinedText__text)}>{text}</span>
        </span>
    )
}