// class Empregado{
//     idade?: number
//     salario?: number

//     liquido(){
//         return this.salario * 0.86
//     }
// }

// class Gerente extends Empregado{
//     bonus: number = 0

//     demitir(){}

//     liquido(){
//         return super.liquido() + this.bonus
//     }
// }

class Empregado{
    constructor(public nome?: string,
        public idade?: number,
        public salario?: number
    ){}
}

class Gerente extends Empregado{
    constructor(public bonus: number){
        super()
    }
}