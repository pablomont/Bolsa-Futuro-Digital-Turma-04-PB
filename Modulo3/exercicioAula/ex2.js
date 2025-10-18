var Paciente = /** @class */ (function () {
    function Paciente(quilos, altura) {
        this.quilos = quilos;
        this.altura = altura;
    }
    Paciente.prototype.CalcularIMC = function () {
        var imc = this.quilos / (this.altura * this.altura);
        return imc;
    };
    Paciente.prototype.Diagnostico = function () {
        var imc = this.CalcularIMC();
        var not;
        if (imc < 16) {
            not = 'Baixo peso muito grave';
        }
        else if (imc < 17) {
            not = 'Baixo peso grave';
        }
        else if (imc < 18.50) {
            not = 'Baixo peso';
        }
        else if (imc < 25) {
            not = 'Peso normal';
        }
        else if (imc < 30) {
            not = 'Sobrepeso';
        }
        else if (imc < 35) {
            not = 'Obesidade grau I';
        }
        else if (imc < 40) {
            not = 'Obesidade grau II';
        }
        else {
            not = 'Obesidade grau II (mórbida)';
        }
        return not;
    };
    return Paciente;
}());
var Paciente2 = new Paciente(60, 1.95);
console.log(Paciente2.Diagnostico());
console.log(Paciente2.CalcularIMC());
var Paciente1 = new Paciente(70, 1.75);
console.log(Paciente1.Diagnostico());
console.log(Paciente1.CalcularIMC());
var Paciente3 = new Paciente(1100, 1.70);
console.log(Paciente3.Diagnostico());
console.log(Paciente3.CalcularIMC());
