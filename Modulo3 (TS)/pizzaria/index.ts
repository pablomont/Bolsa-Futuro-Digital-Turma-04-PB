import { Pizza } from "./pizza.js";
import { Carrinho } from "./carrinho.js";


const pizza1 = new Pizza(["Calabresa", "Queijo"]);
const pizza2 = new Pizza(["Frango", "Catupiry", "Milho"]);
const pizza3 = new Pizza(["Lombo", "Bacon", "Queijo", "Tomate", "Cebola", "Orégano"]);


const carrinho = new Carrinho();
carrinho.adicionarPizza(pizza1);
carrinho.adicionarPizza(pizza2);
carrinho.adicionarPizza(pizza3);


const pizza4 = new Pizza([]);
carrinho.adicionarPizza(pizza4); 


const total = carrinho.obterTotal();
console.log(`O total do carrinho é: R$ ${total},00`);