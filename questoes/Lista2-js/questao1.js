const order1 = {
    productName: 'Macbook',
    price: 6500,
 }
 
 const order2 = {
    productName: 'Playstation 5',
    price: 4500,
 }
 

function calculatePrice(order){
    if (order.price >= 1 && order.price <= 2000) {
        custoEnvio = 300
    }
    else if (order.price >= 2001 && order.price <= 4000) {
        custoEnvio = 500
    }
    else if (order.price > 4000) {
        custoEnvio = 700
    }
    else {
        custoEnvio = 0;
    }
    precoFinal = order.price + custoEnvio;

    return `O produto ${order.productName} custa R$${order.price}. Seu custo de envio é R$${custoEnvio}. Portanto, o preço final é de R$${precoFinal}`

} 

 console.log(calculatePrice(order1));
 console.log(calculatePrice(order2));