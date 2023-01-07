//Clase 1 <Script></Script> ->  va en el head y no en el body. Poner el metodo defer. =========================

/* const title = document.querySelector('h1');
title.textContent += 'World';
console.log(title); */




//Clase 2 - Declaración e Inicialización de variables y Hoisting ===============================

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





// Clase 3 - Variables con let y ambito ============================================
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





// Clase 4 - Constantes =========================================================
/* const MY_AGE = 24;
//MY_AGE = '24 years'; // typeError -> no podemos reasignar variable constantes
console.log(MY_AGE); // Referencia a la constante MY_AGE

// Con tipos compuestos - ESTO ES 100% LEGAL
const USER = { fullName: 'Yamil Daza' };
USER.fullName = 'Developer Yamil Daza';

console.log(USER.fullName); 
 */





// clase 5 - Parámetro y Argumentos ========================================================
/* function sumar(numero1, numero2){ //numero1 y numero2, son los parámetro que podemos usar como variables dentro de la función
   return numero1 + numero2;
}

const RESULTADO_SUMA = sumar(10, 2) // 10 y 2 son argumentos 
console.log(RESULTADO_SUMA);

function restar(x,b){
   return x - b;
}

// podemos pasar como valor de argumento undefined.
console.log(restar(1)); //ESto nos da Nan porque estamos realizando una resta con un numero y un valor undefined */





// clase 6 -> Funciones ======================================================== 
/* 
- Funciones declaradas: 
function saludar(){
   console.log('Hello world');
}
saludar(); // Invocación de la funcion declarada creada


- Expresion funcional:
const saludar = function(){
   console.log('Hello world');
}
saludar();



- Funciones Flecha:
const saludar = () => {
   console.log('Hello world')
}
saludar();
*/




// clase 7 -> Parametros y argumentos REST ======================================================== 
/* function checkOut(...prices){
   Array.isArray(prices);
   const total = prices.reduce((acc, curr) => acc + curr)
} 

// SIN PARAMETROS REST
function checkOut(pr1, pr2, pr3){
   const total = pr1 + pr2 + pr3;
   console.log(total)
};
checkOut10(10,33,12); //10 : pr1 - 33 : pr2 - 12 : pr3;

// CON PARAMETROS REST
function checkOut(...prices){
   console.log(prices) -> [10, 33, 41, 1]
}
checkOut(10,33,41,1); //Cada uno de los argumentos van para prices, y JS lo almacena en una matriz


// EJEMPLO:
function sumarNumeros(...numeros){
   let total = 0;
   for (let i = 0; i < numeros.length; i++) {
      total += numeros[i];
   }
   console.log(total);
}
sumarNumeros(5, 2, 1, 8, 12);


//Esto no es recomendado, pero es bueno saberlo.
function calculadora(){
   const numeros = Array.from(arguments); -> Esto convierte en matriz
   const total = numeros.reduce((acc, curr) => acc + curr);
   console.log(total);
}
calculadora(10, 3, 12, 4); 
*/






