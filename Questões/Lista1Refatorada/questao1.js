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

function verificarConceito(media) {
  if (media >= 9.0 && media <= 10.0) {
    return "A";
  } else if (media >= 7.0 && media <= 8.9) {
    return "B";
  } else if (media >= 5.0 && media <= 6.9) {
    return "C";
  } else if (media >= 3.0 && media <= 4.9) {
    return "D";
  } else if (media >= 0.0 && media <= 2.9) {
    return "F";
  } else {
    return "NAO SE APLICA.";
  }
}

//4ª
function exibirResultado(media, situacao, conceito) {
  console.log("\n=== MODO DE EXIBIÇÃO ===\n1- SIMPLES\n2- DETALHADO\n3-CONCEITO");
  const escolha = prompt("Escolha o modo de exibição (1, 2 ou 3): ");

  if (escolha === "1") {
    console.log(`\nSituação: ${situacao}`);
    } else if (escolha === "2") {
    console.log(`\nMédia: ${media}`);
    console.log(`Situação: ${situacao}`);
    }
    else if (escolha === "3"){
    console.log(`Conceito - ${conceito}`)
    }
    else {
    console.log("Opção inválida.");
  }
}

//5ª
function main() {
  const media = calcularMedia()
  
  const criterios = obterCriterios();
  const conceito = verificarConceito(media)
  const situacao = verificarSituacao(media, criterios.notaAprovacao, criterios.notaRecuperacao);
  exibirResultado(media, situacao, conceito);
  console.log("OEPRAÇÃO FINALIZADA\n")
}

main()
main()
main()