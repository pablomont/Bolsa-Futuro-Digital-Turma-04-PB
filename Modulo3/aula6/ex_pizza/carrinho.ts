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
}