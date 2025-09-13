const prompt = require('prompt-sync')();
function tipo(dado) {
    return typeof dado
}
console.log(tipo("texto"));
console.log(tipo(123));
console.log(tipo(true));
console.log(tipo(undefined));
console.log(tipo(null));


process.exit();