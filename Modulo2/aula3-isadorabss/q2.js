const prompt = require('prompt-sync')();

let language = prompt("language: ");
let saudacao
if (language === "English" || language === "english"){
    saudacao = "Hello"
} else if(language === "Spanich" || language === "spanich"){
    saudacao = "Hola"
} else if(language === "French" || language === "french"){
    saudacao = "Bonjour"
} else if(language === "Italian" || language === "italian"){
    saudacao = "Ciao"
} else{
    saudacao = "Hello"
}

console.log(`${saudacao}`)

process.exit();