import { Carrinho } from "./carrinho.js"
import { Pizza } from "./pizza.js"


const pizza1 = new Pizza(['Calabreza', 'Queijo'])
const pizza2 = new Pizza(["Frango", "Catupiry", "Milho"])
const pizza3 = new Pizza(["Lombo", "Bacon", "Queijo", "Tomate", "Cebola", "Orégano"])
const pizza4 = new Pizza(["peito de peru", "queijo", "Óregano"])


const carrinho = new Carrinho()
carrinho.adicionarPizza(pizza1)
carrinho.adicionarPizza(pizza2)
carrinho.adicionarPizza(pizza3)
carrinho.adicionarPizza(pizza4)

console.log (carrinho.obterListaPrecos())
console.log (carrinho.obterPizzasPremium()[0]?.ingredientes.length)
console.log (carrinho.obterIngredientesPorPizzaPremium())

console.log(`Total do Carrinho: R$ ${carrinho.obtemTotal()}`)