import { Painel } from "./painel.js";
class Carro {
    constructor(public nome: string, public velocidade: number, public painel: Painel, public motor: Motor) {
    }
    //criando comportamentos da classe: funções/métodos

    acelerar() {
        this.velocidade = this.motor.aumentaVelocidade(this.velocidade);
    }

    frear() {
        this.velocidade *= 0.5 //velocidade = velocidade * 0.5
    }


}

class Motor {
    constructor(public potencia: number) {
        this.potencia = potencia;
    }

    aumentaVelocidade(velocidadeAtual: number): number {
        return velocidadeAtual + this.potencia;
    }
}

const fusca = new Carro("Fusca 1988", 0, new Painel(), new Motor(2))
fusca.acelerar()
fusca.acelerar()
fusca.acelerar()
fusca.painel.exibir(fusca.velocidade)

//const ferrari = new Carro("Ferrari GTB", 15, 0, new Painel())
//ferrari.acelerar()
//ferrari.frear()
//ferrari.frear()



//if (fusca.velocidade > ferrari.velocidade) {
//    console.log(`A velocidade atual do fusca é maior que a da ferrari`)
//} else if (ferrari.velocidade > fusca.velocidade) {
//   console.log(`A velocidade atual da ferrari é maior que a do fusca`)
//} else {
//    console.log(`As velocidades dos dois carros são iguais`)
//}