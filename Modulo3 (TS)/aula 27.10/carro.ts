import { Painel } from "./painel.js";
class Carro {
    constructor(private nome: string, protected potencia: number,
        protected _velocidade: number, public painel: Painel) { }
    //criando comportamentos da classe: funções/métodos

    acelerar() {
        this._velocidade += this.potencia;
    }

    frear() {
        this._velocidade *= 0.5 //velocidade = velocidade * 0.5
    }

    get velocidade() {
        return this._velocidade;
    }

    set velocidade(valor: number) {
        this._velocidade = valor;
    }
}

class CarroEsportivo extends Carro {
    constructor(nome: string, potencia: number, velocidade: number, painel: Painel) {
        super(nome, potencia, velocidade, painel)
    }

    acelerar() {
        this.velocidade += this.potencia * 2;
    }
}

const fusca = new Carro("Fusca 1988", 2, 0, new Painel())
const fuscaEsportivo = new CarroEsportivo("Fusca Turbo", 2, 0, new Painel())


//class Motor {
//constructor(public potencia: number) {
//this.potencia = potencia;
//}

//aumentaVelocidade(velocidadeAtual: number): number {
//return velocidadeAtual + this.potencia;
//}
//}

//const fusca = new Carro("Fusca 1988", 0, new Painel(), new Motor(2))
fusca.acelerar()
fusca.acelerar()
fusca.acelerar()

fuscaEsportivo.acelerar()
fuscaEsportivo.acelerar()
fuscaEsportivo.acelerar()

fusca.painel.exibir(fusca.velocidade)
fuscaEsportivo.painel.exibir(fuscaEsportivo.velocidade)


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