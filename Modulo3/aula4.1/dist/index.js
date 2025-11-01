"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pizza_1 = require("./pizza");
const carrinho_1 = require("./carrinho");
// Criando pizzas
const pizza1 = new pizza_1.Pizza(["Calabresa", "Queijo"]); // 15
const pizza2 = new pizza_1.Pizza(["Frango", "Catupiry", "Milho"]); // 20
const pizza3 = new pizza_1.Pizza(["Lombo", "Bacon", "Queijo", "Tomate", "Cebola", "Orégano"]); // 23
const pizza4 = new pizza_1.Pizza([]); // Inválida
// Criando o carrinho e adicionando pizzas
const carrinho = new carrinho_1.Carrinho();
carrinho.adicionarPizza(pizza1);
carrinho.adicionarPizza(pizza2);
carrinho.adicionarPizza(pizza3);
carrinho.adicionarPizza(pizza4); // Deve exibir mensagem de erro
// Exibindo o total
console.log(`\nTotal do Carrinho: R$ ${carrinho.obtemTotal()}`);
//# sourceMappingURL=index.js.map