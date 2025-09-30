function gangorra(P1, C1, P2, C2) {
    if (P1 < 10 || P1 > 100 || 
        C1 < 10 || C1 > 100 || 
        P2 < 10 || P2 > 100 || 
        C2 < 10 || C2 > 100) {
        return "Valores fora das restrições!";
    }

    let ladoEsquerdo = P1 * C1;
    let ladoDireito  = P2 * C2;

    if (ladoEsquerdo === ladoDireito) {
        return "A gangorra está equilibrada.";
    } else if (ladoEsquerdo > ladoDireito) {
        return "A gangorra desce para a esquerda.";
    } else {
        return "A gangorra desce para a direita.";
    }
}

// Entrada de dados com prompt
let P1 = Number(prompt("Digite o peso do lado esquerdo (P1):"));
let C1 = Number(prompt("Digite o comprimento do lado esquerdo (C1):"));
let P2 = Number(prompt("Digite o peso do lado direito (P2):"));
let C2 = Number(prompt("Digite o comprimento do lado direito (C2):"));

alert(gangorra(P1, C1, P2, C2));
