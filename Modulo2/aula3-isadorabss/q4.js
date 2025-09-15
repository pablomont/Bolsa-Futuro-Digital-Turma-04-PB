const prompt = require('prompt-sync')();

function bonde(a, m) {
    let soma;
    let resposta;
    soma = a + m;
    if (soma <= 50){
        resposta = "S";
    } else{
        resposta = "N";
    }
    return resposta;    
}

let a = prompt("");
let A = parseFloat(a);
let m = prompt("");
let M = parseFloat(m);
console.log(bonde(A, M))
process.exit();