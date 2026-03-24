import Link from "next/link";
import {FC} from "react";
import {clsx} from "clsx";
import style from './LinkToPage.module.scss'

interface ILinkToPageProps {
    classname?: string;
    children: React.ReactNode;
}


export const LinkToPage: FC<ILinkToPageProps> = ({children, classname}) => {
    return (
        <Link className={clsx(style.apartmentSelector, classname)} href={''}>
            {children}
        </Link>
    )
}