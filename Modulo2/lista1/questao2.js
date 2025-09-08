
function verificarTruthy(valor) {
  if (valor) {
    return 'É Truthy';
  } else {
    return 'É Falsy';
  }
}

console.log(verificarTruthy(true));       
console.log(verificarTruthy(false));      
