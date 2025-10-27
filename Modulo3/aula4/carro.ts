import { Painel } from "./painel"
class Carro {
    constructor(
        public nome: string ,
        public motor: Motor,
        public velocidade: number,
        public painel: Painel

    ) { }
    acelerar() {
        this.velocidade += this.motor.aumentaVelocidade(this.velocidade)
    }

    frear() {
        this.velocidade *= 0.5
    }

}
class Motor{
    constructor(
            public potencia: number
    
        ) { }

        aumentaVelocidade(velocidade: number) {
            return velocidade += this.potencia
    }
}

const fusca = new Carro('fusca 1988', new Motor(2), 0, new Painel())

fusca.acelerar()
fusca.acelerar()
fusca.acelerar()
fusca.painel.exibir(fusca.velocidade)

const ferrari = new Carro('ferrari GTB', new Motor(15), 0, new Painel())

ferrari.acelerar()
ferrari.frear()
ferrari.frear()
ferrari.painel.exibir(ferrari.velocidade)

if (fusca.velocidade > ferrari.velocidade) {
    console.log("A velocidade atual do Fusca é maior")
} else if (ferrari.velocidade > fusca.velocidade) {
    console.log("A velocidade atual da Ferrari é maior.")
} else {
    console.log("Os dois possuem a mesma velocidade no momento.")
}