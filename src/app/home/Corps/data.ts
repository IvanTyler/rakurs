import {v4 as uuidv4} from "uuid";

export const selectCorpsData = [
    {
        id: uuidv4(),
        name: 'corps_1',
        selected: false,
        title: `44-этажный корпус: 202.3 м²`,
        img: '/images/corps/image-2.webp',
        itemDesc: [
            {
                id: uuidv4(),
                active: false,
                desc: 'Кресло Groovy от Пьера Полена',
            },
            {
                id: uuidv4(),
                active: true,
                desc: 'Светильник Flos Achille Castiglioni',
            },
            {
                id: uuidv4(),
                active: false,
                desc: 'Светлый керамогранит',
            },
            {
                id: uuidv4(),
                active: false,
                desc: 'Медные поверхности',
            },
        ],
    },
    {
        id: uuidv4(),
        name: 'corps_2',
        selected: true,
        title: `26-этажный корпус: 202.3 м²`,
        img: '/images/corps/image-1.webp',
        itemDesc: [
            {
                id: uuidv4(),
                active: true,
                desc: 'Диван De Padova',
            },
            {
                id: uuidv4(),
                active: false,
                desc: 'Авторские вазы, повторяющие формы Rakurs',
            },
            {
                id: uuidv4(),
                active: false,
                desc: 'Шпонированные вставки',
            },
            {
                id: uuidv4(),
                active: false,
                desc: 'Светильник Astep Vittoriano Vigano',
            },
            {
                id: uuidv4(),
                active: false,
                desc: 'Ox Chair, знаковое кресло Ханса Вегнера',
            },
            {
                id: uuidv4(),
                active: false,
                desc: 'Камень, металл и дерево: сдержанная и элегантная отделка',
            },
            {
                id: uuidv4(),
                active: false,
                desc: 'Тёплая терракота',
            },
            {
                id: uuidv4(),
                active: false,
                desc: 'Светлый керамогранит',
            },
        ],
    },
    {
        id: uuidv4(),
        name: 'corps_3',
        selected: false,
        title: `18-этажный корпус: 202.3 м²`,
        img: '/images/corps/image-3.webp',
        itemDesc: [
            {
                id: uuidv4(),
                active: true,
                desc: 'Авторские вазы, повторяющие формы Rakurs',
            },
            {
                id: uuidv4(),
                active: false,
                desc: 'Диван De Padova',
            },
            {
                id: uuidv4(),
                active: false,
                desc: 'Светлый керамогранит',
            },
            {
                id: uuidv4(),
                active: false,
                desc: 'Декоративные панели',
            },
        ],
    },
];