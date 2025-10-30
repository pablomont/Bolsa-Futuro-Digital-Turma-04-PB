"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var pizza_js_1 = require("./pizza.js");
var carrinho_js_1 = require("./carrinho.js");
var pizza1 = new pizza_js_1.Pizza(["Calabresa", "Queijo"]); // Deve custar 15
var pizza2 = new pizza_js_1.Pizza(["Frango", "Catupiry", "Milho"]); // Deve custar 20
var pizza3 = new pizza_js_1.Pizza(["Lombo", "Bacon", "Queijo", "Tomate", "Cebola", "Orégano"]); // Deve custar 23
var pizza4 = new pizza_js_1.Pizza([]);
var carrinho = new carrinho_js_1.Carrinho();
carrinho.adicionarPizza(pizza1);
carrinho.adicionarPizza(pizza2);
carrinho.adicionarPizza(pizza3);
carrinho.adicionarPizza(pizza4);
console.log("Preço da pizza 1:", pizza1.calculaPreco());
console.log("Preço da pizza 2:", pizza2.calculaPreco());
console.log("Preço da pizza 3:", pizza3.calculaPreco());
console.log("Total do carrinho: R$ ".concat(carrinho.obterTotal()));
