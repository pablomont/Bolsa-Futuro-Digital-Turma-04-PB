const order1 = {
    productName: "Macbook",
    price: 6500, 
}

const order2 = {
    productName: "Playstation 5",
    price: 4500,
}


function calculatePrice(Pedido) {
    const productName = Pedido.productName;
    const price = Pedido.price;
    let frete;
    
    if (price >= 1 && price <= 2000) {
        frete= 300;
    } else if (price >= 2001 && price <= 4000) {
        frete = 500;
    } else if (price > 4000) {
        frete= 700;
    } else {
        console.log("Valor inválido")
    }
    const priceFinal= frete+Pedido.price;
    console.log(`O produto ${productName} custa R$${price}. Seu custo de envio é de R$${frete}. Portanto, o preço final é de R$${priceFinal}`);
}

calculatePrice(order1); 
calculatePrice(order2);
