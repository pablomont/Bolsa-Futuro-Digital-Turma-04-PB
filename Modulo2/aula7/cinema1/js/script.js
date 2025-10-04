function alterarTema() {
    const link = document.querySelector('link');
    const hrefAtual = link.getAttribute('href');

    if (hrefAtual.includes('dark')) {
        link.href = link.href.replace('estilo-dark.css', 'estilo.css');
        localStorage.setItem('theme', 'estilo.css');
    } else {
        link.href = link.href.replace('estilo.css', 'estilo-dark.css');
        localStorage.setItem('theme', 'estilo-dark.css');
    }
}

function carregarTema() {
    const temaSalvo = localStorage.getItem('theme');
    const link = document.querySelector('link');

    if (temaSalvo && !link.href.includes(temaSalvo)) {
        // Corrige caminho 
        let novoHref = temaSalvo;
        if (window.location.pathname.includes('estados')) {
            novoHref = '../css/' + temaSalvo;
        } else {
            novoHref = 'css/' + temaSalvo;
        }
        link.href = novoHref;
    }
}

document.addEventListener('DOMContentLoaded', carregarTema);