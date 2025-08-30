let nota1, nota2, media;

nota1 = parseFloat(prompt("Informe a nota 1:"));
nota2 = parseFloat(prompt("Informe a nota 2:"));

media = (nota1 + nota2) / 2;

if (media >= 7) {
    alert("Aprovado");
} else {
    alert("Reprovado");
}