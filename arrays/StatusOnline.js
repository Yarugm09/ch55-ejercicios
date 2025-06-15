//Determinar quien esta en linea 
//1.especificar  un conjunto de usuarios
//2.Validar cuantos usuarios hay en el array 
//2.1 Evaluar cuantos usuarios  hay y especificar como seria la funcion 
//3.Mostrar en la consola ejemplo : (Yaru ,Garcia estan en linea )
//
 
 function onlineStatus(usuarios) {
    let cantidad = usuarios.length; // se ocupa length para  saber la cantidad de elementos que hay en el arreglo 
//utilice if y else para poder diferentes casos 
    if (cantidad === 0) {
        return "Nadie en linea ";  //-Si es 0 -entonces no hay nadie en linea 
    } else if (cantidad === 1) {
        return `${usuarios[0]} esta en linea`;  //si es 1 -esta en linea 
    } else {
        return `${usuarios[0]}, ${usuarios[1]} y ${cantidad - 2} mas estan en linea `; //si 2 mas estan en linea 
    }
}

// Example 
console.log(onlineStatus(['mock', 'J0ey', 'glass'])); 

//Prueba  
console.log(onlineStatus(['Sofía'])); 
console.log(onlineStatus(['Sofía', 'Fer', 'Carla', ]));  

