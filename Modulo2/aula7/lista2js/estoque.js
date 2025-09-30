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

// id p/ cada produto começando em 1
function addProdutoId (products) {
    products.forEach((produto, index) => {
        produto.id = index + 1;
    });
}
addProdutoId(products);
//console.log(products);
//products.forEach(produto => console.log(produto));

// nome de cada produto
function imprimirProdNome(products){
    products.forEach(produto => {
        console.log(produto.name);
    });
}
imprimirProdNome(products);

// imprimir produto c/ id 3
function imprimirProdPorId(products, id){
    const produto = products.find(produto => produto.id === id);
    console.log(produto);
}
imprimirProdPorId(products, 3);

// Imprimir produtos que tem cor 'black'
function imprimirProdComCorPreto(products) {
  const prodPreto = products.filter(produto => produto.colors.includes('black'));
  console.log(prodPreto);
}
imprimirProdComCorPreto(products);

// Imprimir produtos que não possuem nenhuma cor
function printProdSemCor(products) {
  const prodSemCor = products.filter(produto => produto.colors.length === 0);
  console.log(prodSemCor);
}
printProdSemCor(products);

//Adicionar novo produto ao array
function addNovoProduto(products) {
  const novoProduto = {
    name: 'Smartwatch',
    price: 150,
    quantity: 15,
    colors: ['black', 'gray'],
    id: products.length + 1
  };
  products.push(novoProduto);
}
addNovoProduto(products);
//console.log(products);

// Excluir produtos fora de estoque (quantity === 0)
function excluirProdForaDeEstoque(products) {
  return products.filter(produto => produto.quantity > 0);
}

products = excluirProdForaDeEstoque(products);// lembrar: substitui o array c/ apenas produtos em estoque
// console.log(products);

//Imprimir soma total do estoque
function printTotalEstoque(products) {
  const total = products.reduce((sum, produto) => sum + produto.quantity, 0);
  console.log("Total em estoque:", total);
}
printTotalEstoque(products);

// Imprimir produtos c/ preço superior a um valor específico
function printProdAcimaPreco(products, minPreco) {
  const filtro = products.filter(produto => produto.price > minPreco);
  console.log(filtro);
}
printProdAcimaPreco(products, 500); // produto acima de 500

