import { painel } from "./painel"
import { motor } from "./motor"

class Carro {

    constructor(public nome: string, public velocidade:number
        ,public painel: painel, public motor: motor){
    }

    acelerar(){
        this.velocidade += this.motor.aumentaVelocidade(this.velocidade);
    }
    frear(){
        this.velocidade *= 0.5;
    }
    informarStatus(){
        console.log(`O carro ${this.nome} está a ${this.velocidade} km/h`)
    }
}

const fusca = new Carro("Fusca 1988", 0, new painel(), new motor(2));
fusca.acelerar();
fusca.acelerar();
fusca.acelerar();
fusca.frear();
fusca.frear();
console.log("velocidade do fusca:")
fusca.painel.exibir(fusca.velocidade)


const ferrari = new Carro("Ferrari GTB", 0, new painel(), new motor(15));
ferrari.acelerar();
ferrari.frear();
ferrari.frear();
ferrari.informarStatus();

if (ferrari.velocidade > fusca.velocidade){
    console.log(`A ferrari está mais rápida, com ${ferrari.velocidade} km/h`)
}
else{
    console.log(`O fusca está mais rápido, com ${fusca.velocidade} km/h`)
}
