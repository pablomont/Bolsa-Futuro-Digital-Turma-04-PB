class Paciente{
    constructor(
        public peso: number = 0, 
        public altura: number = 0,
        public imc: number = 0
    ){}
        calcularIMC(){
            this.imc = this.peso/(this.altura*this.altura)
        }

        diagnostico(){
            const imc = this.imc
            if (this.imc<16){
                console.log("Baixo peso muito grave.")
            } else if(16<imc && imc<16.99){
                console.log("Baixo peso grave.")
            } else if(17<imc && imc<18.49){
                console.log("Baixo peso")
            }else if(18.50<imc && imc<24.99){
                console.log("Peso normal")
            }else if (25<imc && imc<29.99){
                console.log("Sobrepeso")
            }else if(30<imc && imc<34.99){
                console.log("Obesidade grau I")
            }else if(35<imc && imc<39.99){
                console.log("Obesidade grau II")
            }else if(imc>=40){
                console.log("Obesidade grau III")
            }
        }
}

const paciente1 = new Paciente()
paciente1.peso = 100
paciente1.altura = 1.50
console.log("")
paciente1.calcularIMC()
console.log("\nPaciente 1:")
paciente1.diagnostico()

const paciente2 = new Paciente()
paciente2.peso = 150
paciente2.altura = 1,45
paciente2.calcularIMC()
console.log("\nPaciente 2:")
paciente2.diagnostico()

const paciente3 = new Paciente()
paciente3.peso = 50
paciente3.altura = 1.65
paciente3.calcularIMC()
console.log("\nPaciente 3:")
paciente3.diagnostico()