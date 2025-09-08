/*var valor = 1 + 2;
var valor2 = valor++ //incrementa + 1
console.log(valor)

var incremento = 5
console.log(incremento++); // 5
console.log(incremento); // 6

var incremento = 5
incremento += 4 // incremento = incremento + 4
console.log(incremento)

var incremento = 5
incremento++
console.log(incremento)

//var nome = "pablo"
//var sobrenome = "monteiro"

//console.log(nome +  " " + sobrenome)

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
console.log(result) */

//var string = "a"
//var result = string / 2
//console.log(result)

// imprime nome e sobrenome
//var nome = "pablo"
//var sobrenome = " monteiro"
// console.log("Seja bem vindo "+ nome + " " +sobrenome)
//console.log(`Seja bem vindo ${nome} ${sobrenome}`)

/*const prompt = require('prompt-sync') ();
let nome = prompt("informe o nome: ")
let sobrenome = prompt("informe o sobrenome: ")
console.log(`Seu nome completo é: ${nome} ${sobrenome}`) */

// FUNÇÕES
/*const prompt = require('prompt-sync') ();

function pi(){
    return 3.14;
}
var total = 5 * pi() // 15.7 parêntes () executam uma função
console.log(total); */

/* function pi (){
    console.log(3.14)
}

pi(); */
/*
const prompt = require('prompt-sync') ();
var nome = obtemNome()
console.log(nome)

function obtemNome(){
    return prompt("Informe o seu nome: ")
} */

/*
var lado = 4
var area = calculaArea(lado)
console.log(area)

function calculaArea(lado){
    return lado * lado;
} */

const prompt = require('prompt-sync') ();
var peso = prompt("informe seu peso: ")
var altura = prompt("informe sua altura: ")
console.log(imc(peso, altura))
function imc(peso, altura) {
    const imc = peso / (altura ** 2);
    return imc;
}
