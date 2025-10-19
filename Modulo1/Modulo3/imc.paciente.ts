class Paciente {
    constructor(public peso: number, public altura: number) {}

    CalcularIMC(): number {
        return this.peso / (this.altura * this.altura);
    }

    diagnostico(): string {
        const imc = this.CalcularIMC();

        if (imc < 16) return "baixo peso muito grave";
        if (imc < 17) return "baixo peso grave";
        if (imc < 18.5) return "baixo peso";
        if (imc < 25) return "peso normal"
        if (imc < 30) return "sobrepeso";
        if (imc < 35) return "obesidade grau I";
        if (imc < 40) return "obesidade grau II";
        return "obesidade grau III (mórbidade)";
    }
}
const p1 = new Paciente(45, 1.60);
const p2 = new Paciente(70, 1.75);
const p3 = new Paciente(110, 1.70);

console.log("Paciente 1:", p1.diagnostico());
console.log("Paciente 2:", p2.diagnostico());
console.log("Paciente 3:", p3.diagnostico());
 