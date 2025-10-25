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
// ----------------------------------------------
// Questão 2:
// Termine de implementar a função mostrarResultado
// ----------------------------------------------
function mostrarResultado(escolhaUsuario, escolhaComputador) {
    var mensagem = '';
    if (escolhaUsuario === escolhaComputador) {
        mensagem = 'Empate!';
    }
    else if ((escolhaUsuario === 'pedra' && escolhaComputador === 'tesoura') ||
        (escolhaUsuario === 'papel' && escolhaComputador === 'pedra') ||
        (escolhaUsuario === 'tesoura' && escolhaComputador === 'papel')) {
        mensagem = 'Você venceu!';
    }
    else {
        mensagem = 'O computador venceu!';
    }
    alert("".concat(mensagem, "\nComputador: ").concat(escolhaComputador, " - Usu\u00E1rio: ").concat(escolhaUsuario));
}
