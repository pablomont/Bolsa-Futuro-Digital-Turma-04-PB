function alterarTema(event) {
    const link= document.querySelector('link[rel="stylesheet"]');
    const hrefAtual = link.getAttribute('href');
    const botao = event.target

    if (hrefAtual.includes('dark')) {
        link.setAttribute('href', hrefAtual.replace('estilo-dark.css', 'estilo.css'));
        localStorage.setItem('theme', 'light');
        botao.textContent = 'Ativar Modo Escuro';
    } else {
        link.setAttribute('href', hrefAtual.replace('estilo.css', 'estilo-dark.css'));
        localStorage.setItem('theme', 'dark');
        botao.textContent = 'Ativar Modo Claro';
    }
}

function carregarTema() {
    const link = document.querySelector('link[rel="stylesheet"]');
    const temaSalvo = localStorage.getItem('theme');
    const botao = document.querySelector('#botao-alterar-tema');

    if(temaSalvo === 'dark') {
        link.setAttribute('href', link.getAttribute('href').replace('estilo.css', 'estilo-dark.css'));
        botao.textContent = "Tema Claro";
    } else {
        link.setAttribute('href', link.getAttribute('href').replace('estilo-dark.css', 'estilo.css'));
        botao.textContent = "Tema Escuro";
    }       
}

document.addEventListener('DOMContentLoaded', carregarTema);