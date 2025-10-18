class Paciente {
    constructor(
        public peso: number, public altura: number
    ){}

    calcularIMC(){
        return this.peso / (this.altura * this.altura)
    }

    diagnostico (){
        const imc = this.calcularIMC()
        
        if (imc < 16){
            return "Baixo peso muito grave"
        } else if (imc < 17) {
            return "Baixo peso grave"
        } else if (imc < 18.5) {
            return "Baixo peso"
        } else if (imc < 25) {
            return "Peso normal"
        } else if (imc < 30) {
            return "Sobrepeso"
        } else if (imc < 35) {
            return 'Obesidade grau I'
        } else if (imc < 40) {
            return 'Obesidade grau II'
        } else {
            return 'Obesidade grau III (obesidade mórbida)'
        }
    }
}

const p1 = new Paciente(45, 1.60)
const p2 = new Paciente(70, 1.70)
const p3 = new Paciente(120, 1.75)

console.log(`Paciente 1: ${p1.diagnostico()}`)
console.log(`Paciente 2: ${p2.diagnostico()}`)
console.log(`Paciente 3: ${p3.diagnostico()}`)

