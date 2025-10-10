// OBS: istalar Biblioteca "npm install prompt-sync"
const prompt = require('prompt-sync')();

// Pergunta os dados do usuário:
const entrada = prompt("Informe as 6 notas separdas por espaço: ");
// a.Cria um array de notas
const notas = entrada.split(" ").map(Number);
// b.Desestrutura as notas para variáveis individuais
const [nota1, nota2, nota3, nota4, nota5, nota6] = notas;
// c.EXTRA: Verifica se há exatamente 6 números válidos
if (notas.length !== 6 || notas.some(isNaN)) {
  console.log("Entrada inválida! Digite exatamente 6 números separados por espaço.");
  process.exit();
}

// Media: nota 1,2,3,4,5,6 são os parâmetros
function calcularMedia(nota1, nota2, nota3, nota4,nota5, nota6) {
    const media1 = (nota1 + nota2) / 2;
    const media2 = (nota3 + nota4) / 2;
    const media3 = (nota5 + nota6) / 2;
    return {media1, media2, media3};
}
let {media1, media2, media3} = calcularMedia(nota1, nota2,nota3, nota4, nota5, nota6);

// Aprovação
function aprovaçao(media){
if (media >= 7) return "Aprovado";
if (media >= 5) return "Recuperação";
return "Reprovado";
}

// Mostra o resultado
console.log(`Aluno a: ${media1}, ${aprovaçao(media1)}`)
console.log(`Aluno b: ${media2}, ${aprovaçao(media2)}`)
console.log(`Aluno c: ${media3}, ${aprovaçao(media3)}`)