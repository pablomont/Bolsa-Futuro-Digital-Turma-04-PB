function normalizarTexto(texto: string) {
    return texto.trim().toLowerCase()
}



const input = document.querySelector('input');
const total = localStorage.getItem('total');

if(input && total){
    input.value = total
}

function calcularGanho(value:number) {
  const p = document.querySelector('p');
  if(p){
    p.innerText = `ganho total: ${value + 100 - value * 0.2}`;
  }
}

function totalMudou() {
if(input){
  localStorage.setItem('total', input.value);
  const value:number = Number(input.value);
  calcularGanho(value);
  }
}

if(input){
    input.addEventListener('keyup', totalMudou);
}