import { Pizza } from "./pizza";
import { Carrinho } from "./carrinho";

// Criando pizzas
const pizza1 = new Pizza(["Calabresa", "Queijo"]); // 15
const pizza2 = new Pizza(["Frango", "Catupiry", "Milho"]); // 20
const pizza3 = new Pizza(["Lombo", "Bacon", "Queijo", "Tomate", "Cebola", "Orégano"]); // 23
const pizza4 = new Pizza([]); // Inválida

// Criando o carrinho e adicionando pizzas
const carrinho = new Carrinho();
carrinho.adicionarPizza(pizza1);
carrinho.adicionarPizza(pizza2);
carrinho.adicionarPizza(pizza3);
carrinho.adicionarPizza(pizza4); // Deve exibir mensagem de erro

// Exibindo o total
console.log(`\nTotal do Carrinho: R$ ${carrinho.obtemTotal()}`);