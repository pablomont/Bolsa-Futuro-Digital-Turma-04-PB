import { Painel } from "./painel";
import { Motor } from "./motor";

class Carro {

    constructor(public nome: string, public velocidade: number,
        public painel: Painel, public motor: Motor){}

    acelerar(){
        //o carro delega a tarefa de aumentar a velocidade ao motor
        this.velocidade = this.motor.aumentaVelocidade(this.velocidade);
    }

    frear(){
        this.velocidade *= 0.5 // velocidade = velocidade * 0.5
    }
}
// criando o carro e testando
const fusca = new Carro('fusca 1988',0, new Painel(), new Motor(2));

fusca.acelerar()
fusca.acelerar()
fusca.acelerar()
fusca.frear()

fusca.painel.exibir(fusca.velocidade) 