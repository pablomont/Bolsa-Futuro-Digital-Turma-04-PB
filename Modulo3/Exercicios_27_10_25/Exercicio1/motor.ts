export class motor{

    private potencia: number;

    constructor(potencia: number){
        this.potencia = potencia;
    }

    aumentarVelocidade(velocidade: number){
        return velocidade += this.potencia;
    }
}