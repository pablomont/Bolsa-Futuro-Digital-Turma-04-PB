const prompt = require('prompt-sync')();

//const fs = require("fs");//
//const input = fs.readFileSync(0, "utf8");//
function winner(a, b, c) {

        
    if (a != b && a != c)
        return "A"
    if (a != b && b != c)
        return "B"
    if (c != b && a != c)
        return "C"
    return '*'
}
//const [a, b, c] = input.trim().split(" ").map(Number)//
let a = parseFloat(prompt("Type A: "))
let b = parseFloat(prompt("Type B: "))
let c = parseFloat(prompt("Type C: "))
console.log(winner(a, b, c))
process.exit();