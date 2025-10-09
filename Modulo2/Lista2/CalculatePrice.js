function calculatePrice(obj){
    let name = obj.productName;
    let price = obj.price;
    let cost = 0

    if(price > 4000){
        cost = 700;
    } else if(price >= 2001){
        cost = 700;
    } else{
        cost = 300
    }

    console.log(`O produto ${name} custa R$${price}. Seu custo de envio ${cost}. Portanto, o preço final do produto é R$${price + cost}.`);
}

const order1 = {
   productName: 'Macbook',
   price: 6500,
}


const order2 = {
   productName: 'Playstation 5',
   price: 4500,
}


console.log(calculatePrice(order1));
console.log(calculatePrice(order2));