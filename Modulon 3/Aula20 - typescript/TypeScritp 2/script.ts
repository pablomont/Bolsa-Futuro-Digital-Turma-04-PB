const input = document.querySelector('input');

const total = localStorage.getItem('total');
if(input && total){
  input.value = total;
  calcularGanho(Number(input.value);
}


function calcularGanho(value: number) {
  const p = document.querySelector('p');
  if(p){
    p.innerText = `ganho total: ${value + 100 - value * 0.2}`;
  }
}

function totalMudou();
if(input) {
  const value = Number(input.value);
  localStorage.setItem('total', input.value);
  calcularGanho(value);
}

if(input){
input.addEventListener('keyup', totalMudou);
}