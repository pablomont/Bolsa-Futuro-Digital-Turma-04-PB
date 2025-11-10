 export class Carrinho {
  pizzas: { nome: string; preco: number; ingredientes: string[] }[]

  constructor() {
    this.pizzas = []
  }

  adicionarPizza(pizza: { nome: string; preco: number; ingredientes: string[] }) {
    if (pizza.ingredientes.length === 0) {
      console.log("Não é possível adicionar pizza sem ingredientes!")
      return
    }
    this.pizzas.push(pizza)
  }

  obterListaPrecos(): number[] {
    return this.pizzas.map(pizza => pizza.preco)
  }
