import { Painel } from "./painel"

class Carro {

    constructor(public nome: string, public potencia: number, 
        public velocidade :number,public painel: Painel){}

    acelerar(){
        this.velocidade += this.potencia // velocidade = velocidade + potencia
    }

    frear(){
        this.velocidade *= 0.5 // velocidade = velocidade * 0.5
    }
}

const fusca = new Carro('fusca 1988',2,0, new Painel())

fusca.acelerar()
fusca.acelerar()
fusca.acelerar()
fusca.frear()
fusca.painel.exibir(fusca.velocidade)