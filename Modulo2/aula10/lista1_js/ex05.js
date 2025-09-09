const prompt = require('prompt-sync')();

var nota1=prompt("Informe a primeira nota: ")
var nota2=prompt("Informe a segunda nota: ")
var nota3= prompt("Informe a terceira nota: ")
var numero1 = Number(nota1)
var numero2 = Number(nota2)
var numero3 = Number(nota3)

console.log(media(numero1, numero2, numero3))

function media(nota1, nota2, nota3){
    media = (nota1+nota2+nota3)/3;
    
    if (media>=7){
        return "Aprovado"
    }else if(media<=6.99 && media>=5){
        return "Recuperação"
    }else{
        return "Reprovado"
    }
}
