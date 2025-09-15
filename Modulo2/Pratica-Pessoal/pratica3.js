// Crie um(a) método/função que receba uma matriz de inteiros e imprima o maior elemento da diagonal secundária.
// Complexidade assintótica : O(n)
function maxElem(matriz){

    maior = -Infinity
    n = matriz.length

    for(let i = 0; i < n; i++){
        if (matriz[i][n - 1 - i] > maior) maior = matriz[i][n - 1 - i]
    }

    return maior

}

matriz = [[1,3,105],[3,56,5],[99,8,7]]
max = maxElem(matriz)
console.log(max)