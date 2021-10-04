export const calcSubPrice = (item) => {
    return item.count * item.pizza.price
}
export const calcTotalPrice = (pizzas) => {
    let totalPrice = 0
    pizzas.forEach(item => {
        totalPrice += item.subPrice
    })
    return totalPrice
}