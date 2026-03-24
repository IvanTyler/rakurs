'use client';

import {FC, useEffect, useState, useRef} from "react";
import style from './PreloaderPage.module.scss';

import imgLetterR from '@/public/images/loader/r.svg'
import imgLetterA from '@/public/images/loader/a.svg'
import imgLetterK from '@/public/images/loader/k.svg'
import imgLetterU from '@/public/images/loader/u.svg'
import imgLetterS from '@/public/images/loader/s.svg'
import Image from "next/image";
import {clsx} from "clsx";

export const PreloaderPage: FC = () => {
    const [counter, setCounter] = useState(0);
    const [time, setTime] = useState(80);
    const pathRef = useRef<SVGPathElement>(null);
    const [pathLength, setPathLength] = useState(0);


    const [isContentLoaded, setIsContentLoaded] = useState(false);
    const [isContentHide, setIsContentHide] = useState(true);


    useEffect(() => {
        // Проверяем текущее состояние загрузки
        if (document.readyState === 'complete') {
            setIsContentLoaded(true);
        } else {
            window.addEventListener('load', () => setIsContentLoaded(true));
            return () => window.removeEventListener('load', () => setIsContentLoaded(true));
        }
    }, []);


    useEffect(() => {
        if (pathRef.current) {
            const length = pathRef.current.getTotalLength();
            const roundedPathLength = Math.round(length);
            setPathLength(roundedPathLength);

            // pathRef.current.style.strokeDasharray = `${roundedPathLength}`;
            // pathRef.current.style.strokeDashoffset = `${roundedPathLength}`;

        }
    }, []);

    useEffect(() => {
        if (counter >= 100) return;

        const timer = setTimeout(progressLoad, time);
        return () => clearTimeout(timer);
    }, [counter, isContentLoaded]);

    useEffect(() => {
        if (counter === 100) {
            const timer = setTimeout(() => {
                setIsContentHide(false);
            }, 1100);

            return () => clearTimeout(timer);
        }
    }, [counter]);

    const progressLoad = () => {
        if (!isContentLoaded) return
        if (counter < 0 || counter >= 100) return;

        let delay = 80;
        if (counter >= 4 && counter < 96) delay = 30;


        setTime(delay);
        setCounter(prev => {
            const newCount = prev + 1;

            // Расчет увеличения видимости штриха, чем меньше strokeDashoffset тем больше видно штрих
            if (pathRef.current && pathLength > 0) {
                const progress = newCount / 100;
                const offset = Math.round(pathLength * (1 - progress));
                pathRef.current.style.strokeDashoffset = `${offset}`;
            }

            return newCount;
        });
    };

    const isClosingPreloader = counter === 100;

    return (
        <>
        {isContentHide &&
            <div className={clsx(style.preloaderPage, isClosingPreloader && style.closing)}>
            <div className={style.preloaderPage__wrapperLoaderSvg}>
                <svg className={style.preloaderPage__svg} width="704" height="212" viewBox="0 0 704 212" fill="none"
                     xmlns="http://www.w3.org/2000/svg">
                    <path
                        ref={pathRef}
                        className={style.preloaderPage__progressPath}
                        d="M114.615 0.5V54.1709H226.724V0.5H703.5V107.156H583.727V211.5H0.5V0.5H114.615Z"
                        stroke="#242424"
                        strokeWidth="1.5"
                        fill="none"
                    />
                    <g id="arrow">
                        <rect width="21" height="1"
                              transform="matrix(0.707107 -0.707107 -0.707107 -0.707107 676.707 28.0039)"
                              fill="#242424"/>
                        <rect width="16" height="1"
                              transform="matrix(1 0 0 -1 676 13.0039)"
                              fill="#242424"/>
                        <rect width="16" height="1"
                              transform="matrix(0 -1 -1 0 692 28.0039)"
                              fill="#242424"/>
                    </g>
                </svg>
                <span className={style.preloaderPage__counter}>{counter}%</span>
            </div>

            <div className={style.letters}>
                <span className={style.letters__item}>
                    <img loading='lazy' className={style.letters__img} src={imgLetterR.src} alt="R"/>
                </span>
                <span className={style.letters__item}>
                    <img loading='lazy' className={style.letters__img} src={imgLetterA.src} alt="A"/>
                </span>
                <span className={style.letters__item}>
                    <img loading='lazy' className={style.letters__img} src={imgLetterK.src} alt="K"/>
                </span>
                <span className={style.letters__item}>
                    <img loading='lazy' className={style.letters__img} src={imgLetterU.src} alt="U"/>
                </span>
                <span className={style.letters__item}>
                    <img loading='lazy' className={style.letters__img} src={imgLetterR.src} alt="R"/>
                </span>
                <span className={style.letters__item}>
                    <img loading='lazy' className={style.letters__img} src={imgLetterS.src} alt="S"/>
                </span>
            </div>
        </div>
        }
        </>
    );
};
