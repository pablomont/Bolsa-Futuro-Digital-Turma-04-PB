const prompt = require("prompt-sync")()

function isEquilibrada(p1,c1,p2,c2){
    p1 = prompt("Digite o p1: ")
    c1 = prompt("Digite o c1: ")
    p2 = prompt("Digite o p2: ")
    c2 = prompt("Digite o c2: ")

    if ( 10 >= (p1 || p2 || c1 ||c2 ) <= 100){
        if ((p1*c1) == (p2*c2)){
            return console.log("Gangorra equilibrada")
        }
        else if ((p1*c1) > (p2*c2)){
            return console.log("Gangorra desequilibrada para a ESQUERDA.")
        }
        else if ((p1*c1) < (p2*c2)){
            return console.log("Gangorra desequilibrada para a DIREITA.")
        }    
    }
    else{
        console.log("Valor não suportado.")
    }
    process.exit()
}

isEquilibrada()