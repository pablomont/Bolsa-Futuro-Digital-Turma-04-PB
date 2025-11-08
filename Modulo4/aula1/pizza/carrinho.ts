import { Pizza } from "./pizza";

export class Carrinho {
  pizzas: Pizza[] = [];

  adicionarPizza(pizza: Pizza): void {
    if (pizza.ingredientes.length > 0) {
      this.pizzas.push(pizza);
    } else {
      console.log("Não é possível adicionar pizza sem ingredientes!");
    }
  }

  obtemTotal(): number {
    let total = 0;
    for (const pizza of this.pizzas) {
      total += pizza.calculaPreco();
    }
    return total;
  }

  //  parte 1 - novo método usando map
  obterListaPrecos(): number[] {
    return this.pizzas.map(pizza => pizza.calculaPreco());
  }

  //  parte 1 - novo método usando filter
  obterPizzasPremium(): Pizza[] {
    return this.pizzas.filter(pizza => pizza.calculaPreco() >= 23);
  }

  //  parte 1 - novo método usando encadeamento (filter + map)
  obterIngredientesPorPizzaPremium(): string[][] {
    return this.pizzas
      .filter(pizza => pizza.calculaPreco() >= 23)
      .map(pizza => pizza.ingredientes);
  }

}
