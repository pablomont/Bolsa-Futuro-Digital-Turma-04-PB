
export {};

import { painel } from "./painel";
import { motor } from "./motor";

class carro{

    public velocidade: number;
    public nome: string;

    constructor(public motor: motor, velocidade: number, nome: string, public painel: painel){
        this.velocidade = velocidade;
        this.nome = nome;
    }

    acelar(): number{
        return this.velocidade = this.motor.aumentarVelocidade(this.velocidade)
    }

    frear(): number{
        return this.velocidade *= 0.5;
    }

}

const fusca = new carro(new motor(2), 0, "Fusca 1988", new painel());
fusca.acelar();
fusca.acelar();
fusca.acelar();
fusca.painel.exibir(fusca.velocidade);   

const ferrari = new carro(new motor(15), 0, "Ferrari GTB", new painel());
ferrari.acelar();
ferrari.frear();
ferrari.frear();

ferrari.painel.exibir(ferrari.velocidade);

if(ferrari.velocidade > fusca.velocidade){
    console.log(`A ${ferrari.nome} está mais rápida que o ${fusca.nome}`);
} else if(ferrari.velocidade < fusca.velocidade){
    console.log(`O ${fusca.nome} está mais rápido que a ${ferrari.nome}`);
} else {
    console.log(`Os dois carros estão na mesma velocidade`);
}