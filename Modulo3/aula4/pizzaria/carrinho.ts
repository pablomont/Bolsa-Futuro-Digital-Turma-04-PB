import { Pizza } from "./pizza.ts";

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
        let valorTotal = 0
        this.pizzas.forEach(pizza => {
            valorTotal +=pizza.calcularPreco();
        })
        return valorTotal
    }
    }
}
