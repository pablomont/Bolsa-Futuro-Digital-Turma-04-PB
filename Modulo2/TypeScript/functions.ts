function somar(a: number, b:number){
    return a+b
}

somar(1,1)

const nitendo = {
    preco: '2000',
    nome: 'Nitendo'
};

function transforomarPreco(produto: {nome:string; preco:string}) {
    produto.preco = 'R$' + produto.preco;
    return produto;
}

const produtoNovo = transforomarPreco(nitendo)
console.log(produtoNovo)