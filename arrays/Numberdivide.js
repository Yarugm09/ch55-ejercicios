// 1. Crear una programa  que reciba un numero 
// 2.  Que divida el numero entre 2
// 3.  Que el  array  devuelva  el numero dividio en sus mitades

function numDiv(numeroOriginal) {
  const mitadDelNumero = numeroOriginal / 2;
  return [mitadDelNumero, mitadDelNumero];  //Nos retornara el numero dividio a la mitad 
}

// Se ve en la consola 
console.log(numDiv(40)); 