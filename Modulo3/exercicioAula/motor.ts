export class Motor{

    constructor(public potencia:number){}

    AumentaVelocidade(velocidade: number, potencia: number){
        return velocidade + potencia
    }
}