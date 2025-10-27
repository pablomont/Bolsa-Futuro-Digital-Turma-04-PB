import { Motor } from "./motor"
import { Painel } from "./painel"

class Carro{
/*     nome: string = ''
    potencia: number = 0
    velocidade: number = 0
 */
    constructor(public nome: string, public velocidade: number = 0,public painel: Painel, public motor: Motor){

    }


    acelerar(){
        this.velocidade += this.motor.potencia
    }

    frear(){
        this.velocidade *= 0.5
    }

    ExibirVelocidadeAtual(){
        console.log(`A velocidade atual do carro ${this.nome} é de ${this.velocidade} KM/H`)        
    }
}

const fusca = new Carro('Fusca 1998', 0, new Painel(), new Motor(4))
fusca.acelerar()
fusca.acelerar()
fusca.acelerar()
fusca.painel.Exibir(fusca.velocidade)

const ferrari = new Carro('Ferrari GTB', 0, new Painel, new Motor(12))
ferrari.acelerar()
ferrari.frear()
ferrari.frear()
ferrari.painel.Exibir(ferrari.velocidade)

if(fusca.velocidade > ferrari.velocidade){
    console.log("A velociddade do Fusca é maior")
} else{
    console.log("A velociddade da Ferrari é maior")
}

