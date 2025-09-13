const leia = require("prompt-sync")();
const readValues = createReader();

function createReader() {
    let i = 1;
    let j = 1;

    return function readValues() {
        let p = parseFloat(leia(`Informe o P${i++}: `));
        if (10 <= p <= 100){
            console.log(`Valor ${p} não suportado.`)
            process.exit()
        }
        let c = parseFloat(leia(`Informe o C${j++}: `));
        if (10 <= p <= 100){
            console.log(`Valor ${c} não suportado.`)
            process.exit()
        }

        if (i > 2 || j > 2) {
            i = j = 1;
        }

        return { p, c };
    };
}

function calculoGangorra(p, c) {
    return c * p;
}

function runGangorra() {
    let lado1 = readValues();
    let lado2 = readValues();

    let valueLado1 = calculoGangorra(lado1.p, lado1.c);
    let valueLado2 = calculoGangorra(lado2.p, lado2.c);

    if (valueLado1 === valueLado2) {
        console.log("Gangorra equilibrada");
    } else if (valueLado1 > valueLado2) {
        console.log("Gangorra desequilibrada para a ESQUERDA");
    } else {
        console.log("Gangorra desequilibrada para a DIREITA");
    }
}

runGangorra();