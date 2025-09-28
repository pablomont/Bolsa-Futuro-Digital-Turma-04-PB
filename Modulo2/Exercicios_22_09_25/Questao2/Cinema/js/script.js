
let botao = document.getElementById('btn_alterar_tema')

let alterarTema = function(){

    let link_tema = document.querySelector('#estilo_tema');

    if(link_tema.href.includes('dark')){
        link_tema.href = 'C:/Users/ninoe/Documents/UEPB/CURSO_FRONT/Bolsa-Futuro-Digital-Turma-04-PB/Modulo2/Exercicios_22_09_25/Questao2/Cinema/css/estilo.css';
        
    }
    else{
        link_tema.href = 'C:/Users/ninoe/Documents/UEPB/CURSO_FRONT/Bolsa-Futuro-Digital-Turma-04-PB/Modulo2/Exercicios_22_09_25/Questao2/Cinema/css/estilo_dark.css';
    }

}

botao.onclick = alterarTema;