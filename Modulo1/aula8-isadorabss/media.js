const prompt = require('prompt-sync')();

let nota1 = prompt("Digite nota 01: ");
let nota1Num = parseFloat(nota1);

let nota2 = prompt("Digite nota 02: ");
let nota2Num = parseFloat(nota2);

let media = ((nota1Num + nota2Num)/2);

if (media >= 7){
    console.log("Media: ",media, "- Aprovado!");
} else if(media < 5){
    console.log("Media: ",media, "- Reprovado!");
} else{
    console.log("Media: ",media, "- Recuperação!");
}

process.exit();