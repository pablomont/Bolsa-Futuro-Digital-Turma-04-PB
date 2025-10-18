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
            return "Baixo peso muito grave";
        }
        else if (imc < 17) {
            return "Baixo peso grave";
        }
        else if (imc < 18.5) {
            return "Baixo peso";
        }
        else if (imc < 25) {
            return "Peso normal";
        }
        else if (imc < 30) {
            return "Sobrepeso";
        }
        else if (imc < 35) {
            return 'Obesidade grau I';
        }
        else if (imc < 40) {
            return 'Obesidade grau II';
        }
        else {
            return 'Obesidade grau III (obesidade mórbida)';
        }
    };
    return Paciente;
}());
var p1 = new Paciente(45, 1.60);
var p2 = new Paciente(70, 1.70);
var p3 = new Paciente(120, 1.75);
console.log("Paciente 1: ".concat(p1.diagnostico()));
console.log("Paciente 2: ".concat(p2.diagnostico()));
console.log("Paciente 3: ".concat(p3.diagnostico()));
