export class Pizza{

    public ingredientes : string[];


    constructor(ingredientes: string[]){
        this.ingredientes = ingredientes;
    }

    calcularPreco(): number{

        const totalIngredientes = this.ingredientes.length;

        if(totalIngredientes <= 2){
            return 15;
        }

        else if(totalIngredientes > 2 && totalIngredientes <= 5){
            return 20;
        }

        else{
            return 23;
        }   
    }
}