const prompt = require('prompt-sync')();

function isTruthy(valor){
    if (valor){
        return "TRUTHY"
    } else{
        return "FALSY"
    }
}

console.log(isTruthy(0));          // FALSY
console.log(isTruthy(""));         // FALSY
console.log(isTruthy(null));       // FALSY
console.log(isTruthy(undefined));  // FALSY
console.log(isTruthy(NaN));        // FALSY
console.log(isTruthy(false));      // FALSY
console.log(isTruthy("Olá"));      // TRUTHY
console.log(isTruthy(123));        // TRUTHY
console.log(isTruthy([]));         // TRUTHY
console.log(isTruthy({}));         // TRUTHY
process.exit();