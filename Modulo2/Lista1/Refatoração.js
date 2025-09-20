const prompt = require('prompt-sync')();



function verificaSituacao(mediaFinal,valorrec,valormedia) {
    
    if (mediaFinal >= valormedia) {
        return "Aprovado 😃";
    } else if (mediaFinal >= valorrec && mediaFinal < valormedia) {
        return "Recuperação 🫤";
    } else {
        return "Reprovado 😭 ";
    }
}


function valor_invalido(nota) {
    if (isNaN(nota) || nota < 0 || nota > 10) {
        console.log("Entrada Invalida. Digite um número de 0 a 10");
        process.exit();
    }
}
function modo_exibicao(exibicao, mediaFinal, valorrec, valormedia){
    
    switch((parseInt(exibicao))){
        case (1):
            return {
                situação:verificaSituacao(mediaFinal, valorrec, valormedia)}
        case (2):
            return {
                situação:verificaSituacao(mediaFinal, valorrec, valormedia),
                media:mediaFinal
            }

             
        case (3):
            return {
                Conceito:verificarConceito(mediaFinal),
                media:mediaFinal
            }
         default:
            return "Modo de exibição inválido.";            
    }
}
function verificarConceito (mediaFinal){
    if (mediaFinal>=9 && mediaFinal<=10)
        return "A"
    else if (mediaFinal>=7 && mediaFinal<9)
        return "B"
    else if (mediaFinal>=5 && mediaFinal<7)
        return "C"
    else if (mediaFinal>=3 && mediaFinal<5)
        return "D"
    else if (mediaFinal>=0 && mediaFinal<3)
        return "E"
}

console.log("--- SISTEMA DE AVALIAÇÃO ---")
let valormedia = parseFloat(prompt("Digite a média mínima para aprovação: "));
let valorrec = parseFloat(prompt("Digite a média mínima para recuperação: "));
console.log("--- MODO DE EXIBIÇÃO ---")
console.log("1 - simples")
console.log("2 - detalhado")
console.log("3 - conceito")
let exibicao = prompt(" Escolha o modo de exibição (1, 2 ou 3): ")

for (let i = 0; i < 3; i++) {
    console.log(`\nAluno ${i + 1}`);

    let nota1 = parseFloat(prompt("Informe nota 1: "));
    valor_invalido(nota1);

    let nota2 = parseFloat(prompt("Informe nota 2: "));
    valor_invalido(nota2);

    
    let mediaFinal = (nota1 + nota2) / 2;
   console.log(modo_exibicao(exibicao, mediaFinal, valorrec, valormedia));

}

process.exit();
