const prompt = require("prompt-sync") ();

function calcularMedia(nota1, nota2){
    return (nota1+nota2)/2; //calcula a média de acordo com as notas
}
function calcularAprovacao(media){ //calcula a aprovacao (ou nao) de acordo com a média
    if (media >= 7){
        console.log("Aprovado com média: " + media);
    }
    else if (5 < media < 6.9){
        console.log("Recuperação com média: " + media)
    }
    else {
        console.log("Reprovado com média: " + media)
    }
}

let nota1 = parseFloat(prompt("Digite a primeira nota: "))
let nota2 = parseFloat(prompt("Digite a segunda nota: "))
let media = calcularMedia(nota1, nota2);

calcularAprovacao(media)
