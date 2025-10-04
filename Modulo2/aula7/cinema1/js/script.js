function alterarTema() {
    const link = document.querySelector('link');
    const hrefAtual = link.getAttribute('href');

    if (hrefAtual.includes('dark')) {
        link.href = 'css/estilo.css';
    } else {
        link.href = 'css/estilo-dark.css';
    }
}
