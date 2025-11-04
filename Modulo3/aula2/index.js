//TypeScript adiciona tipos dos dados para o JavaScript, não é uma linguagem que roda diretamente no navegador. 
//Função escrita no JavaScript:
/*function add(a,b){
    return a+b; //Esse retorno pode não ser necessariamente uma soma e sim uma concatenação dos dados.
}*/
function add(a, b) {
    return a + b;
}
function double(valor) {
    return valor * 2;
}
console.log("O resultado da soma vai ser: ", add(2, 88));
console.log("O dobro vai ser: ", double(4.5));
