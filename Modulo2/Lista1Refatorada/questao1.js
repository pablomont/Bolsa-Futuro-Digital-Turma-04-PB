const prompt = require("prompt-sync")();

//1ª
function calcularMedia() {
  const nota1 = parseFloat(prompt("Digite a primeira nota: "));
  const nota2 = parseFloat(prompt("Digite a segunda nota: "));

  if (nota1 < 0 || nota1 > 10 || nota2 < 0 || nota2 > 10) {
    console.log("Notas inválidas. Ambas devem estar entre 0 e 10.");
    return null; 
  }

  return (nota1 + nota2) / 2;
}

//2ª
function obterCriterios() {
  const notaAprovacao = parseFloat(prompt("Digite a nota mínima para aprovação: "));
  const notaRecuperacao = parseFloat(prompt("Digite a nota mínima para recuperação: "));
  return { notaAprovacao, notaRecuperacao };
}

//3ª
function verificarSituacao(media, notaAprovacao, notaRecuperacao) {
  if (media >= notaAprovacao) {
    return "APROVADO";
  } else if (media >= notaRecuperacao) {
    return "RECUPERAÇÃO";
  } else {
    return "REPROVADO";
  }
}

//4ª
function exibirResultado(media, situacao) {
  console.log("\n=== MODO DE EXIBIÇÃO ===\n1- SIMPLES\n2- DETALHADO");
  const escolha = prompt("Escolha o modo de exibição (1 ou 2): ");

  if (escolha === "1") {
    console.log(`\nSituação: ${situacao}`);
  } else if (escolha === "2") {
    console.log(`\nMédia: ${media}`);
    console.log(`Situação: ${situacao}`);
  } else {
    console.log("Opção inválida.");
  }
}

//5ª
function main() {
  const media = calcularMedia()
  
  const criterios = obterCriterios();
  const situacao = verificarSituacao(media, criterios.notaAprovacao, criterios.notaRecuperacao);
  
  exibirResultado(media, situacao);
}

main();