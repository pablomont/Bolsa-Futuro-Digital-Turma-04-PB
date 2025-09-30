
let botao = document.getElementById('btn_alterar_tema')

let alterarTema = function(event){

    let link_tema = document.querySelector('#estilo_tema');
    const botao = event.target;

    if(link_tema.href.includes('dark')){
        link_tema.href = 'C:/Users/ninoe/Documents/UEPB/CURSO_FRONT/Bolsa-Futuro-Digital-Turma-04-PB/Modulo2/Exercicios_22_09_25/Questao4/Cinema/css/estilo.css';
        localStorage.setItem('theme', 'white')
        botao.textContent = 'Ativar Modo Escuro'
    }
    else{
        link_tema.href = 'C:/Users/ninoe/Documents/UEPB/CURSO_FRONT/Bolsa-Futuro-Digital-Turma-04-PB/Modulo2/Exercicios_22_09_25/Questao4/Cinema/css/estilo_dark.css';
        localStorage.setItem('theme', 'black')
        botao.textContent = 'Ativar Modo Claro'
    }
    

}

document.addEventListener('DOMContentLoaded', carregarTema);

function carregarTema(){

    const temaSalvo = localStorage.getItem('theme');
    let link_tema = document.querySelector('#estilo_tema');

    if(temaSalvo === 'black'){
        link_tema.href = 'C:/Users/ninoe/Documents/UEPB/CURSO_FRONT/Bolsa-Futuro-Digital-Turma-04-PB/Modulo2/Exercicios_22_09_25/Questao4/Cinema/css/estilo_dark.css'

         /* 
         Esse condicional foi necessário, pois toda vez que o site era iniciado, ele pegaga o nome original do site (alterar 
         tema), ao invéz do nome referente ao tema atual.

         */
        if (botao) {
             botao.textContent = 'Ativar Modo Claro';
        }
    }
    else{
        link_tema.href = 'C:/Users/ninoe/Documents/UEPB/CURSO_FRONT/Bolsa-Futuro-Digital-Turma-04-PB/Modulo2/Exercicios_22_09_25/Questao4/Cinema/css/estilo.css'

        if (botao) {
            botao.textContent = 'Ativar Modo Escuro';
        }
    }
}

if(botao){
    botao.onclick = alterarTema;
}
