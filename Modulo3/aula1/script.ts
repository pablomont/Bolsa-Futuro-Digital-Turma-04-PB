const input = document.querySelector('input');

const total = localStorage.getItem('total');
if(input && total){// ver se dados ñ são nulos - null, adicionou if
    input.value = total;
    calcularGanho(Number(input.value));
}

function calcularGanho(value: number) {
    const p = document.querySelector('p'); // adicionou if
    if(p){
        p.innerText = `ganho total: ${value + 100 - value * 0.2}`;
    }  
}

function totalMudou () {
    if(input){ // adicionou if
        localStorage.setItem('total', input.value);
        const value = Number(input.value); // mudou p/ input.value
        calcularGanho(value); 
    }
}
if(input) // adicionou if
input.addEventListener('keyup', totalMudou);