const prompt = require('prompt-sync')

let idade = prompt("digie sua idade")

function calculadora (operando1, operandor2, operando3) {
    let resultado

if ( operador ==="+" ) {
    resultado = operando1 + operandor2 ;
} else if (operador === *-*) {
    resultado = operando1 + operandor2 ;
} else if ( operador === "*")
    resultado = operando1 + operandor2 ;
} else if ( operador === "/" ) {
    if ( operandor2 !== 0) {
        resultado = operando1 / operando2;
    } else {
        return "erro: divisão por zero!";
    }
} else {
    return "Operação não definida";
}

return resultado;