import type { Pizza } from "./pizza.js"

export class Carrinho{
    public pizzas: Pizza[] = []

    adicionarPizza(pizza: Pizza){
        if(pizza.ingredientes.length > 0){
            this.pizzas.push(pizza)
        }else {
            console.log('Não é possível adicionar pizza sem ingredientes!')
        }
    }

    obtemTotal(){
        let valorTotal = 0
        this.pizzas.forEach(pizza => {
            valorTotal += pizza.calculaPreco()
        })
        return valorTotal
    }
}