/*class Empregado{
    nome ?: string;
    idade?: number;
    salario: number=0;

    liquido(){
        return this.salario*0.85; 
    }


}

class Gerente extends Empregado{
    bonus: number=0;

    liquido(){
        return  super.liquido()+this.bonus;
    }
}

const gerente =  new Gerente()
gerente.bonus;
*/
class Empregado{
    constructor(public nome?: string,
        public idade?: number,
        public salario?: number,
    ){}
}

class Gerente extends Empregado{
    constructor(public bonus:number){
        super(); 
    }
} // construtores com herança
