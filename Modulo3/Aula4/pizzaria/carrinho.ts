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
        // let valorTotal = 0
        // this.pizzas.forEach(pizza => {
        //     valorTotal += pizza.calculaPreco()
        // })
        // return valorTotal
        return this.pizzas.map(pizza => pizza.calculaPreco())
            .reduce((previous, actual) => previous+actual, 0)
    }

    obterListaPrecos(){
        return this.pizzas.map(pizza => pizza.calculaPreco())
    }

    obterPizzasPremium(): Pizza[] {
        return this.pizzas.filter(pizza => pizza.calculaPreco() >= 23)
    }

    obterIngredientesPorPizzaPremium(): string[][]{
        return this.pizzas.filter(pizza => pizza.calculaPreco() >= 23)
            .map(pizza => pizza.ingredientes)
    }
}