const prompt = require('prompt-sync')();

function greetUser(language) {
    if (language==="French"){
        return console.log("Bounjour")
    }else if (language==="English"){
        return console.log("Hello")
    }else if(language=="Italian"){
        return console.log("Cião")
    }else if (language==="Spanish"){
        return console.log("Hola")
    }else{
        return console.log("Hello")
    }
}

let language= prompt("Informe um idioma: ");

greetUser(language);