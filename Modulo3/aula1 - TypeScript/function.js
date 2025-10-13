function somar(a, b) {
    return a + b;
}
somar(10, 10);
var nintendo = {
    nome: "NES",
    preco: '2000',
};
function transformarPreco(produto) {
    produto.preco = 'R$ ' + produto.preco;
    return produto;
}
var produtoNovo = transformarPreco(nintendo);
console.log(produtoNovo);
