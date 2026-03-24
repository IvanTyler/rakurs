export function formatQuarterYear(dateStr: string) {
    const date = new Date(dateStr);
    const year = date.getFullYear();
    const month = date.getMonth();
    const quarter = Math.floor(month / 3) + 1;
    const quarters = ['I', 'II', 'III', 'IV'];
    return `${quarters[quarter - 1]} кв. ${year}`;
}

