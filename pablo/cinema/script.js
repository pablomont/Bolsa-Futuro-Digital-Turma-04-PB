let altura = 1.2
console.log(altura.toFixed())

const texto = "tema-claro.css";
console.log(texto.includes("claro")); // true
console.log(texto.includes("escuro")); // false


// Execute ao carregar a página
document.addEventListener('DOMContentLoaded', carregarTema);

function carregarTema() {

    // 1. Leia o cookie
    // 2. Se tema=escuro, altere para tema-escuro.css

}