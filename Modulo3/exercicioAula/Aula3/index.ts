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

function obterEscolhaComputador() {
    const opcoes = ['pedra', 'papel', 'tesoura'];
    return opcoes[Math.floor(Math.random() * opcoes.length)] ?? 'pedra';
}

function mostrarResultado(escolhaUsuario: string, escolhaComputador: string) {
    const opcoes = `Computador: ${escolhaComputador} - Usuário: ${escolhaUsuario}`;

    if (escolhaUsuario === escolhaComputador) {
        alert(`É um empate! \n${opcoes}`);
        return;
    }

    const venceu = 
        (escolhaUsuario === 'pedra' && escolhaComputador === 'tesoura') ||
        (escolhaUsuario === 'papel' && escolhaComputador === 'pedra') ||
        (escolhaUsuario === 'tesoura' && escolhaComputador === 'papel');

    if (venceu) {
        alert(`Você venceu! \n${opcoes}`);
    } else {
        alert(`O computador venceu! \n${opcoes}`);
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
