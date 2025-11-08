import { Pizza } from "./pizza.js"

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

    obterListaPrecos(): number[]{
        return this.pizzas.map(pizza => pizza.calculaPreco())
    }

    obterPizzasPremium(): Pizza[]{
        return this.pizzas.filter(pizza => pizza.calculaPreco() >= 23)
    }

    obterIngredientesPorPizzaPremium(): string[][]{
        return this.pizzas.filter(pizza => pizza.calculaPreco() >= 23)
        .map(pizza => pizza.ingredientes)
    }
}