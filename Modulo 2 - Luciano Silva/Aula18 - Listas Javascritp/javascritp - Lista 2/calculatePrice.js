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
    const taxa1 = price1 + tax;
    const taxa2 = price2 + tax;
    return {finalPrice1, finalPrice2};
}

let {finalprice1, finalprice2 } = calculatePrice(price1, price2);

// Resultado
console.log(`O produto ${order1} custa ${price1}. Seu custo de envio ${tax}. Portanto, o preço final é de ${finalPrice1}`)
console.log(`O produto ${order1} custa ${price2}. Seu custo de envio ${tax}. Portanto, o preço final é de ${finalPrice1}`)
