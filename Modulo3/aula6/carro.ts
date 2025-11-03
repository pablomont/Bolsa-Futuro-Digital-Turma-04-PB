import { Painel } from "./painel.js";

class Carro {

    constructor(private nome: string, protected potencia: number, protected _velocidade: number,
        public painel: Painel){}

    acelerar(){
        
        this._velocidade += this.potencia //velocidade = velocidade + potencia
    }

    frear(){
        this._velocidade *= 0.5 // velocidade = velocidade * 0.5
    }

    get velocidade(){ // modificador de acesso/acessor de propriedade
        return this._velocidade
    }

    set velocidade(valor: number){ // modificador de acesso/acessor de propriedade
        this._velocidade = valor
    }
}

class CarroEsportivo extends Carro{
    constructor(nome: string, potencia: number, velocidade: number,
        painel: Painel){
            super(nome, potencia, velocidade, painel)
        }
    acelerar(){  
        this.velocidade += this.potencia * 2 //velocidade = velocidade + potencia
    }
}


// criando o carro e testando
const fusca = new Carro('fusca 1988',2,0, new Painel());
const fuscaEsportivo = new CarroEsportivo('fusca 1988',2,0, new Painel())

fusca.acelerar()
fusca.acelerar()
fusca.acelerar()

fuscaEsportivo.acelerar()
fuscaEsportivo.acelerar()
fuscaEsportivo.acelerar()
fusca.painel.exibir(fusca.velocidade)
fuscaEsportivo.painel.exibir(fuscaEsportivo.velocidade)  