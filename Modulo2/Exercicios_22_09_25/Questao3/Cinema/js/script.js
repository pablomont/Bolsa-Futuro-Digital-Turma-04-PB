
let botao = document.getElementById('btn_alterar_tema')

let alterarTema = function(){

    let link_tema = document.querySelector('#estilo_tema');

    if(link_tema.href.includes('dark')){
        link_tema.href = 'C:/Users/ninoe/Documents/UEPB/CURSO_FRONT/Bolsa-Futuro-Digital-Turma-04-PB/Modulo2/Exercicios_22_09_25/Questao2/Cinema/css/estilo.css';
        localStorage.setItem('theme', 'white')
    }
    else{
        link_tema.href = 'C:/Users/ninoe/Documents/UEPB/CURSO_FRONT/Bolsa-Futuro-Digital-Turma-04-PB/Modulo2/Exercicios_22_09_25/Questao2/Cinema/css/estilo_dark.css';
        localStorage.setItem('theme', 'black')
    }

}

document.addEventListener('DOMContentLoaded', carregarTema);

function carregarTema(){

    const temaSalvo = localStorage.getItem('theme');
    let link_tema = document.querySelector('#estilo_tema');

    if(temaSalvo === 'black'){
        link_tema.href = 'C:/Users/ninoe/Documents/UEPB/CURSO_FRONT/Bolsa-Futuro-Digital-Turma-04-PB/Modulo2/Exercicios_22_09_25/Questao3/Cinema/css/estilo_dark.css'
    }
    else{
        link_tema.href = 'C:/Users/ninoe/Documents/UEPB/CURSO_FRONT/Bolsa-Futuro-Digital-Turma-04-PB/Modulo2/Exercicios_22_09_25/Questao3/Cinema/css/estilo.css'
    }
}

botao.onclick = alterarTema;