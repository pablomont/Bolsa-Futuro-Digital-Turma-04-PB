class Empregado {
    protected nome?: string;
    protected idade?: number;
    protected salario: number = 0;

    liquido(): number{
        return this.salario * 0.85;
    }
}

class Gerente extends Empregado {
    private bonus: number = 0;

    demitir(){

    }

    liquido(): number {
        return super.liquido() + this.bonus;
    }    
}

const gerente = new Gerente();


gerente.liquido()