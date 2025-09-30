function calculatePrice(order) {
    let shippingCost;

    if (order.price <= 2000) {
        shippingCost = 300;
    } else if (order.price <= 4000) {
        shippingCost = 500;
    } else {
        shippingCost = 700;
    }

    const finalPrice = order.price + shippingCost;

    return `O produto ${order.productName} custa $${order.price}. Seu custo de envio é $${shippingCost}. Portanto, o preço final é de $${finalPrice}.`;
}

const order1 = {
    productName: 'Macbook',
    price: 6500,
};

const order2 = {
    productName: 'Playstation 5',
    price: 4500,
};

console.log(calculatePrice(order1));
console.log(calculatePrice(order2));
