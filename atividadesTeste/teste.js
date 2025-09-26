const prompt = require("prompt-sync")();

function convertHoursToMinutes(hours) {
    hours = parseFloat(prompt("Digite a quantidade de horas: "))
    console.log(hours * 60)
}
convertHoursToMinutes(4)