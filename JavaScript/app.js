//Clase 1 <Script></Script> ->  va en el head y no en el body. Poner el metodo defer.

/* const title = document.querySelector('h1');
title.textContent += 'World';
console.log(title); */




//Clase 2 - Declaración e Inicialización de variables y Hoisting

/* var favorite; // Js le pone undefined
console.log(favorite); // Referencia a la variable favorite que tiene como valor undefined

// var youWork = undefined; Lo que seria JS por defecto
var yourWork = "Developer"; //Reasignación de dato
console.log(yourWork); // Referencia a la variable yourWork
console.log(typeof(yourWork)); // String

// var lastName = undefined; Comportamiento de Js por defecto
console.log(lastName); //Referencia al identificador 'lastName' que tiene como primer valor UNDEFINED
var lastName = 'Yamil'; //Reasignacion 
console.log(lastName); //Nuevamente referencia ya con un valor de 'Yamil'. */

// console.log(firstName); // ReferenceError -> es decir nuestro identificador de referencia no esta creado

//Functiones - Hoisting
/* saludar();
function saludar(){
   console.log('Hello world');
} */




//Clase 3 - Variables con let y ambito
/* var nombre = 'Yamil'; 
function saludar(){ // Las funciones si pueden mirar hacia arriba y ver y/o utilizar las variables en el ambito global
   var nombre = 'Belen'; //Esto esta declarado dentro de la function y solo puede ser usada en la misma function o funciones interiores
   console.log(`Hello ${nombre}`);
}
saludar();

{
   let age = 12; //Ambito de bloque, solo puede ser accedido y modificado dentro de este mismo bloque, NO por fuera.
}
// console.log(let); //ReferenceError 


{
   //Totalmente Valido, podemos acceder dentro de ambito interiores
   let work = 'DEVELOPER';
   {
      console.log(work);
   }
} */


//Clase 4 - Constantes
const MY_AGE = 24;
//MY_AGE = '24 years'; // typeError -> no podemos reasignar variable constantes
console.log(MY_AGE); // Referencia a la constante MY_AGE

// Con tipos compuestos - ESTO ES 100% LEGAL
const USER = { fullName: 'Yamil Daza' };
USER.fullName = 'Developer Yamil Daza';

console.log(USER.fullName); 








