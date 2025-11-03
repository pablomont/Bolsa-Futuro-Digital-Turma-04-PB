export class Motor{
    acelerar(velocidade:number, potencia:number){
        return velocidade += potencia // velocidade = velocidade + potencia
    }

    frear(velocidade:number){
        return velocidade *= 0.5 // velocidade = velocidade * 0.5
    }
}