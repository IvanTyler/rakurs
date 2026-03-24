import React from 'react';
import style from './Input.module.scss';
import {clsx} from "clsx";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
}

export const Input: React.FC<InputProps> = React.forwardRef<HTMLInputElement, InputProps>((props, ref) => {
    const {className, ...restProps} = props;

        return (
            <input
                ref={ref}
                {...restProps}
                className={clsx(style.input, className)}/>
        );
    }
);

Input.displayName = 'Input';