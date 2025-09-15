// Lendo a entrada do exercício
const fs = require("fs");
const input = fs.readFileSync(0, "utf8");

let A = parseInt(input.split(" ")[0])
let B = parseInt(input.split(" ")[1])

if (A===1 && B===1)
    console.log("A")
if (A===1 && B===0)
    console.log("B")
if (A===0 && B===0)
    console.log("C")
if (A===0 && B===1)
    console.log("C")