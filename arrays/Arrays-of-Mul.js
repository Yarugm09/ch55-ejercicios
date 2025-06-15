//Arrays de multiplos 
// 1. Crear una función que reciba dos parámetros: numero y longitud 
// 2. Inicializar un arreglo 
// 3. Usar un ciclo for para generar los múltiplos del numero base
// 4. Reflejar el arreglo en consola 

function arrayMultiplos(numero, longitud) {
  const resultado = [];

  for (let i = 1; i <= longitud; i++) {   //recibe los dos parametros 
    resultado.push(numero * i); //push se usa para agregar un elemento al final del arreglo
  }

  return resultado;    //retornara el resultado 
}

//En consola se reflejan los resultados 
console.log(arrayMultiplos(5, 9));   
 