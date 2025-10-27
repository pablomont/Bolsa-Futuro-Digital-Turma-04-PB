import { Painel } from "./painel"

class Carro {

    constructor(public nome: string, public potencia: number, public velocidade: number, public Painel: Painel){}

    acelerar(){
        this.velocidade += this.potencia // velocidade = velocidade + potencia
    }

    frear(){
        this.velocidade *= 0.5 // velocidade = velocidade * 0.5
    }
 
}

const fusca = new Carro('fusca 1988', 2, 0, new Painel)

fusca.acelerar()
fusca.acelerar()
fusca.acelerar()
fusca.Painel.exibir(fusca.velocidade)

const ferrari = new Carro('Ferraro GTB', 15, 0, new Painel)

ferrari.acelerar()
ferrari.frear()
ferrari.frear()
ferrari.Painel.exibir(ferrari.velocidade)

if(ferrari.velocidade > fusca.velocidade){
    console.log('A velocidade da ferrari é maior')
} else {
    console.log('A velocidade do fusca é maior')
}