//-------------------------------------------------------(ATIVIDADE 4)-----------------------------------------------------------------------------------


// importando a biblioteca prompt-sync------------------------------------------------------
const prompt = require('prompt-sync')();

//prompt para solicitar dados ao usuário 
const peso = (prompt("digite o peso em kg:"));
const altura = (prompt("digite altura em metros:"));


function imc(peso, altura) {
  let imc = peso / (altura * altura);
  return imc;

}
// Variável para armazenar a classificação do IMC-------------------------------------------
var resultado = imc(peso, altura);
var classificacao; 

// Estrutura condicional para classificar o IMC---------------------------------------------
if (resultado < 18.5) {
  classificacao = "Abaixo do peso";
} else if (resultado >= 18.5 && resultado <= 24.9) {
  classificacao = "Peso normal";
} else if (resultado >= 25.0 && resultado <= 29.9) {
  classificacao = "Sobrepeso";
} else if (resultado >= 30.0 && resultado <= 34.9) {
  classificacao = "Obesidade grau 1";
} else if (resultado >= 35.0 && resultado <= 39.9) {
  classificacao = "Obesidade grau 2";
} else {
  classificacao = "Obesidade grau 3 (mórbida)";
}
// toFixed(2) para mostrar apenas 2 casas decimais---------------------------------------------
console.log(`Seu IMC é: ${resultado.toFixed(2)}`); 
// $ pra interpolar----------------------------------------------------------------------------
console.log(`Classificação: ${classificacao}`);