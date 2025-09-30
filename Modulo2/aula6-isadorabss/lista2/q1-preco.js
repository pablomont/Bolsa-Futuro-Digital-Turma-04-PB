function calculatePrice(order){
    let envio;
    let final;
    let nome = order.productName;
    let preco = order.price;
    if(1 <= preco && preco <= 2000){
        envio = 300;
    } else if(2001 <= preco && preco <= 4000) {
        envio = 500;
    } else{
        envio = 700;
    }
    final = preco + envio;
    return `O produto ${nome} custa ${preco}. Seu custo de envio é ${envio}. Portanto, o preço final é de ${final}.`;
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