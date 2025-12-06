var Paciente = /** @class */ (function () {
    function Paciente(peso, altura) {
        this.peso = peso;
        this.altura = altura;
    }
    Paciente.prototype.calcularIMC = function () {
        return this.peso / (this.altura * this.altura);
    };
    Paciente.prototype.diagnostico = function () {
        var imc = this.calcularIMC();
        if (imc < 16) {
            return "BAIXO PESO MUITO GRAVE";
        }
        else if (16 <= imc && imc < 16.9) {
            return "BAIXO PESO GRAVE";
        }
        else if (17 <= imc && imc < 18.49) {
            return "BAIXO PESO";
        }
        else if (18.5 <= imc && imc < 24.99) {
            return "PESO NORMAL";
        }
        else if (25 <= imc && imc < 29.99) {
            return "SOBREPESO";
        }
        else if (30 <= imc && imc < 34.99) {
            return "OBESIDADE GRAU I";
        }
        else if (35 <= imc && imc < 39.99) {
            return "OBESIDADE GRAU II";
        }
        else {
            return "OBESIDADE GRAU III";
        }
    };
    return Paciente;
}());
var paciente1 = new Paciente(70, 1.75);
var paciente2 = new Paciente(95, 1.80);
var paciente3 = new Paciente(50, 1.60);
console.log("Paciente 1 - IMC: ".concat(paciente1.calcularIMC().toFixed(2), ", Diagn\u00F3stico: ").concat(paciente1.diagnostico()));
console.log("Paciente 2 - IMC: ".concat(paciente2.calcularIMC().toFixed(2), ", Diagn\u00F3stico: ").concat(paciente2.diagnostico()));
console.log("Paciente 3 - IMC: ".concat(paciente3.calcularIMC().toFixed(2), ", Diagn\u00F3stico: ").concat(paciente3.diagnostico()));
