// OBS: istalar Biblioteca "npm install prompt-sync"
const prompt = require('prompt-sync')();

// Verficação:
function infoType(info) {
    return typeof info;
}

// Teste alterando o valor:
console.log(infoType(10));  //number
console.log(infoType("olá")); //string
console.log(infoType(true));  //bolean
console.log(infoType({}));    //object