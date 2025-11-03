import { Painel } from "./painel.js"

class Carro {
    constructor(private nome: string, protected potencia: number, 
        protected _velocidade :number, public painel: Painel){}

    acelerar(){
        this._velocidade += this.potencia
    }

    frear(){
        this._velocidade *= 0.5
    }

    get velocidade(){
        return this._velocidade
    }

}

class CarroEsportivo extends Carro{
    constructor(nome: string, potencia: number,
        velocidade: number, Painel: Painel){
            super(nome, potencia, velocidade, Painel)
        }
    acelerar(){
        this._velocidade += this.potencia * 2
    }

    frear(){
        this._velocidade *= 0.5
        
    }

}

const fusca = new Carro('fusca 1988',2,0, new Painel())
const fuscaEsportivo = new CarroEsportivo('fusca 1800', 2,0, new Painel())

fusca.acelerar()
fusca.acelerar()
fusca.acelerar()

fuscaEsportivo.acelerar()
fuscaEsportivo.acelerar()
fuscaEsportivo.acelerar()

fusca.painel.exibir(fusca.velocidade)
fuscaEsportivo.painel.exibir(fuscaEsportivo.velocidade)