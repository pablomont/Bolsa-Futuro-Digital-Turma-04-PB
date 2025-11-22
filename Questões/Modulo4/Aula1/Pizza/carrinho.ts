import { Pizza } from "./pizza.js";

export class Carrinho {
    private pizzas: Pizza[] = [];

    adicionarPizza(pizza: Pizza): void {
        if (pizza.ingredientes.length > 0 ){
            this.pizzas.push(pizza);
        }
        else{
            console.log("Não é possível adicionar uma pizza sem ingredientes.");
        }
    }

    obterTotal(): number {
        let total = 0;

        this.pizzas.forEach((pizza) => {
            total += pizza.calculaPreco(); 
        });
        return total;
    }

    obterListaPrecos(): number[]{
        return this.pizzas.map(pizza => pizza.calculaPreco());
    }

    obterPizzasPremium(): Pizza[] {
        return this.pizzas.filter(pizza => pizza.calculaPreco() >= 23);
    }
    obterIngredientesPorPizzaPremium(): string[][] {
        const pizzasPremium = this.obterPizzasPremium();
        return pizzasPremium.map(pizza => pizza.ingredientes);
    }
}