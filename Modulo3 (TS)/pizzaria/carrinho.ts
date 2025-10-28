import { Pizza } from "./pizza.js";
export class Carrinho {
    constructor(public pizzas: Pizza[] = []) {}
    adicionarPizza(pizza: Pizza) {
        if (pizza.ingredientes.length > 0) {
            this.pizzas.push(pizza);
        } else {
            console.log("Não é possível adicionar pizza sem ingredientes.");
        }
    }

    obterTotal(){
        let total = 0;
        for (let pizza of this.pizzas) {
            total += pizza.calculaPreco();
        }
        return total;
    }
}