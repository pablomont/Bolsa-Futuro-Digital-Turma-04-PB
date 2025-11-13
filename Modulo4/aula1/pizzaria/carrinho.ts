import { Pizza } from "./pizza.js"

export class Carrinho {
  pizzas: Pizza[] = []

  adicionarPizza(pizza: Pizza) {
    if (pizza.ingredientes.length > 0) {
      this.pizzas.push(pizza)
    } else {
      console.log("Não é possível adicionar pizza sem ingredientes!")
    }
  }

  obterTotal(): number {
    let total = 0
    for (const pizza of this.pizzas) {
      total += pizza.calculaPreco()
    }
    return total
  }

  obterListaPrecos(): number[] {
    return this.pizzas.map(pizza => pizza.calculaPreco())
  }

  obterPizzasPremium(): number {

    const pizzaPremium = this.pizzas.find(pizza => pizza.calculaPreco() >= 23)
    if (pizzaPremium) {
      return pizzaPremium.ingredientes.length 
    }
    return 0
  }

  public obterIngredientesPorPizzaPremium(): string[][] {
    return this.pizzas.filter(pizza => pizza.calculaPreco() >= 23).map(pizza => pizza.ingredientes)
  }

}
