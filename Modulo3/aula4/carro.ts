class Carro{
    constructor(
        public potencia: number = 0, 
        public velocidade: number = 0,
        public nome: string = ''
    ){}
        acelerar(){
            this.velocidade += this.potencia
        }

        frear(){
            this.velocidade *= 0.5
        }

        exibirVelocidadeAtual(){
            console.log(`A velocidade atual do carro ${this.nome} é de ${this.velocidade} km/h.`)
        }
}

const fusca = new Carro()
fusca.nome = 'fusca 1988'
fusca.potencia = 2

fusca.acelerar()
fusca.acelerar()
fusca.acelerar()
fusca.exibirVelocidadeAtual()

const ferrari = new Carro()
ferrari.nome = 'Ferrari GTB'
ferrari.potencia = 15

ferrari.acelerar()
ferrari.frear()
ferrari.frear()
ferrari.exibirVelocidadeAtual()

if (fusca.velocidade > ferrari.velocidade){
    console.log("A velocidade atual do Fusca é maior")
} else if (ferrari.velocidade > fusca.velocidade){
    console.log("A velocidade atual da Ferrari é maior.")
}else{
    console.log("Os dois possuem a mesma velocidade no momento.")
}