function somar (a: number, b: number): number{
    return a+b
}

somar(10,6)

const nintendo = {
    preco: '2000',
    nome: 'nintendo'
};

function transformarPreco(produto: {nome: string; preco: string}){
    produto.preco = 'R$' + produto.preco;
    return produto;
}

const produtoNovo = transformarPreco(nintendo);
console.log(produtoNovo)