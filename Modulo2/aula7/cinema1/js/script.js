function alterarTema(event) {
    const link = document.querySelector('link');
    const hrefAtual = link.getAttribute('href');
    const botao = event.target;

    if (hrefAtual.includes('dark')) {
        link.href = link.href.replace('estilo-dark.css', 'estilo.css');
        localStorage.setItem('theme', 'estilo.css');
        botao.textContent = 'Ativar Modo Escuro';
    } else {
        link.href = link.href.replace('estilo.css', 'estilo-dark.css');
        localStorage.setItem('theme', 'estilo-dark.css');
        botao.textContent = 'Ativar Modo Claro';
    }
}

function carregarTema() {
    const temaSalvo = localStorage.getItem('theme');
    const link = document.querySelector('link');
    const botao = document.getElementById('botao-altera-tema');

    if (temaSalvo && !link.href.includes(temaSalvo)) {
        let novoHref = temaSalvo;
        if (window.location.pathname.includes('estados')) {
            novoHref = '../css/' + temaSalvo;
        } else {
            novoHref = 'css/' + temaSalvo;
        }
        link.href = novoHref;
    }

    if (botao) {
        if (temaSalvo === 'estilo-dark.css') {
            botao.textContent = 'Ativar Modo Claro';
        } else {
            botao.textContent = 'Ativar Modo Escuro';
        }
    }
}

document.addEventListener('DOMContentLoaded', function () {
    carregarTema();

    const botao = document.getElementById('botao-altera-tema');
    if (botao) {
        botao.addEventListener('click', alterarTema);
    }
});