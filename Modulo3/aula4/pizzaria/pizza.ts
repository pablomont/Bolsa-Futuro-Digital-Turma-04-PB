export class Pizza{
    constructor(private _ingredientes: string[]){}
    calcularPreco(){
        if(this._ingredientes.length<=2){
            return 15;
        }else if( this._ingredientes.length>=3 && this._ingredientes.length <=5){
            return 20;
        }else{
            return 23;
        }        
    }
    get ingredientes(){
        return this._ingredientes; 
    }
}