// User profile
// Write a program that prompts a user for their data: username, age, and a list of their favorite movies. 
// Store the information and then showcase it in the console. Take note that the output for the films should 
// add a small message like: 'The film {film} is one of my favorites'.


// PARA USAR PROMPTS se deberá agregar
const prompt = require("prompt-sync")();
// y en la terminal lo siguiente: npm install prompt-sync

// const prompt = require("prompt-sync")();

// let nombreUsuario = prompt("Ingresa Nombre de usuario: ");
// let edadUsuario = prompt("Ingresa Edad usuario: ");
// let peliculasFavUsuario = prompt("Peliculas favoritas separadas por comas: ");

// let pelisFavs = peliculasFavUsuario.split(",");

// let peliculaFav = prompt("De las peliculas que ingresaste, ¿cuál es tu pelicula favorita?");

// console.log("Nombre: " + nombreUsuario);
// console.log("Edad" + edadUsuario);


// for (let i = 0; i < pelisFavs.length; i++) {
//     let mensaje = "La pelicula" + pelisFavs[i] + " es una de mis favoritas";

//     console.log(pelisFavs[i]);

//     if (pelisFavs[i] === peliculaFav) {
//         mensaje += " Y es tu pelicula favorita!";
// }
// console.log(mensaje);
// }


//////////////////////////////////////////////////////


// Highest number
// Write a program that asks for 10 numbers. Using logical operators and any other javascript functions/structures you've seen before, determine and output the highest of those numbers.

let numeroMayor = Number.NEGATIVE_INFINITY; //valor que asegura que cualquier número que ingrese será mayor que este valor al principio

let contador = 0; //llevar la cuenta de cuantos números validos ha ingresado el usuario

for (let i = 0 ; i < 10; i++) {
    let numero = prompt("Ingresa un numero: " );
    numero = parseFloat(numero);


if (!isNaN(numero)) {
    if (numero > numeroMayor) {
       numeroMayor = numero
    
    }

contador++;
} else {
    console.log("Por favor, ingresa un número válido."); // Mostramos un mensaje si la entrada no es un número válido
    i--; // Decrementamos i para repetir la misma iteración
}
}

if (contador > 0) {
    console.log("El número mayor de los 10 números ingresados es: " + numeroMayor);
} else {
    console.log("No se ingresaron números válidos.");
}
///////////////////////////////////////////////////////

// Alarm
// Write a program that asks a user for the amount of seconds needed until an alarm (message) is executed alongside a text to show once those seconds have passed in real time.

// Result example: "Time for bed after 10 seconds".




// Palindrome
// Write a program that prompts for a word or sentence (it can be capitalized, have spaces and punctuation). Figure out if the sentence/word is a palindrome or not. Ignoring punctuation, spaces and capitalized letters.



// Factorial
// Write a program that prompts for an intenger number n. Where  1 <= n. Solve this using recursion.




// Flat array
// Write a program that takes the following nested matrix and flattens it (makes it a 1D array). Use any type of algorithm you want like callbacks, recursion, etc...




// let multiDimension = [1, [2, 3, [4, 5, [6]]]];
