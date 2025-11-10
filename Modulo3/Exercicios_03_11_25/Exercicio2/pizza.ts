export class Pizza{

    constructor(private _ingredientes: string[]){}

    get ingredientes(){
        return this._ingredientes
    }

    calcularPreco(): number{

        const totalIngredientes = this._ingredientes.length;

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