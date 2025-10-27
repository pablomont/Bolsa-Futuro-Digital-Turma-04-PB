import { Painel } from "./painel.js";
class Carro {

    constructor (public nome: string, public potencia: number,
         public velocidade :number, public painel: Painel){}

    acelerar(){
        this.velocidade += this.potencia 
    }

    frear(){
        this.velocidade *= 0.5 
    }
}
const fusca = new Carro('fusca 1988',2,0, new Painel())


fusca.acelerar()
fusca.acelerar()
fusca.acelerar()
fusca.painel.exibir(fusca.velocidade)
