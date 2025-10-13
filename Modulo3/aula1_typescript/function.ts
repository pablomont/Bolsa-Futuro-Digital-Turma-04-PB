function somar(a: number, b: number): number{
    return a+b;
}
//function nome_função(a: tipo_do_dado, b: tipo_do_dado): tipo do retorno do dado{
//   return é não explícito. }
somar(10,10);
//somar('10', '10'); -> Dar erro porque a passagem de parâmetros é do tipo number e estamos passando do tipo string

const nintendo={
    preco: '2000',
    nome: 'Nintendo'
}; //Criação de um objeto com os atributo do preço

function transformarPreco(produto: {nome:string, preco:string}){
    produto.preco = 'R$' +produto.preco;
    return produto;
}

const produtoNovo = transformarPreco(nintendo);
console.log(produtoNovo);