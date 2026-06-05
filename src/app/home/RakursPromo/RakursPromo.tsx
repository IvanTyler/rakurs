import style from './RakursPromo.module.scss'
import {ContainerSection} from "@/src/Components/UI/Container/ContainerSection";
import {SliderNews} from "@/src/app/home/SliderNews/SliderNews";
import {fetchSliderMenu} from "@/src/api/SliderMenu";


export const RakursPromo = async () => {
    const data = await fetchSliderMenu();
    const slides = data.menu.contents.gallery.items;

    return (
        <section className={style.rasursPromo}>
            <ContainerSection className={style.containerRasursPromo}>
                <h1 className={style.rasursPromo__title}>
                    Жилой проект высокого класса  в районе науки  и образования
                </h1>
                <div className={style.rasursPromo__center}></div>
                <SliderNews
                    slides={slides}
                    classNameLink={style.linkSlider}
                    classNameSlideContainer={style.rasursPromo__sliderContainer}
                    classNameDesc={style.rasursPromo__desc}
                    classNameDiscount={style.rasursPromo__discount}
                />
            </ContainerSection>
        </section>
    )
}
