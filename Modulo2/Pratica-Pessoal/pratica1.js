// Crie um(a) método/função que receba um array de inteiros e imprima o menor, o maior e a média dos valores.
// Complexidade assintótica das funções: O(n)
function displayValues(array) {

  let min = Infinity;
  let max = -Infinity;
  let total = 0;

  for (let i = 0; i < array.length; i++) {
    const num = array[i];
    if (num > max) max = num;
    if (num < min) min = num;
    total += num;
  }

  const mean = total / array.length;

  return { max, min, mean };
}

function min(array){
  let min = Infinity;
  let n = array.length
  for (let i = 0; i < n; i++) {
    if (num < min) min = num;
  }

  return min
}

function max(array){

  let max = -Infinity;
  let n = array.length
  for (let i = 0; i < n; i++) {
    if (num > max) max = num;
  }

  return max;
}

function mean(array){
  let total = 0;

  for (let i = 0; i < array.length; i++) {
    const num = array[i];
    total += num;
  }

  const mean = total / array.length;

  return mean
}

array = [1, 2, 3, 4, 5]
arrayValues = displayValues(array)

console.log(`max: ${arrayValues.max}, min: ${arrayValues.min}, mean: ${arrayValues.mean}`)