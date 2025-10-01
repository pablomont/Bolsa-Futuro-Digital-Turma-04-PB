const order1 = {
    productName: 'Ibanez Guitar',
    price: 2800,
}

const order2 = {
    productName: 'Fender Amplifier',
    price: 3000,
}

function calculateprice(order) {

    let frete;
    if (order.price >= 1 && order.price <= 2000) {
        frete = 300
    } else if (order.price >= 2001 && order.price <= 4000){
        frete = 500
    } else if (order.price > 4000){
        frete = 700
    } else {
        frete = 0
    }

    const valorFinal = order.price + frete;
    console.log(`O produto ${order.productName} custa R$${order.price}. Seu custo de envio é de R$${frete}. Portanto, o preço final é de R$${valorFinal}.`);

}

calculateprice(order1);
calculateprice(order2);