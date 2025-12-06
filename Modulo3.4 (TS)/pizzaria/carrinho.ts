import { Pizza } from "./pizza.js";
export class Carrinho {
    constructor(public pizzas: Pizza[] = []) { }
    adicionarPizza(pizza: Pizza) {
        if (pizza.ingredientes.length > 0) {
            this.pizzas.push(pizza);
        } else {
            console.log("Não é possível adicionar pizza sem ingredientes.");
        }
    }

    obterTotal() {
        let total = 0;
        for (let pizza of this.pizzas) {
            total += pizza.calculaPreco();
        }
        return total;
    }

    obterListaPrecos(): number[] {
        return this.pizzas.map(pizza => pizza.calculaPreco());
    }

    obterPizzasPremium(): Pizza[] {
        return this.pizzas.filter(pizza => pizza.pizzaPremium());
    }

    public obterIngredientesPorPizzaPremium(): string[][] {
        return this.pizzas.filter(pizza => pizza.pizzaPremium()).map(pizza => pizza.ingredientes);
    }
}