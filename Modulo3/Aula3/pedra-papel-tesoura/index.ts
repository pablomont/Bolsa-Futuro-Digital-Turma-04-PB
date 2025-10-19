import './styles.css';

const btnPedra = document.getElementById('rock');

if (btnPedra) {
    btnPedra.onclick = () => {
        const escolhaComputador = obterEscolhaComputador();
        mostrarResultado('rock', escolhaComputador);
    }
}

// ----------------------------------------------
// Questão 1:
// Implemente o evento de onclick para os outros botões (paper e scissors)
// ----------------------------------------------

function obterEscolhaComputador() {
    const opcoes = ['rock', 'paper', 'scissors'];
    return opcoes[Math.floor(Math.random() * opcoes.length)];
}

function mostrarResultado(escolhaUsuario: string, escolhaComputador: string) {
    const opcoes = `Computador: ${escolhaComputador} - Usuário: ${escolhaUsuario}`;
    
    if (escolhaUsuario === escolhaComputador) {
        alert(`É um empate! \n${opcoes}`);
    }
    
    // ----------------------------------------------
    // Questão 2:
    // Termine de implementar a função mostrarResultado
    // ----------------------------------------------
}