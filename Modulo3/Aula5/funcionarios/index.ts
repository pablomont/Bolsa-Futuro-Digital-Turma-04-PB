   /*class Empregado{
    idade?: number
    salario: number = 0

    liquido(){
        return this.salario * 0.87
    }
}

class Gerente extends Empregado{
    bonus: number

    demitir(){}

    liquido(){
        return super.liquido()+ this.bonus
    }
}

const gerente = new Gerente()
gerente.liquido()*/

class Empregado{
    constructor(public nome?: string,
    public idade?: number,
    public salario?: number,
    ){}

}

class Gerente extends Empregado {
    constructor(public bonus: number){
        super()

    }
}