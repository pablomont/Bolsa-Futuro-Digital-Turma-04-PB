var Paciente = /** @class */ (function () {
    function Paciente(peso, altura) {
        this.peso = peso;
        this.altura = altura;
    }
    Paciente.prototype.calcularIMC = function () {
        this.imc = this.peso / (this.altura * this.altura);
    };
    Paciente.prototype.diagnostico = function () {
        if (this.imc < 16) {
            console.log("Baixo peso muito grave.");
        }
        else if (this.imc >= 16 && this.imc <= 16.99) {
            console.log("Baixo peso grave.");
        }
        else if (this.imc >= 17 && this.imc <= 18.49) {
            console.log("Baixo peso.");
        }
        else if (this.imc >= 18.50 && this.imc <= 24.99) {
            console.log("Peso normal.");
        }
        else if (this.imc >= 25 && this.imc <= 29.99) {
            console.log("Sobrepeso.");
        }
        else if (this.imc >= 30 && this.imc <= 34.99) {
            console.log("Obesidade grau I.");
        }
        else if (this.imc >= 35 && this.imc <= 39.99) {
            console.log("Obesidade grau II.");
        }
        else {
            console.log("Obesidade mórbida.");
        }
    };
    return Paciente;
}());
var suelle = new Paciente(55, 1.60);
console.log("\nPaciente: Suelle");
suelle.calcularIMC();
suelle.diagnostico();
var horlan = new Paciente(70, 1.80);
console.log("\nPaciente: Horlan");
horlan.calcularIMC();
horlan.diagnostico();
var maria = new Paciente(88, 1.40);
console.log("\nPaciente: Maria");
maria.calcularIMC();
maria.diagnostico();
