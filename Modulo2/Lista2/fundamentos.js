const prompt = require('prompt-sync')();
function calculatePrice(order) {
  const { productName, price } = order;
  let shippingCost;

  if (price >= 1 && price <= 2000) {
    shippingCost = 300;
  } else if (price >= 2001 && price <= 4000) {
    shippingCost = 500;
  } else if (price > 4000) {
    shippingCost = 700;
  } else {
    console.log("Preço inválido.");
    return;
  }

  const finalPrice = price + shippingCost;

  console.log(
    `O produto ${productName} custa $${price}. Seu custo de envio é de $${shippingCost}. Portanto, o preço final é de $${finalPrice}.`
  );
}

const order1 = {
  productName: 'Macbook',
  price: 6500,
};

const order2 = {
  productName: 'Playstation 5',
  price: 4500,
};

calculatePrice(order1);
calculatePrice(order2);
