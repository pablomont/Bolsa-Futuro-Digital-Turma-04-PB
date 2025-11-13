import { Pizza } from "./pizza.js"
import { Carrinho } from "./carrinho.js"

const pizza1 = new Pizza(["Calabresa", "Queijo"]) // Deve custar 15
const pizza2 = new Pizza(["Frango", "Catupiry", "Milho"]) // Deve custar 20
const pizza3 = new Pizza(["Lombo", "Bacon", "Queijo", "Tomate", "Cebola", "Orégano"]) // Deve custar 23
const pizza4 = new Pizza([])

const carrinho = new Carrinho()

carrinho.adicionarPizza(pizza1)
carrinho.adicionarPizza(pizza2)
carrinho.adicionarPizza(pizza3)
carrinho.adicionarPizza(pizza4)//ira mostrar um erro por não ter ingredientes


// carrinho.pizzas.forEach((pizza, index) => {
//   console.log(`Pizza ${index + 1}: ${pizza.ingredientes.join(", ")} - R$ ${pizza.calculaPreco()}`)
// })

console.log(`Total do Carrinho: R$ ${carrinho.obterTotal()}`)
console.log(`Preço individual de cada pizza: ${carrinho.obterListaPrecos()}`)
console.log(`Pizza premium – quantidade de ingredientes: ${carrinho.obterPizzasPremium()}`)
console.log(carrinho.obterIngredientesPorPizzaPremium())


