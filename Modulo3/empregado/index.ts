class Empregado {
    protected nome?: string;
    protected idade?: number;
    protected salario: number = 0;

    constructor (nome:string, idade:number, salario:number){
        this.nome = nome;
        this.idade = idade;
        this.salario = salario;  
    }

    liquido(): number{
        return this.salario * 0.85;
    }
}

class Gerente extends Empregado {
    private bonus: number = 0;

    constructor(nome:string = "", idade: number = 0, salario: number = 0, bonus:number =){
        super(nome, idade, salario);
        this.bonus = bonus;
    }

    demitir(){

    }

    liquido(): number {
        return super.liquido() + this.bonus;
    }    
}

const gerente = new Gerente();


gerente.liquido()