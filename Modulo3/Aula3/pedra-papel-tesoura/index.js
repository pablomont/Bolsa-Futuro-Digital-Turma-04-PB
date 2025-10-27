"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("./styles.css");
var btnPedra = document.getElementById('pedra');
var btnPapel = document.getElementById('papel');
var btnTesoura = document.getElementById('tesoura');
// ----------------------------------------------
// Questão 1:
// Implemente o evento de onclick para os outros botões (papel e tesoura)
// ----------------------------------------------
if (btnPedra) {
    btnPedra.onclick = function () {
        var escolhaComputador = obterEscolhaComputador();
        mostrarResultado('pedra', escolhaComputador);
    };
}
if (btnPapel) {
    btnPapel.onclick = function () {
        var escolhaComputador = obterEscolhaComputador();
        mostrarResultado('papel', escolhaComputador);
    };
}
if (btnTesoura) {
    btnTesoura.onclick = function () {
        var escolhaComputador = obterEscolhaComputador();
        mostrarResultado('tesoura', escolhaComputador);
    };
}
function obterEscolhaComputador() {
    var opcoes = ['pedra', 'papel', 'tesoura'];
    return opcoes[Math.floor(Math.random() * opcoes.length)];
}
function mostrarResultado(escolhaUsuario, escolhaComputador) {
    var opcoes = "Computador: ".concat(escolhaComputador, " - Usu\u00E1rio: ").concat(escolhaUsuario);
    // ----------------------------------------------
    // Questão 2:
    // Termine de implementar a função mostrarResultado
    // ----------------------------------------------
    if (escolhaUsuario === escolhaComputador) {
        alert("\u00C9 um empate! \n".concat(opcoes));
    }
    else if (escolhaUsuario === 'papel') {
        if (escolhaComputador === 'pedra') {
            alert("Voc\u00EA venceu! \n".concat(opcoes));
        }
        else {
            alert("O computador venceu! \n".concat(opcoes));
        }
    }
    else if (escolhaUsuario === 'pedra') {
        if (escolhaComputador === 'papel') {
            alert("O computador venceu! \n".concat(opcoes));
        }
        else {
            alert("Voc\u00EA venceu! \n".concat(opcoes));
        }
    }
    else {
        if (escolhaComputador === 'pedra') {
            alert("O computador venceu! \n".concat(opcoes));
        }
        else {
            alert("Voc\u00EA venceu! \n".concat(opcoes));
        }
    }
}
