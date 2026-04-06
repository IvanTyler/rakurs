import Link from "next/link";
import {FC} from "react";
import {clsx} from "clsx";
import style from './LinkToPage.module.scss'

interface ILinkToPageProps {
    classname?: string;
    children: React.ReactNode;
    path?: string;
}


export const LinkToPage: FC<ILinkToPageProps> = ({children, classname, path}) => {
    return (
        <Link className={clsx(style.apartmentSelector, classname)} href={path ? path : ''}>
            {children}
        </Link>
    )
}
