const order1 = {
    productName: 'Macbook',
    price: 6500
}

const order2 = {
    productName: 'Playstation 5',
    price: 4500
}

console.log(calculatePrice(order1))
console.log(calculatePrice(order2))

 // -----------------------------------------------------------------------------------------------------------------------------------------------------------
function calculatePrice(order) {
    let shipPrice
    let finalPrice
    if (order.price <= 2000 && order.price >= 1) {
        shipPrice = 300
    } else if (order.price <= 4000 && order.price >= 2001) {
        shipPrice = 500
    } else if (order.price > 4000 ) {
        shipPrice = 700
    }
    finalPrice = shipPrice + shipPrice

    return (`O produto ${order.productName} custa ${order.price}. Seu custo de envio ${shipPrice}. Portanto o preço final é de ${finalPrice}`)
}

