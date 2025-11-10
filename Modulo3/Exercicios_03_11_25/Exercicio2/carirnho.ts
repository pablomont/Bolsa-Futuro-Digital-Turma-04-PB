
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
}