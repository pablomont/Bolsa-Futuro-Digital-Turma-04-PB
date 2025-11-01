class Empregado{
    idade?: number
    salario: number = 0

    liquido(){
        return this.salario * 0.85
    }
}

class Gerente extends Empregado{
    bonus: number

    demitir(){}

    liquido(){
        return this.salario * 0.85 + this.bonus
    }
}

const gerente = new Gerente()
gerente.liquido()