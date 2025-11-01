class Paciente {
    nome: string
    potencia: number = 0;
    velocidade: number = 0;

    exibirVelocidadeAtual (){
        console.log(`A velocidade atual do carro ${this.nome} é de ${this.velocidade}`);
    }
}

const paciente1 = new Carro()
fusca.nome = "Fusca 1998";
fusca.potencia = 2;

fusca.exibirVelocidadeAtual();

const paciente2 = new Carro()
ferrari.nome = "Ferrari GTB";
ferrari.potencia = 15;

const paciente3 = new Carro()
ferrari.nome = "Ferrari GTB";
ferrari.potencia = 15;

ferrari.exibirVelocidadeAtual();

// Função Imc
function calcularIMC(peso, altura) {
    const imc = peso / (altura ** 2);
    return imc;
}

let imc = calcularIMC(peso, altura);


// Função Imc
function calcularMedia(peso1, peso2, nota3, nota4,nota5, nota6) {
    const imc1 = peso1 / (altura1 **2);
    const imc2 = peso2 / (altura2 **2);
    const imc3 = peso3 / (altura3 **2);
    return media1, media2, media3;
}

let media1 = calcularMedia(nota1, nota2);
let media2 = calcularMedia(nota3, nota4);
let media3 = calcularMedia(nota5, nota6);

// Mostra o resultado
console.log(`Sua media é ${media1}`);
console.log(`Sua media é ${media2}`);
console.log(`Sua media é ${media3}`);

// Aprovação

if (media1 >= 7) {
    console.log("Aprovado\n");
} else if (media1 >= 5) {
    console.log("Recuperação\n");
} else {
    console.log("Reprovado\n");
}

if (media2 >= 7) {
    console.log("Aprovado\n");
} else if (media2 >= 5) {
    console.log("Recuperação\n");
} else {
    console.log("Reprovado\n");
}

if (media3 >= 7) {
    console.log("Aprovado\n");
} else if (media3 >= 5) {
    console.log("Recuperação\n");
} else {
    console.log("Reprovado\n");
}