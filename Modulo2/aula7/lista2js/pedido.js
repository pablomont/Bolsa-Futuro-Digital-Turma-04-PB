const order1 = {
    productName: 'Macbook',
    price: 6500,
};

const order2 = {
    productName: 'Playstation 5',
    price: 4500,
};

function calculatePrice(order) {
    let custoDeEnvio = 0;

    if (order.price >= 1 && order.price <= 2000) {
        custoDeEnvio = 300;
    } else if (order.price >= 2001 && order.price <= 4000) {
        custoDeEnvio = 500;
    } else if (order.price > 4000) {
        custoDeEnvio = 700;
    }

    const precoFinal = order.price + custoDeEnvio;

    const mensagem = `O  produto ${order.productName} custa $${order.price}. Seu custo de envio é $${custoDeEnvio}. Portanto, o preço final é de $${precoFinal}.`;
    console.log(mensagem);
}

calculatePrice(order1);
calculatePrice(order2);