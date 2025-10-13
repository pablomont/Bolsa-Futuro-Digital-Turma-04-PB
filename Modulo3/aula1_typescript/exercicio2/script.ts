const input = document.querySelector('input');
const total = localStorage.getItem('total'); 

if(input && total){//Vai verificar que os dados de entradas não sejam null.
    input.value = total;
    calcularGanho(Number(input.value));
}

function calcularGanho(value: number){
    const p = document.querySelector('p');
    if(p){
    p.innerText = `ganho total: ${value + 100 - value *0.2}`;
    }
}

function totalMudou(){
   if (input){
    localStorage.setItem('total', input.value);
    const value = Number(input.value); // mudei para input.value
    calcularGanho(value); 
   }
}

if(input)
input.addEventListener('keyup', totalMudou); 