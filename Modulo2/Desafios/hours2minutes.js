const prompt = require('prompt-sync')();
function convertHoursToMinutes(hours) {
    minutes=hours*60
    return minutes
}
let hours = parseFloat(prompt("Type the hour to convert: "))


console.log(convertHoursToMinutes(hours))