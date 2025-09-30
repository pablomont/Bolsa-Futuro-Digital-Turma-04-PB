function MudarTema(){
    let elemento = document.querySelector('link[rel="stylesheet"]');
    var btnTema = document.getElementById('tema');

    if(elemento.getAttribute('href') === '/Cinema-1/css/dark-mode.css'){
        elemento.href = '/Cinema-1/css/style.css';
        localStorage.setItem('tema', elemento.href);
        alterarBtn(btnTema,'Modo Escuro');

    } else{ 
        elemento.href = '/Cinema-1/css/dark-mode.css';
        localStorage.setItem('tema', elemento.href);
        alterarBtn(btnTema,'Modo Claro');
    }
}

document.getElementById('tema').addEventListener('click', MudarTema);

document.addEventListener('DOMContentLoaded', function(){
    let temaSalvo = localStorage.getItem('tema');
    if(temaSalvo){
        document.querySelector('link[rel="stylesheet"]').setAttribute('href', temaSalvo);
    }
});

function alterarBtn(botao,text){
    botao.textContent = text;
}

