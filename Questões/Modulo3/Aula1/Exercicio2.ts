const input = document.querySelector<HTMLInputElement>('input');

if (input){
    const total = localStorage.getItem('total');
    if (total){
        input.value = total;
        calcularGanho(Number(total));
    }

    function calcularGanho(valor: number){
        const p = document.querySelector('p');
        if (p){
            p.innerText = `Ganho total: R$ ${valor + 100 - valor * 0.2}`;
        }
    }
    function totalMudou(){
        const value = Number(input?.value);
        localStorage.setItem('total', String(value));
        calcularGanho(value);
    }

    input.addEventListener('keyup', totalMudou);
}