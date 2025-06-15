//El factorial de un número n es el resultado de multiplicar n 
// por todos los números enteros positivos menores que él,
//  hasta llegar a 1
// Se usuara recursion
// 1.Escribir un  programa que te saque el factorial de un numero
// 2.Iniciamos con Variables 
  // 


function factorial(n) {
    if (n < 1) {          // el ejercicio expecifica que : Where  1 <= n
        return "Número inválido"; //  Asegura que `n` siempre sea ≥ 1
    }
    if (n === 1) {  //
        return 1; // Caso base
    }
    return n * factorial(n - 1);
}
let num = 10; // 
console.log(`El factorial de ${num} es: ${factorial(num)}`);


