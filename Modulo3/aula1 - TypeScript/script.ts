export {}

const input = document.querySelector('input');
const total= localStorage.getItem('total');
if (total && input){
    input.value = total;
    calcularGanho(Number(input.value));
}



function calcularGanho(value:number) {
  const p = document.querySelector('p');
  if(p){
    p.innerText = `ganho total: ${value + 100 - value * 0.2}`;
  }
  
}

function totalMudou() {
  if (input) {
    const value = input.value;
    localStorage.setItem('total', value);
    calcularGanho(Number(value));
  }
  
  
}
if (input){
    input.addEventListener('keyup', totalMudou);    
}