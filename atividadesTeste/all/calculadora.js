const prompt = require("prompt-sync") ();

console.log("--- CALCULADORA ---")
let numero1 = parseFloat(prompt("Digite o primeiro número:"))
let numero2 = parseFloat(prompt("Digite o segundo número:"))
let operador = prompt("Digite o operador:")

switch (operador){
    case "+":
        console.log(numero1 + numero2)
        break
    case "-":
        console.log(numero1 - numero2)
        break
    case "*":
        console.log(numero1 * numero2)
        break
    case "/":
        console.log(numero1 / numero2)
        break
    default:
        console.log("Operação não reconhecida.")
}