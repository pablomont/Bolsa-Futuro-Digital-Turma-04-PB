
const prompt = require("prompt-sync")();

function convertHoursToMinutes(hours) {
    return hours * 60;
}

const hoursEntrada = prompt("Digite a quantidade de horas: ");
const hours = Number(hoursEntrada);

if (isNaN(hours)) {
    console.log("Por favor, insira um número válido.");
} else {
    const minutos = convertHoursToMinutes(hours);
    console.log(`${minutos} minutos.`);
}