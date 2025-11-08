import { Pizza } from './pizza.js'

export class Carrinho {
      pizzas: Pizza[] = [];
      
      adicionarPizza (pizza: Pizza){
        if (pizza.ingredientes.length > 0){
            this.pizzas.push(pizza);
            console.log('Pizza adicionada ao carrinho')
        } else {
            console.log('Não é possível adiconar pizza sem ingredientes!')
        }
      }

      obterTotal (): number{
        let total = 0
        for (const pizza of this.pizzas){
            total += pizza.calcularPreco();
        }
        return total;
      }

//um novo array contendo apenas o preço de cada pizza. map + arrow
      obterListasPrecos(): number[]{
        return this.pizzas.map(pizza => pizza.preco);
      }
//Retornar um novo array contendo apenas as pizzas "Premium: R$23". filter + arrow
      obterPizzasPremium(): Pizza []{
       return this.pizzas.filter(pizza => pizza.preco > 23);

      }
//a lista de ingredientes apenas das pizzas que são Premium. filter + map
      obterIngredientesPorPizzaPremium(): string[][]{
        return this.pizzas
        .filter(pizza => pizza.preco > 23)
        .map(pizza => pizza.ingredientes);
      }
}