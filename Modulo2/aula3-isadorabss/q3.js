const prompt = require('prompt-sync')();
function zeroUm(a,b,c){
    let vencedor;
    if ((a==='0' && b==='0' && c==='0') || (a==='1' && b==='1' && c==='1')){
        vencedor = "*";
    } else if ((a==='0' && b==='0')||(a==='1' && b==='1')){
        vencedor = "C";
    } else if ((a==='0' && c==='0')||(a==='1' && c==='1')){
        vencedor = "B";
    } else if ((b==='0' && c==='0')||(b==='1' && c==='1')){
        vencedor = "A";
    }
    return vencedor;
}
let a = prompt("");
let b = prompt("");
let c = prompt("");
console.log(zeroUm(a,b,c));

process.exit();