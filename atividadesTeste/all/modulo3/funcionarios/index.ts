// class Empregado {
//     idade: number
//     salario: number

//     constructor(idade: number, salario: number){}

//     salarioLiquido(){
//         return this.salario * 0.8
//     }

// }

// class Gerente extends Empregado {
//     bonus: number = 0

//     demitir(nome: string){
//         console.log(`O funcionário ${nome} foi demitido`)
//     }
//     salarioLiquido(){
//         return super.salarioLiquido() + this.bonus;
//     }

// }

// const gerente = new Gerente(29, 1800)
// gerente.bonus = 300


class Empregado {
    constructor(public nome: string, public idade: number, public salario: number){}
}
class Gerente extends Empregado {
    constructor(public bonus: number){
        super()
    }
}