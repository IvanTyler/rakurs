import {FC} from "react";
import style from './LoadMoreButton.module.scss';
import {clsx} from "clsx";

interface loadMoreButtonProps {
    classNameButton?: string | undefined;
    count: number;
    total: number;
    onClick: () => void;
    isLoading?: boolean;
}

export const LoadMoreButton: FC<loadMoreButtonProps> = (
    {
        count,
        total,
        classNameButton,
        onClick,
        isLoading = false
    }) => {
    return (
        <button
            className={clsx(style.loadMoreButton, classNameButton)}
            onClick={() => onClick()}
            disabled={isLoading}
        >
            {isLoading ? 'Загрузка...' : `Показать ещё ${count} из ${total} новостей`}
        </button>
    )
}
