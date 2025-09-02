
const prompt = require('prompt-sync')()

let nota1 = parseFloat(prompt('Informe sua primeira nota: '));
let nota2 = parseFloat(prompt('Informe sua segunda nota: '));

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