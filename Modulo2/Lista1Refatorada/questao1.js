const prompt = require("prompt-sync")();

function calcularSituacao() {
  const nota1 = parseFloat(prompt("Digite a primeira nota: "));
  const nota2 = parseFloat(prompt("Digite a segunda nota: "));

  if (nota1 < 0 || nota1 > 10 || nota2 < 0 || nota2 > 10) {
    console.log("Notas inválidas. Ambas devem estar entre 0 e 10.");
    return
  }

  const media = (nota1 + nota2) / 2;

  const notaAprovacao = parseFloat(prompt("Digite a nota mínima para aprovação: "));
  const notaRecuperacao = parseFloat(prompt("Digite a nota mínima para recuperação: "));

  let situacao = "";

  if (media >= notaAprovacao) {
    situacao = "APROVADO";
  } else if (media >= notaRecuperacao) {
    situacao = "RECUPERAÇÃO";
  } else {
    situacao = "REPROVADO";
  }

  console.log("\n=== MODO DE EXIBIÇÃO ===\n1- SIMPLES\n2- DETALHADO");
  const escolha = prompt("Escolha o modo de exibição (1 ou 2): ");

  if (escolha === "1") {
    console.log(`\nSituação: ${situacao}`);
  } else if (escolha === "2") {
    console.log(`\nMédia: ${media}`);
    console.log(`Situação: ${situacao}`);
  } else {
    console.log("Opção de exibição inválida.");
  }
}


for (let i = 1; i <= 3; i++){
    console.log(`\n=== ALUNO ${i} ===`)
    calcularSituacao();
}
