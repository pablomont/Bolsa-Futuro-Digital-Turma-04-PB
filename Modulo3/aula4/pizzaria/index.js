import { Pizza } from './pizza.js';
import { Carrinho } from './carrinho.js';
const pizza1 = new Pizza(["Calabresa", "Queijo"]);
const pizza2 = new Pizza(['Frango', 'Catupiry', 'Milho']);
const pizza3 = new Pizza(["Lombo", "Bacon", "Queijo", "Tomate", "Cebola", "Oregáno"]);
const pizza4 = new Pizza([]);
const carrinho = new Carrinho();
console.log("Fazendo pedido...");
carrinho.adicionarPizza(pizza1);
carrinho.adicionarPizza(pizza2);
carrinho.adicionarPizza(pizza3);
console.log(`Valor total do pedido: R$${carrinho.obterTotal()}`);
console.log(`A lista de preços do seu pedido: ${carrinho.obterListaPrecos()}`);
console.log(`Pizza premium - quantidade de ingredientes: ${carrinho.obterPizzasPremium()}`);
carrinho.adicionarPizza(pizza4);
//# sourceMappingURL=index.js.map