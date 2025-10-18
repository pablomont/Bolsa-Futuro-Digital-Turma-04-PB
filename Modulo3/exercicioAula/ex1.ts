class Carro{
    nome: string = ''
    potencia: number = 0
    velocidade: number = 0

    acelerar(){
        this.velocidade += this.potencia
    }

    frear(){
        this.velocidade *= 0.5
    }

    ExibirVelocidadeAtual(){
        console.log(`A velocidade atual do carro ${this.nome} é de ${this.velocidade} KM/H`)        
    }
}

const fusca = new Carro()
fusca.nome = 'fusca 1998'
fusca.potencia = 2
fusca.acelerar()
fusca.acelerar()
fusca.acelerar()
fusca.ExibirVelocidadeAtual()

const ferrari = new Carro()
ferrari.nome = 'Ferarri GTB'
ferrari.potencia = 15
ferrari.acelerar()
ferrari.frear()
ferrari.frear()
ferrari.ExibirVelocidadeAtual()

if(fusca.velocidade > ferrari.velocidade){
    console.log("A velociddade do Fusca é maior")
} else{
    console.log("A velociddade da Ferrari é maior")
}
