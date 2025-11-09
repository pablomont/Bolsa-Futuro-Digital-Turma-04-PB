import { Pizza } from "./pizza.js";

export class Carrinho{
    public pizzas: Pizza[] = [];

    adicionarPizza(pizza: Pizza){
        
        if(pizza.ingredientes.length>0){
            this.pizzas.push(pizza);
        }else{
            console.log("Não é possível adicionar pizza sem ingredientes!"); 
        }
    }
    obterTotal(){
        let Total = 0
       for (const pizza of this.pizzas){
            Total+=pizza.calcularPreco();
       }
        return Total;
    }
}
