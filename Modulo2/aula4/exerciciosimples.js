var dadosPessoais = {
    nome: 'Lethycia',
    sobrenome: 'Zenaide',
}

dadosPessoais.mostrarNomeCompleto = function() {
    return this.nome + " " + this.sobrenome;
}

console.log(dadosPessoais.mostrarNomeCompleto()); 

var carro = {
    preco: 1000,
    portas: 4,
    marca: 'Audi',
}

carro.modificacaoNoPreco = function() {
    this.preco = 3000;
    return this.preco;
}

console.log(carro.modificacaoNoPreco()); 

let cachorro = {
    raca: 'labrador',
    idade: '10',
    cor: 'preto',
    latirAoVer: function(alvo) {
        if (alvo === 'homem') {
            return 'Au au';
        } else {
            return 'Silêncio';
        }
    }
}

console.log(cachorro.latirAoVer('homem')); 
console.log(cachorro.latirAoVer('gato')); 
