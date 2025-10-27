import { Painel } from "./painel/painel"

class Carro {

    constructor(private nome: string = "", private potencia: number = 0, private velocidade: number = 0, private Painel:Painel){

    }

    getVelocidade(){
        return this.velocidade
    }

    acelerar(){
        this.velocidade += this.potencia // velocidade = velocidade + potencia
    }

    frear(){
        this.velocidade *= 0.5 // velocidade = velocidade * 0.5
    }
 
    exibirVelocidadeAtual(){
        this.Painel.exibir(this.velocidade)
    }
}

const fusca = new Carro("fusca 1988", 2, 0, new Painel())

fusca.acelerar()
fusca.acelerar()
fusca.acelerar()
fusca.exibirVelocidadeAtual() 

const ferrari = new Carro("Ferraro GTB", 15, 0, new Painel())

ferrari.acelerar()
ferrari.frear()
ferrari.frear()
ferrari.exibirVelocidadeAtual()

if(ferrari.getVelocidade() > fusca.getVelocidade()){
    console.log('A velocidade da ferrari é maior')
} else {
    console.log('A velocidade do fusca é maior')
}