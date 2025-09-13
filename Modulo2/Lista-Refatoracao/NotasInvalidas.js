const prompt = require('prompt-sync')();

n1 = 0
n2 = 0
NotaApro = 7
NotaRec = 5
m = 0

function InputNotas(){
    while(true){
        n1 = parseFloat(prompt("Digite a primeira nota:"))
        
        if (n1>=0 && n1<=10){
            break
        } else{
            console.log("Nota inválida. Tente novamente")
        }
    }
    while(true){
        n2 = parseFloat(prompt("Digite a segunda nota:"))
        
        if (n2>=0 && n2<=10){
            break
        } else{
            console.log("Nota inválida. Tente novamente um nota de 0 a 10.")
        }
    }
    return (n1+n2)/2
}

function VerificaSituacao(med,NotaApro, NotaRec){
)

    var sit
   if(med >=NotaApro){
    sit = "APROVADO"
   } else if (med >=NotaRec){
    sit = "RECUPERAÇÃO"
   } else{
    sit = "REPROVADO"
   }

   console.log(n1)
   console.log(`Média: ${med} - Situação: ${sit}`)
}

med = InputNotas()
VerificaSituacao(med,NotaApro, NotaRec)