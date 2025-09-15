const prompt = require("prompt-sync")();

// validar o valor
function validar(valor) {
    if (isNaN(valor) || valor < 10 || valor > 100) {
        console.log(`Valor {${valor}} não suportado.`);
        process.exit();
    }
}

const P1 = parseFloat(prompt("Informe o P1: "));
validar(P1);

const C1 = parseFloat(prompt("Informe o C1: "));
validar(C1);

const P2 = parseFloat(prompt("Informe o P2: "));
validar(P2);

const C2 = parseFloat(prompt("Informe o C2: "));
validar(C2);


const ladoEsquerdo = P1 * C1;
const ladoDireito = P2 * C2;

if(ladoEsquerdo === ladoDireito) {
    console.log("Gangorra equilibrada");
} else if (ladoEsquerdo > ladoDireito){
    console.log("Gangorra desequilibrada para a ESQUERDA");
} else {
    console.log("Gangorra desequilibrada para a DIREITA");
}
