import {FC} from "react";
import style from './PostItem.module.scss'
import {LinkToPage} from "@/src/Components/UI/LinkToPage/LinkToPage";
import Link from "next/link";

interface PostItemProps {
    image: string;
    title: string;
    date?: string;
    link?: string;
}

export const PostItem: FC<PostItemProps> = ({image, title, date, link}) => {

    const content = (
        <>
            <div className={style.postItem__wrapperImg}>
                <img className={style.postItem__img} src={image} alt={title} />
            </div>

            <div className={style.postItem__bottom}>
                <p className={style.postItem__desc}>
                    {title}
                </p>

                {date && <span className={style.postItem__date}>{date}</span>}
            </div>
        </>
    );

    return (
        <li className={style.postItem}>
            {link
                ? <Link href={link} className={style.postItemLink}>{content}</Link>
                : <div className={style.postItemLink}>{content}</div>
            }
            {link &&
                <LinkToPage
                    classname={style.postItem__link}
                    path={link}
                >
                    Подробнее
                </LinkToPage>
            }
        </li>
    )
}
