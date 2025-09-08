const prompt = require('prompt-sync')();

let nota1=prompt("Informe a primeira nota: ")
let nota2=prompt("Informe a segunda nota: ")
let nota3= prompt("Informe a terceira nota: ")

console.log(media(nota1, nota2, nota3))

function media(nota1, nota2, nota3){
    media = (nota1+nota2+nota3)/3;
    
    if (media>=7){
        return "Aprovado."
    }else if(media<=6.99 && media>=5){
        return "Recuperação."
    }else{
        return "Reprovado."
    }
}