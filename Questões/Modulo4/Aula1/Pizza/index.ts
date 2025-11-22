import { Carrinho } from "./carrinho.js";
import { Pizza } from "./pizza.js";

const carrinho = new Carrinho();
const pizza1 = new Pizza(["Calabresa", "queijo"]);
const pizza2 = new Pizza(["Frango", "Catupiry", "Milho"]);
const pizza3 = new Pizza(["Lombo", "Bacon", "Queijo", "Tomate", "Cebola", "Azeitona"]);

carrinho.adicionarPizza(pizza1);
carrinho.adicionarPizza(pizza2);
carrinho.adicionarPizza(pizza3);
const pizza4 = new Pizza([ ]);
carrinho.adicionarPizza(pizza4);

console.log(`Total do carrinho: R$ ${carrinho.obterTotal().toFixed(2)}`);
console.log("Lista de preços das pizzas no carrinho:", carrinho.obterListaPrecos());
console.log(`Pizza premium - quantidade de ingredientes: ${carrinho.obterPizzasPremium().length}`);
console.log(`Ingredientes da pizza premium:`, carrinho.obterIngredientesPorPizzaPremium());