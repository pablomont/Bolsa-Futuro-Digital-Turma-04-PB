import { Carrinho } from "./carrinho.js"
import { Pizza } from "./pizza.js"


const pizza1 = new Pizza(['Calabreza', 'Queijo'])
const pizza2 = new Pizza(["Frango", "Catupiry", "Milho"])
const pizza3 = new Pizza(["Lombo", "Bacon", "Queijo", "Tomate", "Cebola", "Orégano"])
const pizza4 = new Pizza([])


const carrinho = new Carrinho()
carrinho.adicionarPizza(pizza1)
carrinho.adicionarPizza(pizza2)
carrinho.adicionarPizza(pizza3)
carrinho.adicionarPizza(pizza4)


// Lista Precos
const listaPrecos:number[] = carrinho.pizzas.map(Pizza => Pizza.calculaPreco())

console.log("Lista Precos:",listaPrecos)

//const pizzasPremium2 = listaPrecos((n) => n > 22)

const pizzasPremium:Pizza[] = carrinho.pizzas.filter((n) => n > 22)