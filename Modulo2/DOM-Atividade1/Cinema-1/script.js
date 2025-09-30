function MudarTema(){
    let elemento = document.querySelector('link[rel="stylesheet"]');

    if(elemento.getAttribute('href') === '/Cinema-1/css/dark-mode.css')
        elemento.href = '/Cinema-1/css/style.css';
    else    
    elemento.href = '/Cinema-1/css/dark-mode.css'
}

document.getElementById('tema').addEventListener('click', MudarTema);