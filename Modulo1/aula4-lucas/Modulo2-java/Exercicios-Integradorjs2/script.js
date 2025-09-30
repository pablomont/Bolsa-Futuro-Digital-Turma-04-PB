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
 
function calculatePrice(order) {

const { price, productName } = order;

let shippingCost = 0;
if (price <= 2000) {
    shippingCost = 300;
} else if (price <= 4000){
    shippingCost = 500;
} else {
    shippingCost = 700;
}

const finalPrice = price + shippingCost 

console.log(`O produto ${productName} custa $${price}. Seu custo de envio é de $${shippingCost}. Portanto, o preço final é de $${finalPrice}`);

return finalPrice;

}


