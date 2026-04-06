export const getCurrentDateInRussian = (date?: string) => {

    const monthNames = [
        'января', 'февраля', 'марта', 'апреля', 'мая', 'июня',
        'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'
    ];

    if (date) {
        const now = new Date(date);

        const day = now.getDate();
        const month = now.getMonth(); // 0-11

        return `${day} ${monthNames[month]}`;
    } else {
        const now = new Date();

        const day = now.getDate();
        const month = now.getMonth(); // 0-11

        return `${day} ${monthNames[month]}`;
    }

};
