export class Pizza {
    public ingredientes: string[];
    constructor(ingredientes: string[]) {
        this.ingredientes = ingredientes;
    }

    calculaPreco(): number {
        const totalDeIngredientes = this.ingredientes.length;

        if (totalDeIngredientes <= 2) {
            return 15.00;
        } 
        else if (totalDeIngredientes <= 5) {
            return 20.00;
        } 
        else {
            return 23.00;
        }
    }
}