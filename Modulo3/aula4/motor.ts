export class Motor{
    constructor(
            public potencia: number
    
        ) { }

        aumentaVelocidade(velocidade: number) {
            return velocidade += this.potencia
    }
}