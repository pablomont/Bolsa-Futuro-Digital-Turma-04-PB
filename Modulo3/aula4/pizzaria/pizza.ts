export class Pizza{
    constructor(public ingredientes: string[]){}
    calcularPreco(){
        if(this.ingredientes.length>=2){
            return 15;
        }else if( this.ingredientes.length<=5){
            return 20;
        }else if(this.ingredientes.length>5){
            return 23;
        }        
    }
}