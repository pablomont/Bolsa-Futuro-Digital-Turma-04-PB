const prompt = require('prompt-sync')();
function isTruthy(valor) {
    if (valor)
        return "truthy"
    else
        return "falsy"
}

console.log(isTruthy(undefined));
console.log(isTruthy(NaN));
console.log(isTruthy(true));
console.log(isTruthy(1));   
process.exit();