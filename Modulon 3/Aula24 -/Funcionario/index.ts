/*class Empregado{
 idade?: number
 salario?: number = 0

  liquido(){
     return this.salario = 0.25
 }
}

class Gerente extends Empregado{
 bonus?: number = 0

 demitir(){}

 liquido(){
     return super.salario() = 0.05 + this.bonus
 }
}

const gerente = new Empregado()
gerente.liquido
*/

class Empregado{
    construtor(public nome:string ,
        public idade:number,
        public salario: number
    ){}
}

class Gerente extends Empregado{
    construtor( public bonus: number ){
        super()
    }
}