//Clase 1 <Script></Script>

const title = document.querySelector('h1');
title.textContent += 'World';
console.log(title);




//Clase 2 - Declaración e Inicialización de variables y Hoisting

var favorite;
console.log(favorite); // JS le pone undefined

var yourWork = "Developer";
console.log(yourWork); // Su tipo de dato es String y su contenido es "Developer";
console.log(typeof(yourWork)); // String

console.log(lastName); //Referencia al identificador 'lastName'
var lastName = 'Yamil'; //Hoisting -> Lo eleva arriba de todo por eso podemos realizar el console.log
console.log(lastName);

// console.log(firstName); // ReferenceError -> es decir nuestro identificador de referencia no esta creado





//Clase 3 - Variables con let y ambito
console.log(fullName);
var fullName = 'Daza Yamil';

//console.log(dog); //Reference Error
let dog = 'Buddy'; 



//Clase 4 - Constantes
const MY_AGE = 24;
// MY_AGE = '24 years'; // typeError -> no podemos reasignar variable constantes
console.log(MY_AGE);

//Con tipos compuestos - ESTO ES 100% LEGAL
const USER = { fullName: 'Yamil Daza' };
USER.fullName = 'Developer Yamil Daza';

console.log(USER.fullName);








