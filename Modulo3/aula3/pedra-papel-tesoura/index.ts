const btnPedra = document.getElementById('pedra');
const btnPapel = document.getElementById('papel');
const btnTesoura = document.getElementById('tesoura');

// ----------------------------------------------
// Questão 1:
// Implemente o evento de onclick para os outros botões (papel e tesoura)
// ----------------------------------------------

if (btnPedra) {
    btnPedra.onclick = () => {
        const escolhaComputador = obterEscolhaComputador();
        mostrarResultado('pedra', escolhaComputador);
    };
}

if (btnPapel) {
    btnPapel.onclick = () => {
        const escolhaComputador = obterEscolhaComputador();
        mostrarResultado('papel', escolhaComputador);
    };
}

if (btnTesoura) {
    btnTesoura.onclick = () => {
        const escolhaComputador = obterEscolhaComputador();
        mostrarResultado('tesoura', escolhaComputador);
    };
}

function obterEscolhaComputador(): string {
    const opcoes = ['pedra', 'papel', 'tesoura'];
    return opcoes[Math.floor(Math.random() * opcoes.length)];
}

// ----------------------------------------------
// Questão 2:
// Termine de implementar a função mostrarResultado
// ----------------------------------------------
function mostrarResultado(escolhaUsuario: string, escolhaComputador: string): void {
    let mensagem = '';

    if (escolhaUsuario === escolhaComputador) {
        mensagem = 'Empate!';
    } else if (
        (escolhaUsuario === 'pedra' && escolhaComputador === 'tesoura') ||
        (escolhaUsuario === 'papel' && escolhaComputador === 'pedra') ||
        (escolhaUsuario === 'tesoura' && escolhaComputador === 'papel')
    ) {
        mensagem = 'Você venceu!';
    } else {
        mensagem = 'O computador venceu!';
    }

    alert(`${mensagem}\nComputador: ${escolhaComputador} - Usuário: ${escolhaUsuario}`);
}
