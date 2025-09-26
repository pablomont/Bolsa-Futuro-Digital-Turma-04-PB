function idadeFilhoM (M,A,B){

let idadeMonica = Number (M)
let idadeA = Number (A)
let idadeB = Number (B)

let X = idadeMonica - (idadeA + idadeB)

let maisVelho = Math.max (idadeA, idadeB, X)

return maisVelho

}

const resultado = idadeFilhoM (52, 21, 9)
console.log (resultado)