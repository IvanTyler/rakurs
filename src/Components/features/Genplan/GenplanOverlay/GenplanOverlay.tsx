'use client'

import {FC, useState, useEffect} from "react";
import style from "./GenplanOverlay.module.scss";
import {clsx} from "clsx";

interface IGenplanOverlayProps {
    widthWindowSize?: number | any,
    dataSvg: any[],
    hoveredCode: string | null,
    selectedCorps: string | null,
    setHoveredCode?: (code: string | null) => void,
    onCorpsClick: (code: string) => void;
    mode: 'corps' | 'floors';
}

export const GenplanOverlay: FC<IGenplanOverlayProps> = (
    {
        widthWindowSize,
        hoveredCode,
        selectedCorps,
        setHoveredCode,
        dataSvg,
        onCorpsClick,
        mode,
    }) => {

    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            if (widthWindowSize !== undefined) {
                setIsMobile(widthWindowSize <= 600);
            } else {
                setIsMobile(window.matchMedia('(max-width: 600px)').matches);
            }
        };

        checkMobile();

        if (widthWindowSize === undefined) {
            window.addEventListener('resize', checkMobile);
            return () => window.removeEventListener('resize', checkMobile);
        }
    }, [widthWindowSize]);

    return (
        <div className={clsx(style.genplanOverlay, !selectedCorps && style.selectedCorps)}>
            {dataSvg.map(el => {
                const isActiveCorps = hoveredCode === el.code;
                const isActiveFloors = selectedCorps === el.code;

                return (
                    <div
                        key={el.id}
                        className={clsx(
                            style.genplanOverlay__item,
                            mode === 'corps' && !isActiveCorps && hoveredCode ? style.blur : style.notBlur,
                            mode === 'floors' && !isActiveFloors && selectedCorps ? clsx(style.blur, style.floors) : style.notBlur
                        )}

                        onMouseEnter={!isMobile && mode === 'corps' && setHoveredCode
                            ? () => setHoveredCode(el.code)
                            : undefined
                        }

                        onMouseLeave={!isMobile && mode === 'corps' && setHoveredCode
                            ? () => setHoveredCode(null)
                            : undefined
                        }

                        onClick={() => {
                            if (isMobile && mode === 'corps' && setHoveredCode) {
                                if (hoveredCode === el.code) {
                                    onCorpsClick(el.code);
                                } else {
                                    setHoveredCode(el.code);
                                }
                            } else {
                                onCorpsClick(el.code);
                            }
                        }}
                    />
                );
            })}
        </div>
    );
};
