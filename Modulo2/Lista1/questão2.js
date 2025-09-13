function isTruthy(valor) {
  return Boolean(valor);
}

console.log(isTruthy(true));     
console.log(isTruthy(1));        
console.log(isTruthy("hello"));  
console.log(isTruthy({}));       
console.log(isTruthy([]));       
console.log(isTruthy(false));    
console.log(isTruthy(0));        
console.log(isTruthy(""));       
console.log(isTruthy(null));     
console.log(isTruthy(undefined)); 
console.log(isTruthy(NaN));      