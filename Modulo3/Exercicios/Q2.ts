const input = document.querySelector('input') as HTMLInputElement | null;
const total = localStorage.getItem('total');

if (input) {
  input.value = total ?? ''; 
  calcularGanho(Number(input.value));
  input.addEventListener('keyup', totalMudou);
}

function calcularGanho(value: number): void {
  const p = document.querySelector('p') as HTMLParagraphElement | null;
  if (p) {
    p.innerText = `ganho total: ${value + 100 - value * 0.2}`;
  }
}

function totalMudou(): void {
  if (!input) return;
  const value = Number(input.value);
  localStorage.setItem('total', value.toString());
  calcularGanho(value);
}
