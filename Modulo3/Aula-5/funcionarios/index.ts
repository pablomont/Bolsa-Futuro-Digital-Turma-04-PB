//class Empregado{
//    idade?: number
//    salario: number = 0
//
//    liquido(){
//        return this.salario * 0.85
//    }
//}

//class Gerente extends Empregado{
//    bonus: number = 0
//        demitir(){}
//        liquido(){
//        return this.salario * 0.85 + this.bonus
//    }
//}

//const gerente = new Gerente()
//const empregado = new Empregado()
//gerente.liquido

class Empregado{
    constructor (public nome: string,
    public idade: number,
    public salario: number){}
}

class Gerente extends Empregado{
    constructor (public bonus: number){
        super()
    }
}