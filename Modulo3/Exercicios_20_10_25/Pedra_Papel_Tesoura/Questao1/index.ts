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
    }
}

if(btnPapel) {
    btnPapel.onclick = () => {
        const escolhaComputador = obterEscolhaComputador();
        mostrarResultado('papel', escolhaComputador);

    }
}

if(btnTesoura) {
    btnTesoura.onclick = () => {
        const escolhaComputador = obterEscolhaComputador();
        mostrarResultado('tesoura', escolhaComputador);
    }
}

function obterEscolhaComputador() {
    const opcoes = ['pedra', 'papel', 'tesoura'];
    return opcoes[Math.floor(Math.random() * opcoes.length)];
}

function mostrarResultado(escolhaUsuario: string, escolhaComputador: string) {
    const opcoes = `Computador: ${escolhaComputador} - Usuário: ${escolhaUsuario}`;
    

     // ----------------------------------------------
    // Questão 2:
    // Termine de implementar a função mostrarResultado
    // ----------------------------------------------

    if (escolhaUsuario === escolhaComputador) {
        alert(`É um empate! \n${opcoes}`);
    }

    else if(escolhaUsuario === 'pedra' && escolhaComputador === "tesoura"){
        alert(`Você venceu! \n${opcoes}`);
    }

    else if(escolhaUsuario === 'papel' && escolhaComputador === "pedra"){
        alert(`Você venceu! \n${opcoes}`);
    }

    else if(escolhaUsuario === 'tesoura' && escolhaComputador === "papel"){
        alert(`Você venceu! \n${opcoes}`);
    }

    else if(escolhaUsuario === 'tesoura' && escolhaComputador === "pedra"){
        alert(`O computador venceu! \n${opcoes}`);
    }

    else if(escolhaUsuario === 'pedra' && escolhaComputador === "papel"){
        alert(`O computador venceu! \n${opcoes}`);
    }

    else if(escolhaUsuario === 'papel' && escolhaComputador === "tesoura"){
        alert(`O computador venceu!! \n${opcoes}`);
    }

}