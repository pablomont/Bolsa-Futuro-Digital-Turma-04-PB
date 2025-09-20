const prompt = require("prompt-sync")();

function greetUser(language) {
    if (language === "English") {
        return "Hello";
    } else if (language === "Spanish") {
        return "Hola";
    } else if (language === "French") {
        return "Bonjour";
    } else if (language === "Italian") {
        return "Ciao";
    } else {
        return "Hello";
    }
}

const language = prompt("Digite o idioma: ");
console.log(greetUser(language)); 