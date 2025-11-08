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
}