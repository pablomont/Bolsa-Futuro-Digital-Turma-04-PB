import { Carrinho } from "./carrinho.js";
import { Pizza } from "./pizza.js";


const pizza1 = new Pizza("Calabresa", ["calabresa", "queijo", "molho"], 15);
const pizza2 = new Pizza("Mussarela", ["queijo", "molho"], 20);
const pizza3 = new Pizza("Trufada", ["queijo", "calabresa", "azeite"], 23);


const carrinho = new Carrinho();

carrinho.adicionarPizza(pizza1);
carrinho.adicionarPizza(pizza2);
carrinho.adicionarPizza(pizza3);


console.log("Lista de preços:", carrinho.obterListaPrecos());



const pizzasPremium = carrinho.obterPizzasPremium();
console.log(
  "Quantidade de ingredientes da pizza premium:",
  pizzasPremium[0].ingredientes.length
);



const ingredientesPremium = carrinho.obterIngredientesPorPizzaPremium();
console.log("Ingredientes das pizzas premium:", ingredientesPremium);



console.log(
  "Teste repetido (ingredientes premium):",
  carrinho.obterIngredientesPorPizzaPremium()
);
