import {v4 as uuidv4} from "uuid";

export const lobbyDataTabs = [
    {
        id: uuidv4(),
        label: 'архитектурное бюро',
        title: 'О бюро RYMAR',
        active: true,
        images: [
            {
                id: uuidv4(),
                path: '/images/lobby/architecture/image-1.webp',
                label: 'рис.1 (лифтовая зона)',
            },
            {
                id: uuidv4(),
                path: '/images/lobby/architecture/image-2.webp',
                label: 'рис.3 (лобби в корпусе 3)',
            },
            {
                id: uuidv4(),
                path: '/images/lobby/architecture/image-3.webp',
                label: 'рис.2 (лобби в корпусе 3)',
            },
        ],
        desc: `
            Над пространством работало петербургское бюро Rymar.studio, чья миссия — делать мир 
            красивее с помощью архитектуры, предметного дизайна и собственного чувства композиции. 
            <br />
            <br />
            «Мы верим, что красота делает людей счастливее» — Rymar.studio
        `,
    },
    {
        id: uuidv4(),
        label: 'сервис',
        title: 'Консьерж-сервис',
        active: false,
        images: [
            {
                id: uuidv4(),
                path: '/images/lobby/service/image-1.webp',
                label: 'рис.1 (лобби в корпусе 2)',
            },
            {
                id: uuidv4(),
                path: '/images/lobby/service/image-2.webp',
                label: 'рис.3 (лобби в корпусе 4)',
            },
            {
                id: uuidv4(),
                path: '/images/lobby/service/image-3.webp',
                label: 'рис.2 (лобби в корпусе 3)',
            },
        ],
        desc: `
            На первом этаже разместится ресепшн с консьерж-сервисом: администратор позаботится о 
            спокойствии дома, урегулирует любой бытовой вопрос и поможет  с повседневными делами.
        `,
    },
    {
        id: uuidv4(),
        label: 'удобства',
        title: 'Первые этажи',
        active: false,
        images: [
            {
                id: uuidv4(),
                path: '/images/lobby/facilities/image-1.webp',
                label: 'рис.1 (лобби в корпусе 2)',
            },
            {
                id: uuidv4(),
                path: '/images/lobby/facilities/image-2.webp',
                label: 'рис.3 (лобби в корпусе 4)',
            },
            {
                id: uuidv4(),
                path: '/images/lobby/facilities/image-3.webp',
                label: 'рис.2 (лобби в корпусе 3)',
            },
        ],
        desc: `
            В лобби каждого корпуса разместится зона отдыха, где можно дождаться такси 
            или доставку, а также душевая для питомцев, колясочная и санузел.
            <br />
            <br />
            Площади колясочных: <br />
            26-этажный корпус: 29.3 м2 <br />
            44-этажный корпус: 30.1 м2 <br />
            18-этажный корпус: 19.3 м2 <br />
        `,
    },
    {
        id: uuidv4(),
        label: 'отделка',
        title: 'Общие помещения',
        active: false,
        images: [
            {
                id: uuidv4(),
                path: '/images/lobby/finishing/image-1.webp',
                label: 'рис.1 (лобби в корпусе 2)',
            },
            {
                id: uuidv4(),
                path: '/images/lobby/finishing/image-2.webp',
                label: 'рис.3 (лобби в корпусе 4)',
            },
            {
                id: uuidv4(),
                path: '/images/lobby/finishing/image-3.webp',
                label: 'рис.2 (лобби в корпусе 3)',
            },
        ],
        desc: `
            Отделка мест общего пользования выполнена  из керамогранита, матового 
            хрома, шпонированных панелей и декоративной штукатурки — материалы, 
            которые обеспечивают долговечность и соответствуют высоким стандартам проекта. 
            <br />
            Такое сочетание создаёт сдержанную и в то же время выразительную среду.
        `
    },
]