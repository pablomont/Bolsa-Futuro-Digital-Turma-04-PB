var dados = {
    nome: "Suelle",
    sobrenome: "Maciel",

    mostrarDados: function(){
        return this.nome + " " + this.sobrenome
    }
}

console.log(dados.mostrarDados())

var carro = {
    preco: 10000,
    portas: 4,
    marca: "Audi"
}

console.log("Valor antes da alteração:", carro.preco)
carro.preco = 30000
console.log("Valor depois da alteração:", carro.preco)

var cachorro = {
    raca: "labrador",
    cor: "preto",
    idade: 10,

    viuHomem : true,
    late: function latir(){
        if (this.viuHomem){
            return "auau"
        }
        else{
            return "não late"
        }
    }
}

console.log(cachorro.late())