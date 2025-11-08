import { Pizza } from "./Pizza.js";
export class Carrinho {
    pizzas : Pizza[] = []

    adicionarPizza(pizza:Pizza){
        if(pizza.ingredientes.length > 0){
            this.pizzas.push(pizza)
        } else {
            console.log("Não é possível adicionar pizza sem ingredientes!")
        }
    }

    obterTotal() {
        let total = 0;
        for (let pizza of this.pizzas) {
            total += pizza.preco; 
        }
        return total;
    }

    obterListaPrecos():number[]{
        return this.pizzas.map(pizza => pizza.preco)
    }

    obterPizzasPremium(): Pizza[] {
        return this.pizzas.filter(pizza => pizza.preco >= 23)
    }
    obterIngredientesPorPizzaPremium(): string[][] {
        return this.pizzas.filter(pizza => pizza.preco >= 23)
                .map(pizza => pizza.ingredientes)
    }


}