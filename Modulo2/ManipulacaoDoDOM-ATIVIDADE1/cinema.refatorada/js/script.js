function alterarTema() {
    const link= document.querySelector('link[rel="stylesheet"]');
    if (link.getAttribute('href') === 'css/estilo.css') {
        link.setAttribute('href', 'css/estilo-dark.css');
    } else {
        link.setAttribute('href', 'css/estilo.css');
    }
}