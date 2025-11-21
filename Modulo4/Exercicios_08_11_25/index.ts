import {Carrinho} from "./carrinho.js";
import {Pizza} from "./pizza.js";

const pizza1 = new Pizza(["Calabresa", "Queijo"]);
const pizza2 = new Pizza(["Frango", "Catupiry", "Milho"]);
const pizza3 = new Pizza(["Lombo", "Bacon", "Queijo", "Tomate", "Cebola", "Orégano"]);

const carrinho = new Carrinho();

carrinho.adicionarPizza(pizza1);
carrinho.adicionarPizza(pizza2);
carrinho.adicionarPizza(pizza3);

const pizza4 = new Pizza([]);

carrinho.adicionarPizza(pizza4);

// console.log(`Total do carrinho: R$ ${carrinho.obtertotal()}`);

console.log(carrinho.obterListaPreco())
console.log(carrinho.obterPizzaPremium().length);
console.log(carrinho.obterIngredientesPorPizzaPremium().length);