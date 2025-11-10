import { Pizza } from "./pizza.js";
import { Carrinho } from "./carrinho.js"

const pizza1 = new Pizza(["Calabresa", "Queijo"]);
const pizza2 = new Pizza(["Frango", "Catupiry", "Milho"]);
const pizza3 = new Pizza(["Lombo", "Bacon", "Queijo", "Tomate", "Cebola", "Orégano"]);
const pizza4 = new Pizza([]);

const carrinho = new Carrinho();

carrinho.adicionarPizza(pizza1);
carrinho.adicionarPizza(pizza2);
carrinho.adicionarPizza(pizza3);
carrinho.adicionarPizza(pizza4);

console.log(`Total do Carrinho: R$ ${carrinho.obterTotal()}`);