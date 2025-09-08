/*var valor = 1 +2;
var valor2 = valor++ //incrementa + 1
console.log(valor)

var incremento = 5
console.log(incremento++); // 5
console.log(incremento); // 6

var incremento = 5
incremento++
console.log(incremento)

// var nome = "Danilo"
// var sobrenome = "Gomes"

// console.log(nome + " " + sobrenome)

var soma = "100" + 50
console.log(soma)

var sub = "100" - 50
console.log(sub)

var string = "ola"
console.log(isNaN(string))

var string = "1"
console.log(isNaN(string))

var string = "1"
var result = string*2
console.log(result)

var string = "a"
var result = string / 2
console.log(result)

// Imprime nome e sobrenome
// var nome = "Danilo"
// var sobrenome = "Gomes"
// console.log("Seja bem vindo " + nome + " " + sobrenome)
//console.log(`Seja bem vindo ${nome} ${sobrenome}`)

/*const prompt = require(`prompt-sync`)();
let nome = prompt("Informe seu nome: ")
let sobrenome = prompt("Informe seu sobrenome")
console.log(`Seja bem vindo ${nome} ${sobrenome}`) */

// FUNÇÕES
/*const prompt = require(`prompt-sync`)();

var nome = obtemNome()
console.log(nome)

function obtemNome(){
   return prompt("Infome o seu nome")

}*/

/*var lado = 4
var area = calculaArea(lado)
console.log(area)

function calculaArea(){
    return lado * lado
}*/

const prompt = require(`prompt-sync`)();
var peso = prompt("Infome o seu peso: ")
var altura = prompt("Infome a sua altura: ")
console.log(imc(peso, altura))
function imc(peso, altura){
    const imc =peso / (altura ** 2);
    return imc;
}no