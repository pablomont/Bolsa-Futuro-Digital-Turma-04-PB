const prompt = require('prompt-sync')();

const NotaAprovado = 7
const NotaRecuperacao = 5

function InputNotas(){
    while(true){
        n = parseFloat(prompt("Digite a primeira nota:"))
        
        if (n>=0 && n<=10){
            break
        } else{
            console.log("Nota inválida. Tente novamente")
        }
    }
    return n
}

function Conceitos(med){
    if(med >= 9){
        return "A"
    } else if (med >= 7){
        return "B"
    } else if (med >= 5){
        return "C"
    } else if (med >= 3){
        return "D"
    } else {
        return "E"
    }
}

function PrintSituacao(med,sit){
    console.log("=== MODO DE EXIBIÇÃO ===")
    console.log("1 - Simples\n2 - Detalhado\n3 - Conceito")

    var opc = 0
    while(opc != 1 && opc != 2 && opc != 3){
        opc = prompt("Escolha o modo de exibição (1,2 ou 3):")
        if(opc != "1" && opc != "2" && opc != "3"){
            console.log("ERRO: Digite apenas 1,2 ou 3")
        }
    }
    switch(opc){
        case "1":
            console.log("Situação:", sit)
            break
        case "2":
            console.log(`Média: ${med} - Situação: ${sit}`)
            break
        case "3":
            console.log(`Média: ${med} - Conceito: ${Conceitos(med)}`)
    }
}

function VerificaSituacao(NotaApro, NotaRec){
    n1 = InputNotas()
    n2 = InputNotas()
    med = (n1+n2)/2

    var sit 
    if(med >=NotaApro){
        sit = "APROVADO"
    } else if (med >=NotaRec){
        sit = "RECUPERAÇÃO"
    } else{
        sit = "REPROVADO"
    }

   PrintSituacao(med, sit)
}

function Verifica3Alunos(){
    console.log("=== Aluno 1 ===")
    VerificaSituacao(NotaAprovado, NotaRecuperacao)
    console.log("=== Aluno 2 ===")
    VerificaSituacao(NotaAprovado, NotaRecuperacao)
    console.log("=== Aluno 3 ===")
    VerificaSituacao(NotaAprovado, NotaRecuperacao)
}

Verifica3Alunos()