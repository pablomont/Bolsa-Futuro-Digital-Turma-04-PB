 class Carrinho {
  pizzas: { nome: string; preco: number }[]

  constructor() {
    this.pizzas = []
  }

  adicionarPizza(pizza: { nome: string; preco: number }) {
    this.pizzas.push(pizza)
  }

  obterListaPrecos(): number[] {
    return this.pizzas.map(pizza => pizza.preco)
  }
}
 
const Carrinho