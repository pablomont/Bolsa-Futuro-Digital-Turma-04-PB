let produtos = [
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

function adicionarIds() {
  produtos = produtos.map((produto, index) => ({ id: index + 1, ...produto }));
}
adicionarIds();

function imprimirNomesProdutos() {
  produtos.forEach(produto => console.log(produto.name));
}

function imprimirProdutoPorId(id) {
  const produto = produtos.find(p => p.id === id);
  console.log(produto);
}

function imprimirProdutosPretos() {
  const pretos = produtos.filter(p => p.colors.includes('black'));
  console.log(pretos);
}

function imprimirProdutosSemCor() {
  const semCor = produtos.filter(p => p.colors.length === 0);
  console.log(semCor);
}

function adicionarProduto(novoProduto) {
  const proximoId = produtos.length + 1;
  produtos.push({ id: proximoId, ...novoProduto });
}

function removerSemEstoque() {
  produtos = produtos.filter(p => p.quantity > 0);
}

function imprimirTotalEstoque() {
  const total = produtos.reduce((soma, p) => soma + p.quantity, 0);
  console.log(`Total de produtos em estoque: ${total}`);
}

function imprimirProdutosCaros(valorMinimo) {
  const caros = produtos.filter(p => p.price > valorMinimo);
  console.log(caros);
}

imprimirNomesProdutos();
imprimirProdutoPorId(3);
imprimirProdutosPretos();
imprimirProdutosSemCor();
adicionarProduto({ name: 'Smartwatch', price: 250, quantity: 15, colors: ['black', 'white'] });
removerSemEstoque();
imprimirTotalEstoque();
imprimirProdutosCaros(500);
