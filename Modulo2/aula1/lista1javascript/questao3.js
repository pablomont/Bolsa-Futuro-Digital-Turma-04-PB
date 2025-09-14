/*function numPar(num){
    return num%2 === 0;
}

console.log(numPar(4));
console.log(numPar(7));
*/
// Ver se é par

function numeroPar(num) {
  if (num % 2 === 0) {
    console.log(`O número ${num} é par`);
  } else {
    console.log(`O número ${num} é ímpar`);
  }
}

numeroPar(4);  
numeroPar(7);  