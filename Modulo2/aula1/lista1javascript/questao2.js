 function isTruthy(valor) {
  if (valor) {
    return true;
  } else {
    return false;
  }
}

console.log(isTruthy(false));        
console.log(isTruthy(0));
console.log(isTruthy(NaN));                                  
console.log(isTruthy(null));         
console.log(isTruthy(undefined));    
console.log(isTruthy(""));
console.log(isTruthy("hello"));            