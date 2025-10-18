class Paciente {
    peso: number;
    altura: number;

    constructor(peso: number, altura: number) {
        this.peso = peso;
        this.altura = altura;
    }

    calcularIMC(): number {
        return this.peso / (this.altura * this.altura);
    }

    diagnostico(): string {
        const imc = this.calcularIMC();
        if (imc < 16) {
            return "BAIXO PESO MUITO GRAVE";
        } else if (16 <= imc && imc < 16.9) {
            return "BAIXO PESO GRAVE";
        } else if (17 <= imc && imc < 18.49) {
            return "BAIXO PESO";
        } else if (18.5 <= imc && imc < 24.99) {
            return "PESO NORMAL";
        } else if (25 <= imc && imc < 29.99) {
            return "SOBREPESO";
        } else if (30 <= imc && imc < 34.99) {
            return "OBESIDADE GRAU I";
        } else if (35 <= imc && imc < 39.99) {
            return "OBESIDADE GRAU II";
        } else{
            return "OBESIDADE GRAU III";
        }
    }
}
const paciente1 = new Paciente(70, 1.75);
const paciente2 = new Paciente(95, 1.80);
const paciente3 = new Paciente(50, 1.60);

console.log(`Paciente 1 - IMC: ${paciente1.calcularIMC().toFixed(2)}, Diagnóstico: ${paciente1.diagnostico()}`);
console.log(`Paciente 2 - IMC: ${paciente2.calcularIMC().toFixed(2)}, Diagnóstico: ${paciente2.diagnostico()}`);
console.log(`Paciente 3 - IMC: ${paciente3.calcularIMC().toFixed(2)}, Diagnóstico: ${paciente3.diagnostico()}`);