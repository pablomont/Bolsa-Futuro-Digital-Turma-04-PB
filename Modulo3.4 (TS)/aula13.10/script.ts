const input = document.querySelector('input') as HTMLInputElement | null;
const total = localStorage.getItem('total');

if (input && total) {
  input.value = total;
  calcularGanho(Number(total).toString());
}

function calcularGanho(value: string) {
  const p = document.querySelector('p');
  if (p) {
    p.innerText = `ganho total: ${Number(value) + 100 - Number(value) * 0.2}`;
  }
}

function totalMudou() {
  if (input) {
    const value = Number(input.value);
    localStorage.setItem('total', value.toString());
    calcularGanho(value.toString());
  }
}

if (input) {
  input.addEventListener('keyup', totalMudou);
}
