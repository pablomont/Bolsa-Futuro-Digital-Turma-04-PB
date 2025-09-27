
const prompt = require('prompt-sync')()

let nota1 = parseFloat(prompt('Informe sua primeira nota: '));

if(isNaN(nota1) || nota1 <= 0 || nota1 > 10){
    console.log('Valor inválido.');
    process.exit();
}

let nota2 = parseFloat(prompt('Informe sua segunda nota: '));

if(isNaN(nota2) || nota2 <= 0 || nota2 > 10){
    console.log('Valor inválido.');
    process.exit();
}

let media  = (nota1 + nota2) / 2;

console.log('\nA média é ' + media + "\n");

if(media >= 7){
    
    console.log("Aprovado por média!")
}

else if(media >= 5 && media <= 6.9){

    console.log("Recuperação.")
}

else{

    console.log("Reprovado.")
}

