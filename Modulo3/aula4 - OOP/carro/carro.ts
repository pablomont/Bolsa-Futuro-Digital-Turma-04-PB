import { Painel } from "./painel/painel"
import { motor } from "./motor/motor"

class Carro {

    constructor(private nome: string = "", private potencia: number = 0, private velocidade: number = 0, private Painel:Painel, private Motor:motor){

    }

    getVelocidade(){
        return this.velocidade
    }

    atualizarVelocidade(){
        this.velocidade = this.Motor.acelerar(this.velocidade, this.potencia)
    }

    reduzirVelocidade(){
        this.velocidade = this.Motor.frear(this.velocidade) 
    }
 
    exibirVelocidadeAtual(){
        this.Painel.exibir(this.velocidade)
    }
}

const fusca = new Carro("fusca 1988", 2, 0, new Painel(), new motor())

fusca.atualizarVelocidade()
fusca.atualizarVelocidade()
fusca.atualizarVelocidade()
fusca.exibirVelocidadeAtual() 

const ferrari = new Carro("Ferraro GTB", 15, 0, new Painel(), new motor())

ferrari.atualizarVelocidade()
ferrari.reduzirVelocidade()
ferrari.reduzirVelocidade()
ferrari.exibirVelocidadeAtual()

if(ferrari.getVelocidade() > fusca.getVelocidade()){
    console.log('A velocidade da ferrari é maior')
} else {
    console.log('A velocidade do fusca é maior')
}