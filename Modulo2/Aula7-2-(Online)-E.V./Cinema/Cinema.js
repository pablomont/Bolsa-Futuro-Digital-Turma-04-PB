function getCaminhoBase() {
    if (window.location.href.includes('/Estados/')) {
        return '../CssCinema/';
    } else {
        return 'CssCinema/';
    }
}

function alterarTema(botao) {
    let elemento = document.querySelector('link');
    
    let caminhoBase = getCaminhoBase();

    let estarEscuro = elemento.href.includes('Modo-DarkCinema.css');
    
    if (estarEscuro) {
        elemento.href = caminhoBase + 'Modo-ClaroCinema.css';
        localStorage.setItem('tema', 'claro');

        botao.textContent = "Ativar Modo Escuro"
        
    } else {
        elemento.href = caminhoBase + 'Modo-DarkCinema.css';
        localStorage.setItem('tema', 'dark');

        botao.textContent = "Ativar Modo Claro"
    }
}

function carregarTema() {
    const temaSalvo = localStorage.getItem('tema');
    const botaoTema = document.querySelector('button')
    
    if (temaSalvo === 'dark') {
        let linkElemento = document.querySelector('link');
        let caminhoBase = getCaminhoBase(); 

        linkElemento.href = caminhoBase + 'Modo-DarkCinema.css';

        if (botaoTema){
            botaoTema.textContent = "Ativar Modo Claro"
        } else {
            if (botaoTema) {
                botaoTema.textContent = "Ativar Modo Escuro"
            }
        }
    }
}

document.addEventListener('DOMContentLoaded', carregarTema);