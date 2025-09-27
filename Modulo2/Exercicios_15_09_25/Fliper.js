
// Obs --> Minha lógica foram só os if/else. Esse início foi do próprio sistema.

const fs = require("fs");
const input = fs.readFileSync(0, "utf8");

let P = parseInt(input.split(" ")[0])
let R = parseInt(input.split(" ")[1])

if (P === 1 && R === 0) {
    console.log("B");
} else if (P === 1 && R === 1) {
    console.log("A");
} else if (P === 0 && R === 1) {
    console.log("C");
} else if (P === 0 && R === 0) {
    console.log("C");
} else if (P > 1 || R > 1) {
    console.log("ERRO PORTA INCORRETA");
}