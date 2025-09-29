const order1 = {
    productName: "McBook",
    price: 6500
}
const order2 = {
    productName: "PlayStation 5",
    price: 4500
}

function custoDeEnvio(price) {

    if (price >= 1 && price <= 2000) {
        return 300;
    } else if (price >= 2001 && price <= 4000) {
        return 500;
    } else {
        return 700;
    }
}

function calculatePrice(order) {
    
    let envio = custoDeEnvio(order.price);
    let precoFinal = order.price + envio;
    console.log(
        'o produto: ' + order.productName + ' custa: ' + order.price + '. O seu custo de envio é: ' 
        + envio + '. O preço final é: ' + precoFinal);
}

calculatePrice(order1);
calculatePrice(order2);
