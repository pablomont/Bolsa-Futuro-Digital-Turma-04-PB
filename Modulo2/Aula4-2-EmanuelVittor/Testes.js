var dadosPessoais = {
    nome: 'Emanuel Vittor',
    sobrenome: 'Ferreira Barbosa'
}

console.log (dadosPessoais.nome, dadosPessoais.sobrenome)

var carro = {

    preço: 1500,
    portas: 4,
    marca: 'Audi',

}

console.log ('O preço do carro é: ',carro.preço * 2)

var cachorro = {

    raça: 'Labrador',
    cor: 'Preto',
    idade: '10 Anos',
    viuHomem: true,
    late: function(){
        if(this.viuHomem)
            return 'late'
        else
            return 'não late'
    }

}

let resultado = cachorro.late()
console.log(resultado)