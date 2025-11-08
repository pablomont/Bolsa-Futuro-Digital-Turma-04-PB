"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var pizza_js_1 = require("./pizza.js");
var carrinho_js_1 = require("./carrinho.js");
var pizza1 = new pizza_js_1.Pizza(["queijo", "presunto"]); //15
var pizza2 = new pizza_js_1.Pizza(["queijo", "presunto", "tomate"]); //20
var pizza3 = new pizza_js_1.Pizza(["queijo", "presunto", "azeitona", "cebola", "milho"]); //23
var pizza4 = new pizza_js_1.Pizza([]); //Erro
var carrinho = new carrinho_js_1.Carrinho();
carrinho.adicionarPizza(pizza1);
carrinho.adicionarPizza(pizza2);
carrinho.adicionarPizza(pizza3);
carrinho.adicionarPizza(pizza4);
console.log("Total do carrinho: R$ ".concat(carrinho.obterTotal()));
