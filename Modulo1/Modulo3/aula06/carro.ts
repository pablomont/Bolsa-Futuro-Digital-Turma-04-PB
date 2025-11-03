import { Painel } from "./painel.js"

class Carro {

    constructor(private nome: string, protected potencia: number,
        protected _velocidade: number, public painel: Painel) { }

    acelerar() {
        this._velocidade += this.potencia
    }

    frear() {
        this._velocidade *= 0.5
    }
    get velocidade() {
        return this._velocidade

    }

    set velocidade(valor: number) {
        this._velocidade = valor
    }
}
class CarroEspostivo extends Carro {
    constructor(nome: string, potencia: number,
        velocidade: number, painel: Painel) {
        super(nome, potencia, velocidade, painel)
    }
    acelerar() {
        this.velocidade += this.velocidade * 2

    }
}
const fusca = new Carro('fusca 1988', 2, 0, new Painel())
const fuscaEspostivo = new CarroEspostivo('fusca 1988', 2, 0, new Painel())

fusca.acelerar()
fusca.acelerar()
fusca.acelerar()

fuscaEspostivo.acelerar()
fuscaEspostivo.acelerar()
fuscaEspostivo.acelerar()

fusca.painel.exibir(fusca.velocidade)
fuscaEspostivo.painel.exibir(fuscaEspostivo.velocidade)