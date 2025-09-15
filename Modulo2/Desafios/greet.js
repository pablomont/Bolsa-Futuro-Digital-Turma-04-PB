const prompt = require('prompt-sync')();

function greetUser(language) {
    if (language === "English")
        return "Hello"

    if (language === "Spanish")
        return "Hola"

    if (language === "French")
        return "Bonjour"

    if (language === "Italian")
        return "Ciao"

}
let language = prompt("Type the language: ")
console.log(greetUser(language))