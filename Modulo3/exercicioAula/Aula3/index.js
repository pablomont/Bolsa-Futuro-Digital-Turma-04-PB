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
    var _a;
    var opcoes = ['pedra', 'papel', 'tesoura'];
    return (_a = opcoes[Math.floor(Math.random() * opcoes.length)]) !== null && _a !== void 0 ? _a : 'pedra';
}
function mostrarResultado(escolhaUsuario, escolhaComputador) {
    var opcoes = "Computador: ".concat(escolhaComputador, " - Usu\u00E1rio: ").concat(escolhaUsuario);
    if (escolhaUsuario === escolhaComputador) {
        alert("\u00C9 um empate! \n".concat(opcoes));
        return;
    }
    var venceu = (escolhaUsuario === 'pedra' && escolhaComputador === 'tesoura') ||
        (escolhaUsuario === 'papel' && escolhaComputador === 'pedra') ||
        (escolhaUsuario === 'tesoura' && escolhaComputador === 'papel');
    if (venceu) {
        alert("Voc\u00EA venceu! \n".concat(opcoes));
    }
    else {
        alert("O computador venceu! \n".concat(opcoes));
    }
}
/* if (escolhaUsuario === escolhaComputador) {
    alert(`É um empate! \n${opcoes}`);
} else if(escolhaUsuario === 'papel'){
    if(escolhaComputador === 'pedra'){
        alert(`Você venceu! \n${opcoes}`);
    } else {
        alert(`O computador venceu! \n${opcoes}`);
    }
} else if(escolhaUsuario === 'pedra'){
    if(escolhaComputador === 'papel'){
        alert(`O computador venceu! \n${opcoes}`);
    } else {
        alert(`Você venceu! \n${opcoes}`);
    }
} else {
    if(escolhaComputador === 'pedra'){
        alert(`O computador venceu! \n${opcoes}`);
    } else {
        alert(`Você venceu! \n${opcoes}`);
    }
} */
