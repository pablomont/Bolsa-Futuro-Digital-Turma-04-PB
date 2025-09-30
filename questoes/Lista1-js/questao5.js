const prompt = require("prompt-sync") ();

function calcularMedia(nota1, nota2){
    nota1 = parseFloat(prompt("Digite a primeira nota: "))
    nota2 = parseFloat(prompt("Digite a segunda nota: "))

    media = (nota1+nota2) / 2

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

calcularMedia()
calcularMedia()
calcularMedia()