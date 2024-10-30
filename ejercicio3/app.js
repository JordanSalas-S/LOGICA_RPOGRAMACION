/* 
Titulo: Juego del numero clave

Descripción: 
Define un numero clave entre 0 y 20, luego deberás
pedirle al usuario un numero menor a 20 y el usuario deberá 
de adivinar si el numero ingresado es igual al numero establecido 
como numero clave y mostrarle un mensaje que diga "Ganaste, adivinaste el numero clave" de caso contrario mostrar el mesnaje  "No es el numero, vuelve a intentarlo".
*/
//DECLARACION DE VARIABLES
const PI = 3.14;

let altura = 0;
let radio = 0;
let volumen = 0;

NunClave = parseInt(prompt("Define un numero clave entre 0 y 20"));
NunUsuario = parseInt(prompt("Colocar un numero menor a 20"));

if (NunClave === NunUsuario) {
  alert("Ganaste, adivinaste el número clave");
} else {
    alert("No es el número, vuelve a intentarlo");
}

