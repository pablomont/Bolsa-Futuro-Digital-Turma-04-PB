import { Motor } from "./motor/motor.js"
import { Painel } from "./painel/painel.js"


class Carro {

    constructor(protected nome: string = "", protected potencia: number = 0, protected _velocidade: number = 0, protected painel:Painel, protected motor:Motor){

    }

    get Velocidade(){
        return this._velocidade
    }

    atualizarVelocidade(){
        this._velocidade = this.motor.acelerar(this._velocidade, this.potencia)
    }

    reduzirVelocidade(){
        this._velocidade = this.motor.frear(this._velocidade) 
    }
 
    exibirVelocidadeAtual(){
        this.painel.exibir(this._velocidade)
    }
}

class CarroEsportivo extends Carro{
    constructor(nome:string, potencia:number, velocidade:number, painel:Painel, motor:Motor){
        super(nome, potencia, velocidade, painel, motor)
    }

    atualizarVelocidade(){
        this._velocidade = this.motor.acelerar(this._velocidade, this.potencia) * 2
    }
}

const fusca = new Carro("fusca 1988", 2, 0, new Painel(), new Motor())

fusca.atualizarVelocidade()
fusca.atualizarVelocidade()
fusca.atualizarVelocidade()
fusca.exibirVelocidadeAtual() 

const ferrari = new CarroEsportivo("Ferraro GTB", 15, 0, new Painel(), new Motor())

ferrari.atualizarVelocidade()
ferrari.reduzirVelocidade()
ferrari.reduzirVelocidade()
ferrari.exibirVelocidadeAtual()

if(ferrari.Velocidade > fusca.Velocidade){
    console.log('A velocidade da ferrari é maior')
} else {
    console.log('A velocidade do fusca é maior')
}