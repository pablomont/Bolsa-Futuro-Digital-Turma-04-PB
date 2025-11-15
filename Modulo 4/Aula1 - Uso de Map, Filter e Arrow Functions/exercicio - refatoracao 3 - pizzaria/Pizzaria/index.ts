import { Pizza } from './pizza'
import { Carrinho } from './carrinho.js'

const pizza1 = new Pizza(["queijo", "presunto"]); //15

const pizza2 = new Pizza(["queijo", "presunto","tomate"]); //20

const pizza3 = new Pizza(["queijo", "presunto", "azeitona", "cebola", "milho", "azeitona"]); //23

const pizza4 = new Pizza([]);//Erro

const carrinho = new Carrinho();
carrinho.adicionarPizza (pizza1);
carrinho.adicionarPizza (pizza2);
carrinho.adicionarPizza (pizza3);
carrinho.adicionarPizza (pizza4);

console.log(`Total do carrinho: R$ ${carrinho.obterTotal()}`)
console.log(`Preço individual de cada pizza: ${carrinho.obterListasPrecos()}`)
console.log("Pizza premium - quantidade de ingredientes:", carrinho.obterPizzasPremium().map(pizza => pizza.ingredientes.length).join(", "))
console.log(carrinho.obterIngredientesPorPizzaPremium())