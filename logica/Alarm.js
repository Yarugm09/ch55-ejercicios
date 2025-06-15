/* Se utilizara un temporizador 
1.Solicitar  al usuario que  introduzca
 un numero de segundos
 1.2 tiempo de espera para mostrar el 
 mensaje
2. despues del tiempo indicado  se mostra en la consola  un mensaje con texto ejem: Time for bed con el tiempo transcurrido
 */ 


let segundos = prompt("Introduce el número de segundos:");  // solicitamos  al usuario que ingrese el numero con el promt
segundos = parseInt(segundos);   // usuamos parseInt  para extraer un numero entero  y que la operacion siempre se haga de forma correcta 

if (!isNaN(segundos) && segundos > 0) {    //usuamos la condicion  de if  (!isNan) para validar que el usuario ingrese  un numero mayor a 0  
 
    function saludo(nombre){            // temporizador de js
        console.log(`Hola ${nombre}, Hora de ir a la cama después de ${segundos} segundos`);
    }

    let alarma = setTimeout(saludo, segundos * 2000, 'Generation');
} 