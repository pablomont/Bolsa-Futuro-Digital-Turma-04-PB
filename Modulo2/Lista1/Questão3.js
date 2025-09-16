const prompt = require('prompt-sync')();
function par(num) {
    if (num % 2 == 0)
        return "Par ✌️"
    else
        return "Impar ☝️"
}
let num = prompt("Digite um número: ")
console.log(par(num))
process.exit();