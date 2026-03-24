import {FC} from "react";
import styleButton from './SubmitButton.module.scss';
import {clsx} from "clsx";

interface ISubmitButtonProps {
    top?: string | number,
    left?: string | number,
    className?: string | any;
    label: string;
}

export const Button: FC<ISubmitButtonProps> = (
    {
        label,
        className,
        top,
        left,
    }
) => {

    return (
        <button style={{top: `${Number(top)}%`, left: `${Number(left)}%`}}
                className={clsx(className, styleButton.submitButton)}>
            <span>{label}</span>
        </button>
    )
}
