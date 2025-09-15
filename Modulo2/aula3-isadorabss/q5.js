const prompt = require('prompt-sync')();

function fliper(p, r) {
    let saida;
    if(p === 1 && r === 1){
        saida = "A"
    } else if(p === 1 && r === 0){
        saida = "B"
    } else{
        saida = "C"
    }
    return saida;
}

let p = prompt("");
let P = parseFloat(p);
let r = prompt("");
let R = parseFloat(r);
console.log(fliper(P, R))

process.exit();