"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var carrinho_js_1 = require("./carrinho.js");
var pizza_js_1 = require("./pizza.js");
var pizza1 = new pizza_js_1.Pizza(['Calabreza', 'Queijo']);
var pizza2 = new pizza_js_1.Pizza(["Frango", "Catupiry", "Milho"]);
var pizza3 = new pizza_js_1.Pizza(["Lombo", "Bacon", "Queijo", "Tomate", "Cebola", "Orégano"]);
var pizza4 = new pizza_js_1.Pizza([]);
var carrinho = new carrinho_js_1.Carrinho();
carrinho.adicionarPizza(pizza1);
carrinho.adicionarPizza(pizza2);
carrinho.adicionarPizza(pizza3);
carrinho.adicionarPizza(pizza4);
// Lista Precos
var listaPrecos = carrinho.pizzas.map(function (Pizza) { return Pizza.calculaPreco(); });
console.log("Lista Precos:", listaPrecos);
// const pizzasPremium2 = listaPrecos((n) => n > 22)
// const pizzasPremium = carrinho.pizzas.filter((n) => n > 22)
