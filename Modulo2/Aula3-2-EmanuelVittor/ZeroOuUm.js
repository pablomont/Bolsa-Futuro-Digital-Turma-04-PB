const fs = require('fs');
const input = fs.readFileSync(0, "utf8").match(/\S/g);
const [a, b, c] = input

function zeroOuUm(a, b, c){
    if (a === b && a === c) {
        console.log; '*'
    }
    else if (a != b && c){
        console.log; 'A'
    }
    else if (b != a && c){
        console.log; 'B'
    }
    else if (c != b && a){
        console.log; 'C'
    }

}

zeroOuUm(a, b, c)