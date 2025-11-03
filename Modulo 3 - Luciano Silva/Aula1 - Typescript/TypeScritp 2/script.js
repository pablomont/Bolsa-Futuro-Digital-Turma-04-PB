var input = document.querySelector('input');
var total = localStorage.getItem('total');
if (input && total) {
    input.value = total;
    calcularGanho(Number(input.value));
}
function calcularGanho(value) {
    var p = document.querySelector('p');
    if (p) {
        p.innerText = "ganho total: ".concat(value + 100 - value * 0.2);
    }
}
if (input) {
    var value = Number(input.value);
    localStorage.setItem('total', input.value);
    calcularGanho(value);
}
if (input) {
    input.addEventListener('keyup', totalMudou);
}
