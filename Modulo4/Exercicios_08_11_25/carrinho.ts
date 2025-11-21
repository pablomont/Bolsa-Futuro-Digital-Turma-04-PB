
import { Pizza } from "./pizza.js";

export class Carrinho{

    pizzas: Pizza[] = [];

    adicionarPizza(pizza : Pizza){

        if(pizza.ingredientes && pizza.ingredientes.length > 0){
            this.pizzas.push(pizza)
        }
        else{
            console.log("Não é possível adicionar uma pizza sem ingredientes.");
        }
    }

    obtertotal(): number{

        let total = 0;

        this.pizzas.forEach((pizza) => {
            total += pizza.calcularPreco();
        })
        
        return total;
    }

    obterListaPreco(): number[]{
        return this.pizzas.map((pizza => pizza.calcularPreco()));
    }

    obterPizzaPremium(): Pizza[]{
        return this.pizzas.filter(pizza => pizza.calcularPreco() >= 23);
    }

    obterIngredientesPorPizzaPremium(): string[][]{
        return this.pizzas.filter(pizza => pizza.calcularPreco() >= 23).map(pizza => pizza.ingredientes);
    }
}