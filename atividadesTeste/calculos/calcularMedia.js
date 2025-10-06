const prompt = require("prompt-sync") ();

function calcularMedia(nota1, nota2){
    return (nota1+nota2)/2;
}

let nota1Input = prompt("Digite a primeira nota: ");
let nota1 = parseFloat(nota1Input)

let nota2Input = prompt("Digite a segunda nota: ");
let nota2 = parseFloat(nota2Input);

let media = calcularMedia(nota1, nota2);

if (media >= 7){
    console.log("Aprovado com média: " + media);
}
else if (5 < media > 6.9){
    console.log("Recuperação com média: " + media)
}
else{
    console.log("Reprovado com média: " + media)
}