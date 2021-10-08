export const calcSubPrice = (item) => {
    return item.count * item.alteredSubPrice
}
export const calcSubPriceProduct = (item) => {
    return item.count * item.subPrice
}
export const calcTotalPrice = (pizzas) => {
    let totalPrice = 0
    pizzas.forEach(item => {
        totalPrice += item.alteredSubPrice
    })
    return totalPrice
}
