
export {};

class paciente{

    public peso: number;
    public altura: number;

    constructor(peso: number, altura: number){
        this.peso = peso;
        this.altura = altura;
    }

    calcularIMC(): number{
        return this.peso / (this.altura * this.altura);
    }

    diagnostico(): string{

        if(this.calcularIMC() < 16){
            return "Baixo peso muito grave";
        }

        else if(this.calcularIMC() >= 16 && this.calcularIMC() < 16.99){
            return "Baixo peso grave";
        }

        else if(this.calcularIMC() >= 17 && this.calcularIMC() < 18.49){
            return "Baixo peso";
        }

        else if(this.calcularIMC() >= 18.5 && this.calcularIMC() < 24.99){
            return "Peso normal";
        }

        else if(this.calcularIMC() >= 25 && this.calcularIMC() < 29.99){
            return "Sobrepeso";
        }

        else if(this.calcularIMC() >= 30 && this.calcularIMC() < 34.99){
            return "Obesidade grau I";
        }

        else if(this.calcularIMC() >= 35 && this.calcularIMC() < 39.99){
            return "Obesidade grau II";
        }
        
        else {
            return "Obesidade grau III";
        }
    }
}

const paciente1 = new paciente(70, 1.75);
const paciente2 = new paciente(95, 1.82);
const paciente3 = new paciente(120, 1.60);

console.log(`Paciente 1: IMC = ${paciente1.calcularIMC().toFixed(2)}, Diagnóstico = ${paciente1.diagnostico()}`);
console.log(`Paciente 2: IMC = ${paciente2.calcularIMC().toFixed(2)}, Diagnóstico = ${paciente2.diagnostico()}`);
console.log(`Paciente 3: IMC = ${paciente3.calcularIMC().toFixed(2)}, Diagnóstico = ${paciente3.diagnostico()}`);