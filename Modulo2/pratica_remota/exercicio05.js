const prompt = require('prompt-sync')();

const salarioMinimoBase = 1293.20;
console.log(`O salário mínimo base é de R$ ${salarioMinimoBase.toFixed(2)}.`);

let salarioUsuario = parseFloat(prompt("Digite o valor do salário do usuário: R$ "));

if (isNaN(salarioUsuario) || salarioUsuario < 0) {
    console.log("Por favor, digite um valor de salário válido e positivo.");
} else {
    
    let quantidadeSalariosMinimos = salarioUsuario / salarioMinimoBase;

    console.log(`Com um salário de R$ ${salarioUsuario.toFixed(2)}, o usuário ganha aproximadamente ${quantidadeSalariosMinimos.toFixed(2)} salários mínimos.`);
}