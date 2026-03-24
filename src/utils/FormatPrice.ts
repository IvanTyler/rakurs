export function formatPrice(price: number): string {
    if (price >= 1_000_000) {
        const millions = price / 1_000_000;
        return millions % 1 === 0
            ? `${millions} млн ₽`
            : `${millions.toFixed(1)} млн ₽`;
    }
    return `${price.toLocaleString()} ₽`;
}
