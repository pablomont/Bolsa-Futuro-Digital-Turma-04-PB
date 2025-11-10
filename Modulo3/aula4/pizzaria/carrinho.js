export class Carrinho {
    pizzas = [];
    adicionarPizza(pizza) {
        if (pizza.ingredientes.length > 0) {
            this.pizzas.push(pizza);
        }
        else {
            console.log("Não é possível adicionar pizza sem ingredientes!");
        }
    }
    obterTotal() {
        let Total = 0;
        for (const pizza of this.pizzas) {
            Total += pizza.calcularPreco();
        }
        return Total;
    }
    obterListaPrecos() {
        return this.pizzas.map((pizza) => pizza.calcularPreco());
    }
    obterPizzasPremium() {
        return this.pizzas.filter((pizza) => pizza.calcularPreco() >= 23);
    }
    obterIngredientesPorPizzaPremium() {
        return this.pizzas
            .filter((pizza) => pizza.calcularPreco() >= 23)
            .map((pizza) => pizza.ingredientes);
    }
}
//# sourceMappingURL=carrinho.js.map