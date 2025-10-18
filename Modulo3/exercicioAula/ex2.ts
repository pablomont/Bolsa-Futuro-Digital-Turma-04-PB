class Paciente{
    constructor(public quilos:number, public altura:number){}

    CalcularIMC(){
        const imc = this.quilos / (this.altura * this.altura)
        return imc
    }

    Diagnostico(){
        const imc = this.CalcularIMC()
        var not:string

        if(imc < 16){
            not = 'Baixo peso muito grave'
        } else if (imc < 17){
            not = 'Baixo peso grave'
        } else if (imc < 18.50){
            not = 'Baixo peso'
        } else if (imc < 25){
            not = 'Peso normal'
        } else if (imc < 30){
            not = 'Sobrepeso'
        } else if (imc < 35){
            not = 'Obesidade grau I'
        } else if (imc < 40){
            not = 'Obesidade grau II'
        } else{
            not = 'Obesidade grau II (mórbida)'
        }
        return not
    }

}
const Paciente1 = new Paciente(70, 1.75)
console.log(Paciente1.Diagnostico())
console.log(Paciente1.CalcularIMC())

const Paciente2 = new Paciente(60, 1.95)
console.log(Paciente2.Diagnostico())
console.log(Paciente2.CalcularIMC())

const Paciente3 = new Paciente(1100, 1.70)
console.log(Paciente3.Diagnostico())
console.log(Paciente3.CalcularIMC())
