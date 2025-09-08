/*Aula sobre operadores unários do JS*/
/*var valor = 1+2;
var valor2 = valor++;/*Incrementa mais 1
console.log(valor2);*/
/*
var incremento =5;
console.log(incremento++);//5
console.log(incremento);//6

var decremento=4;
console.log(decremento-=1);*/
//Concatenação de strings. 
//var nome ="julia"
//var sobrenome="arruda"
//console.log(nome+sobrenome);

//Operador mais não converte uma string em número, ele apenas faz a concatenação entre 
//os dois. 
/*
var soma = '100'+50;
console.log(soma)

var sub = '100'-50;//mesmo comportamento para -,*,/
var divisao="comprei 10"/2;

console.log(divisao)//entra no NaN pois é uma string e não um number.
console.log(sub)

var string="1"
console.log(isNaN(string));

console.log("Interpolação de Strings.")
let nome= prompt("Informe o nome: ")
let sobrenome=prompt("Informe o sobrenome: ")
console.log(`O nome é: ${nome} ${sobrenome}`)


console.log("Funções: Bloco de código que pode ser reutilizado. ")
function pi(){
    return 3.14;
}
var total= 5*pi();
console.log(total);
const prompt=require('prompt-sync')();
var nome=ObterNome()
console.log(nome)

function ObterNome(){
    return prompt("Informe o seu nome: ")
}
console.log("Funções que recebem parâmetros.")*/
const prompt=require('prompt-sync')();

function imc(altura, peso){
    const imc = peso/(altura**2);
    return imc;
}

let peso = prompt("Qual o seu peso: ")
let altura= prompt("Qual a sua altura: ");

console.log("O resultado do imc foi: ", imc(altura, peso));
