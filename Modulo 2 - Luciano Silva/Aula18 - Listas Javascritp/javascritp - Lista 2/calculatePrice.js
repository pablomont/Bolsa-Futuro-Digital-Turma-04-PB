// OBS: istalar Biblioteca "npm install prompt-sync"
const prompt = require('prompt-sync')();

// Produtos
const order1 = {
   productName: 'Macbook',
   price: 6500,
}

const order2 = {
   productName: 'Playstation 5',
   price: 4500,
}

// Valor da taxa
function tax(price1, price2){
if (price1 >=  1 && price1 <= 2000 && price2 >=  1 && price2 <= 2000 ) return "R$ 300";
if (price1 >=  2001 && price1 <= 4000 && price2 >=  2001 && price2 <= 4000) return "R$ 500";
return "R$ 700";
}

// Preço final
function calculatePrice(price1, price2, tax) {
    const finalPrice1 = price1 + tax;
    const finalPrice2 = price2 + tax;
    return {finalPrice1, finalPrice2};
}
const envio = calculateTax(order1.price, order2.price, envio);

const {finalPrice1, finalPrice2 } = calculatePrice(order1.price, order1.price, envio);

// Resultado
console.log(`O produto ${order1,price} custa ${envio}. Seu custo de envio ${envio}. Portanto, o preço final é de ${finalPrice1}`)
console.log(`O produto ${order2.price} custa ${envio}. Seu custo de envio ${envio}. Portanto, o preço final é de ${finalPrice1}`)
