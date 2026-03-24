import {FC} from "react";
import style from "./Icon.module.scss";
import {clsx} from "clsx";

interface IIconProps {
    className: string;
    myClassName: string;
}

export const Icon: FC<IIconProps> = ({className, myClassName}) => {
    return (
        <i className={clsx(style.icon, style[className], style[myClassName])}></i>
    )
}