import type { Pizza } from "./pizza.js";
export declare class Carrinho {
    pizzas: Pizza[];
    adicionarPizza(pizza: Pizza): void;
    obterTotal(): number;
    obterListaPrecos(): (15 | 20 | 23)[];
    obterPizzasPremium(): Pizza[];
    obterIngredientesPorPizzaPremium(): string[][];
}
//# sourceMappingURL=carrinho.d.ts.map