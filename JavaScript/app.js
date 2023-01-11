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





// clase 8 -> valor Return ======================================================== 
/* function checkOut(name, ...prices){
   const total = prices.reduce((acc,curr) => {
      //Al poner las llaves ya no tenemos return explicito, por lo tanto, ponemos la palabra return
      return acc + curr;
   })
   return `${name} a gastado $${total}`;
}

console.log(checkOut('Yamil', 76, 89, 43, 1023)); */






// clase 9 -> CLOSURES ======================================================== 

/* function aleatorio(){
   const valor = Math.random();
   console.log(valor);
}

aleatorio(); */

/* function soyUnClosure(){
   const variableLocal = 'Yamil';
   return function(){
      return variableLocal.toUpperCase();
   }
}

const closure = soyUnClosure(); //Todavia no hemos ejecutado la funcion interna
console.log(closure()); //Invocación de la function de retorno - CLOSURE */

//EJEMPLO - CLOSURE:
/* function pedirPizza(UID){
   //*** Ejemplo con modificación de estado:
   let cantidadPizzas = 0;

   const pedido = `Pedido_${UID}`;
   return function(pizza){
      cantidadPizzas++;
      return `${pedido} -> ${pizza} - cantidad de pizzas: ${cantidadPizzas}`;
   }
}

const pedidoUID = pedirPizza(4123);
console.log(pedidoUID('Muzzarela'));
console.log(pedidoUID('Calabaza'));
console.log(pedidoUID('Especial')); */

/* // * Mas ejemplos:
function counter(){
   //THIS ES EL CONTEXTO GLOBAL, si ponemos this en vez de let, el cambio de ejecuta globalmente, es decir, en cualquier variable que lo ejecute.
   let i = 0; //Esta variable esta en el ambito dentro de la función - ESTADO
   return () => { //CLOSURE
      console.log(`Me ejecuto ${++i}`) // ++i primero se incrementa
   }
}

const c = counter();
const d = counter(); //Este es independiente de C

const resultado = c(); //Aca seria undefined ya que no tenemos un retorno 
console.log(resultado)
c(); //Valor 1
c(); //Valor 2
d(); //Valor 1 */






// clase 10 -> IIFE ======================================================== 
//Tambien se puede usar con arrow function.
/* (function(name){
   //Haz cosas...
   console.log('Hello world, welcome ' + name)
})('Developer');

// Ejemplo con bucle FOR:
for (let i = 0; i < 10; i++) {
   console.log(i); //0, 1, 2, 3, 4...

   setTimeout(function(){
      console.log('El numero es ' + i);
   },1000)
   
} */






// clase 11 -> CALLBACKS ======================================================== 
/* function miFuncion(fn){ //Fn es la función recibida como parametro y pasado como argumento en su invocación
   const nombre = 'Yamil'
   fn(nombre); //Invocación de la función pasado como argumento - callback
}

//Función pasado como argumento
function saludar(nombre){
   console.log('Hello ' + nombre);
}
miFuncion(saludar); */


//Ejemplo 2:
/* function greet(name){
   alert(`Hi ${name}, Nice to meet yout`);
   console.log(`Hi ${name}, Nice to meet yout`);
}
function changeName (fn) {
   const name = prompt('What is you name?');
   fn(name)
}
changeName(greet); */



// ** Callback asincrono, que empiezan y tarda un tiempo para terminar su tarea.
function greet(){
   console.log('Hello world')
}

setTimeout(greet, 3000);


















