const prompt = require('prompt-sync')();

let horas = prompt("hours = ");
let horaNum = parseFloat(horas);
let minutos;
minutos = horaNum * 60;
console.log(`${horaNum} horas equivale a ${minutos} minutos`)

process.exit();