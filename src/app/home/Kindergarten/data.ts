import {v4 as uuidv4} from "uuid";

export const kindergartenData = [
    {
        id: uuidv4(),
        name: 'stafy',
        label: '01',
        title: 'Безопасность',
        active: true,
        images: [
            {
                id: uuidv4(),
                path: '/images/kindergarten/stafy.webp',
                label: 'рис.2 (фасады корпусов)',
            },
        ],
        desc: `
            В школе не будет травмоопасных конструкций и 
            отдельно стоящих колонн в учебных кабинетах
        `,
    },
    {
        id: uuidv4(),
        name: 'spaces',
        label: '02',
        title: 'Открытые многосветные пространства',
        active: false,
        images: [
            {
                id: uuidv4(),
                path: '/images/kindergarten/spaces.webp',
                label: 'рис.2 (фасады корпусов)',
            },
        ],
        desc: `
            Многофункциональные пространства для 
            организации и проведения мероприятий 
        `,
    },
    {
        id: uuidv4(),
        name: 'educational_process',
        label: '03',
        title: 'Открытый учебный процесс',
        active: false,
        images: [
            {
                id: uuidv4(),
                path: '/images/kindergarten/educational-process.webp',
                label: 'рис.2 (фасады корпусов)',
            },
        ],
        desc: `
            Применение прозрачных стеклянных перегородок, дверей 
            и внутренних витражей, отсутствие традиционных замкнутых помещений
        `,
    },
    {
        id: uuidv4(),
        name: 'сonvenient_logistics',
        label: '04',
        title: 'Удобная логистика',
        active: false,
        images: [
            {
                id: uuidv4(),
                path: '/images/kindergarten/сonvenient-logistics.webp',
                label: 'рис.2 (фасады корпусов)',
            },
        ],
        desc: `
            По блокам разделены универсальные и специализированные классы, 
            в результате чего переход между этажами минимизирован в 
            течение дня
        `
    },
    {
        id: uuidv4(),
        name: 'сlassroom_equipment',
        label: '05',
        title: 'Оснащённость классов',
        active: false,
        images: [
            {
                id: uuidv4(),
                path: '/images/kindergarten/сlassroom-equipment.webp',
                label: 'рис.2 (фасады корпусов)',
            },
        ],
        desc: `
            Мобильное оборудование и эргономичные модели столов и 
            стульев с тщательно выверенной конструкцией 
        `
    },
    {
        id: uuidv4(),
        name: 'premises_different_ages',
        label: '06',
        title: 'Помещения для разных возрастов',
        active: false,
        images: [
            {
                id: uuidv4(),
                path: '/images/kindergarten/premises-for-different-ages.webp',
                label: 'рис.2 (фасады корпусов)',
            },
        ],
        desc: `
            Игровые, практикумы, лектории 
        `
    },
]