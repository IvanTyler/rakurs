import {v4 as uuidv4} from "uuid";

const getCurrentDateInRussian = () => {
    const now = new Date();
    const day = now.getDate();
    const month = now.getMonth(); // 0-11

    const monthNames = [
        'января', 'февраля', 'марта', 'апреля', 'мая', 'июня',
        'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'
    ];

    return `${day} ${monthNames[month]}`;
};

export const newsData = [
    {
        id: uuidv4(),
        img: '/images/news/image-1.webp',
        desc: `Растения сочетаются со зданиями формой листьев, задавая игру  с фактурой фасадов`,
        date: getCurrentDateInRussian(),
    },
    {
        id: uuidv4(),
        img: '/images/news/image-2.webp',
        desc: `Жизнь в современном жилом комплексе в Москве: комфорт, стиль и удобство для каждого жителя`,
        date: getCurrentDateInRussian(),
    },
    {
        id: uuidv4(),
        img: '/images/news/image-3.webp',
        desc: `Как энкерная плитка дополняет образ современной Москвы?`,
        date: getCurrentDateInRussian(),
    },

]