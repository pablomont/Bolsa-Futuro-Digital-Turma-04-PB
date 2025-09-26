function alterarTema() {
    const link= document.querySelector('link[rel="stylesheet"]');
    const hrefAtual = link.getAttribute('href');

    if (hrefAtual.includes('dark')) {
        link.setAttribute('href', 'css/estilo.css');
    } else {
        link.setAttribute('href', 'css/estilo-dark.css');
    }
}