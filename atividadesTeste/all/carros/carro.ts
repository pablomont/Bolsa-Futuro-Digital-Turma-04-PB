import { painel } from "./painel.js"
import { motor } from "./motor.js"

class Carro {

    constructor(private nome: string, protected _velocidade:number
        , protected painel: painel, protected motor: motor){
    }

    exibirPainel(velocidade: number): void {
        this.painel.exibir(velocidade);
    }

    acelerar(){
        this._velocidade += this.motor.aumentarVelocidade(this._velocidade);
    }
    frear(){
        this._velocidade *= 0.5;
    }
    informarStatus(){
        console.log(`O carro ${this.nome} está a ${this._velocidade} km/h`)
    }

    get velocidade(): number {
        return this._velocidade;
    }
    set velocidade(valor: number) {
        this._velocidade = valor;
    }
}

const fusca = new Carro("Fusca 1988", 0, new painel(), new motor(2));
fusca.acelerar();
fusca.acelerar();
fusca.acelerar();
fusca.frear();
fusca.frear();
console.log("velocidade do fusca:")

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

class carroEsportivo extends Carro {
    potencia: number = 0

    constructor(nome: string, potencia: number, velocidade: number, painel: painel) {
        super(nome, velocidade, painel, new motor(potencia));
        this.potencia = potencia;
    }
    
    acelerar() {
        this.velocidade += this.potencia * 2 
    }
}

const fuscaEsportivo = new carroEsportivo("Fusca Turbo", 2, 0, new painel());
fuscaEsportivo.acelerar();
fuscaEsportivo.acelerar();
fuscaEsportivo.acelerar();
fuscaEsportivo.exibirPainel(fuscaEsportivo.velocidade);
