export class motor{
    constructor(public potencia: number){
    }
    
    aumentarVelocidade(velocidade:number){
        return velocidade += this.potencia;
    }
}