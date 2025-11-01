export class Motor{

    constructor(public potencia: number){}

    aumentaVelocidade(velocidade: number): number{
         // A nova velocidade vai ser a velocidade atual + potência do motor
        return velocidade + this.potencia;
    }

}