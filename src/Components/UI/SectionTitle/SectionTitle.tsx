import {FC} from "react";
import {UnderlinedTitle} from "@/src/Components/UI/UnderlinedText/UnderlinedTitle";
import style from './SectionTitle.module.scss'
import {clsx} from "clsx";

interface ISectionTitleProps {
    classNameTitle?: string;
    classNameUnderlined?: string;
    textUnderlined?: any;
    isDots?: boolean;
    children: React.ReactNode;
    isUnderlinedTitle?: boolean;
}

export const SectionTitle: FC<ISectionTitleProps> = (
    {
        classNameTitle,
        classNameUnderlined,
        textUnderlined,
        children,
        isDots,
        isUnderlinedTitle,
    }
) => {
    return (
        <h2 className={clsx(style.sectionTitle, classNameTitle)}>
            {isUnderlinedTitle && <UnderlinedTitle
                className={classNameUnderlined}
                text={textUnderlined}
                isDots={isDots}
            />}
            {children}
        </h2>
    )
}
