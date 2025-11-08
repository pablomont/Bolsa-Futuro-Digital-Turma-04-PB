import { Painel } from "./painel.js"

class Carro {

    constructor(public nome: string, public motor: Motor, 
        public velocidade :number,public painel: Painel){}

    acelerar(){
        this.velocidade += this.motor.aumentaVelodciade(this.velocidade); // velocidade = velocidade + potencia
    }

    frear(){
        this.velocidade *= 0.5 // velocidade = velocidade * 0.5
    }
}

class Motor{

    constructor(public potencia: number){}

    aumentaVelodciade(velocidadeAtual: number){
    return velocidadeAtual += this.potencia
    }

}
const motorFusca = new Motor(2);
const fusca = new Carro('fusca 1988',motorFusca,0, new Painel())

fusca.acelerar()
fusca.acelerar()
fusca.acelerar()

fusca.painel.exibir(fusca.velocidade)

// const ferrari = new Carro('Ferraro GTB', 15, 0)

// ferrari.acelerar()
// ferrari.frear()
// ferrari.frear()
// ferrari.exibirVelocidadeAtual()

// if(ferrari.velocidade > fusca.velocidade){
//     console.log('A velocidade da ferrari é maior')
// } else {
//     console.log('A velocidade do fusca é maior')
// }