function alterarTema() {
    const link= document.querySelector('link[rel="stylesheet"]');
    const hrefAtual = link.getAttribute('href');

    if (hrefAtual.includes('dark')) {
        link.setAttribute('href', hrefAtual.replace('estilo-dark.css', 'estilo.css'));
        localStorage.setItem('theme', 'light');
    } else {
        link.setAttribute('href', hrefAtual.replace('estilo.css', 'estilo-dark.css'));
        localStorage.setItem('theme', 'dark');
    }
}

function carregarTema() {
    const link = document.querySelector('link[rel="stylesheet"]');
    const temaSalvo = localStorage.getItem('theme');

    if(temaSalvo === 'dark') {
        link.setAttribute('href', link.getAttribute('href').replace('estilo.css', 'estilo-dark.css'));
    } else {
        link.setAttribute('href', link.getAttribute('href').replace('estilo-dark.css', 'estilo.css'));
    }       
}

document.addEventListener('DOMContentLoaded', carregarTema);