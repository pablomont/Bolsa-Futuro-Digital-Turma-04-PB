class Paciente {
    peso: number;
    altura: number;

    constructor(peso: number, altura: number){
        this.peso = peso;
        this.altura = altura;
    }

    calcularIMC(): number {
        return this.peso/ (this.altura * this.altura)
    }
    diagnostico(): string {
        const imc = this.calcularIMC();

        if ( imc < 16) {
            return "Baixo peso muito grave";
        } else if (imc >= 16 && imc <= 16.99) {
            return "Baixo peso grave";
        } else if (imc >= 17 && imc <= 18.49){
            return "Baixo peso";
        } else if (imc >= 18.50 && imc <= 24.99){
            return "Peso normal";
        } else if (imc >= 25 && imc <= 29.99){
            return "Sobrepeso";
        } else if (imc >= 30 && imc <=34.99){
            return "Obesidade grau I";
        } else if (imc >= 35 && imc <=39.99){
            return "Obesidade grau II";
        } else {
            return "Obesidade grau III";
        }
    }
}

const p1 = new Paciente(50, 1.65);
const p2 = new Paciente(80,1.70);
const p3 = new Paciente(180, 1.75);

// Mostrar o resultado
console.log("Paciente 1:", p1.diagnostico());
console.log("Paciente 2:", p2.diagnostico());
console.log("Paciente 3:", p3.diagnostico());
