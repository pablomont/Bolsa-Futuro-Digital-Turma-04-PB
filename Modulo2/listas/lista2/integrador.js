let products = [
  { name: 'Macbook', price: 1300, quantity: 40, colors: ['silver', 'black', 'white'] },
  { name: 'Iphone', price: 1000, quantity: 50, colors: ['silver', 'red', 'white'] },
  { name: 'Pendrive', price: 10, quantity: 10, colors: [] },
  { name: 'Headset', price: 50, quantity: 0, colors: ['black'] },
  { name: 'Mouse', price: 20, quantity: 5, colors: ['white', 'black', 'blue'] },
  { name: 'Tablet', price: 500, quantity: 20, colors: ['white', 'black'] },
  { name: 'USB adaptor', price: 5, quantity: 0, colors: [] },
  { name: 'Keyboard', price: 30, quantity: 35, colors: ['white'] },
  { name: 'Gamepad', price: 30, quantity: 25, colors: ['black', 'silver'] },
  { name: 'Monitor', price: 200, quantity: 3, colors: [] },
];

// adiciona id 
function addIds(products) {
  return products.map((product, index) => ({ id: index + 1, ...product }));
}

products = addIds(products);

// imprime nome
function printProductNames(products) {
  products.forEach(product => console.log(product.name));
}

// imprime produto com id 3
function printProductById(products, id) {
  const product = products.find(product => product.id === id);
  console.log(product);
}

// imprime produtos que possuem cor "black"
function printProductsInBlack(products) {
  const filtered = products.filter(product => product.colors.includes('black'));
  console.log(filtered);
}

// imprime produtos sem cor
function printProductsWithoutColors(products) {
  const filtered = products.filter(product => product.colors.length === 0);
  console.log(filtered);
}

// adiciona novo produto
function addProduct(products, newProduct) {
  const nextId = products.length + 1;
  products.push({ id: nextId, ...newProduct });
}

// exclui produtos fora de stock
function removeOutOfStock(products) {
  return products.filter(product => product.quantity > 0);
}

// soma do stock
function totalStock(products) {
  const total = products.reduce((sum, product) => sum + product.quantity, 0);
  console.log("Total em estoque:", total);
}

// produtos acima de certo preço
function printProductsAbovePrice(products, minPrice) {
  const filtered = products.filter(product => product.price > minPrice);
  console.log(filtered);
}

// Testes 
console.log(" Nomes dos produtos ");
printProductNames(products);

console.log("\n Produto com id 3 ");
printProductById(products, 3);

console.log("\n Produtos com cor preta");
printProductsInBlack(products);

console.log("\n Produtos sem cor");
printProductsWithoutColors(products);

console.log("\n Adicionando novo produto");
addProduct(products, { name: 'Smartwatch', price: 800, quantity: 15, colors: ['black', 'blue'] });
console.log(products);

console.log("\n Removendo fora de estoque ");
products = removeOutOfStock(products);
console.log(products);

console.log("\n Total do estoque ");
totalStock(products);

console.log("\n Produtos acima de 500 ");
printProductsAbovePrice(products, 500);
