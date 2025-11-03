export class Pizza {
    constructor(public ingredientes: string[]){}

    calcularPreco(){
        const quantidade = this.ingredientes.length;
        if(quantidade <= 2){
            return 15;
        } else if ( quantidade >= 3 && quantidade <= 5){
            return 20;
        } else {
            return 23;
        }      
    }
}

const pizza1 = new Pizza(["queijo", "presunto"]);
console.log("Preço Pizza1: R$", pizza1.calcularPreco()); //15

const pizza2 = new Pizza(["queijo", "presunto","tomate"]);
console.log("Preço Pizza2: R$", pizza2.calcularPreco()); //20

const pizza3 = new Pizza(["queijo", "presunto", "tomate", "cebola", "milho", "azeitona"]);
console.log("Preço Pizza3: R$", pizza3.calcularPreco()); //23