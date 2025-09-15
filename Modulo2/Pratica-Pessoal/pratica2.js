// Crie um(a) método/função que receba uma matriz de inteiros e imprima o maior elemento da diagonal principal.
// Complexidade assintótica : O(n)
function max(matriz){

    maior = -Infinity
    n = matriz.length

    for(let i = 0; i < n; i++){
        if (matriz[i][i] > maior) maior = matriz[i][i]
    }
    return maior

}

matriz = [[1,3,4],[3,56,5],[8,8,7]]
max = max(matriz)
console.log(max)