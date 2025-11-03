"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
class Empregado {
    nome;
    idade;
    salario;
    constructor(nome, idade, salario) {
        this.nome = nome;
        this.idade = idade;
        this.salario = salario;
    }
}
class Gerente extends Empregado {
    bonus;
    constructor(bonus) {
        super();
        this.bonus = bonus;
    }
} // construtores com herança
//# sourceMappingURL=index.js.map