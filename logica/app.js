let counter = 0;
const username = prompt("Hola, ingresa tu nombre de usuario: ");
const age = prompt("Ahora ingresa tu edad: ");
const favoriteMovies = [];

// Vamos a pedir 5 películas primero
alert("A continuación te vamos a pedir tus 5 películas favoritas");

for(let i = 1; i <= 5; i++){
    // Los string dentro de `` se conocen como string literal,
    //  Nos permiten concatenar variables y texto de una forma más sencilla y legible
    favoriteMovies.push(prompt(`Ingresa la película número ${i}: `));
    // Equivalente a "Ingresa la película número " + i + ":"
}

console.log(`Hola soy ${username}, tengo ${age} años y mis películas favoritas son:\n`);

while (counter < favoriteMovies.length) {
    console.log(`Mi película favorita número ${counter + 1} es: ${favoriteMovies[counter]}`);
    counter++;
}