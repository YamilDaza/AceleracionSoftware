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



/* // ** Callback asincrono, que empiezan y tarda un tiempo para terminar su tarea.
function greet(){
   console.log('Hello world')
}

setTimeout(greet, 3000); // Establece una temporizador que ejecuta una función en un determinado tiempo */


/* const URL = 'wmedia.es/juan.jpg';

function descargar(url, fn){
   console.log('Descargando ... ' + url)
   setTimeout(function(){
      //Fingiendo una tarea asincrona, es decirm que consume un tiempo y no bloquea
      console.log('Descargado: ' + url)
      
      setTimeout(() => {
         fn(url)
      }, 1000);
   }, 3000)
;}

function procesar(archivo){
   console.log('Procesando ... ' + archivo)
}

descargar(URL, procesar); */





// clase 12 -> THIS - Call, apply y bind ======================================================== 
/* var nombre = 'Juan';
function saludar(){
   console.log(this.nombre);
};

saludar(); */


/* // ** #Ejemplo1:
var nombre = 'Yamil';
const persona = {nombre: 'Belen'};

function saludar(momento){
   console.log(`Hola ${this.nombre} ${momento}`);
}

//saludar(); // Tiene el contexto de windows como THIS
saludar.call(persona, 'Buenas noches'); //Tiene el contexto que le pasamos como THIS -> const persona = {nombre : 'Belen'};
saludar.apply(persona, ['Buenos Dias']); //Ejemplo #2 */


// ** #Ejemplo3: Perder el contexto de THIS cuando tenemos una función dentro de otra. 
/* Forma de recuperar el contexto de THIS:
#A -> creando una constante con el contexto de THIS: const _this = this;
#B -> creando una arrow function, ya que no tienen contexto de THIS y tomar el del superior -> () => {this....} 
#C -> En caso de tener una función declarada, podemos usar el prototipo BIND -> .bind(THIS) */
/* var nombre = 'Juan';

const objeto = {
   nombre: 'Andres',
   saludar(){
      // const _this = this; // #A
      setTimeout(function() {
         // console.log(_this.nombre);
         console.log(this.nombre)
      }.bind(this), 1000); // Con el BIND hereda el contexto de THIS de saludar
   }
}

objeto.saludar(); */






// clase 13 -> Array ======================================================== 
/* Creación de array */
/* const dias = ['Lunes','Martes','Miércoles','Jueves'];
console.log(dias); // Imprime el contenido completo del array
console.log(dias[0]); // Imprime el primer elemento del array
console.log(dias[dias.length -1]); // Imprime el ultimo elemento del array */

// Agregar una propiedad a un array
// const tags = ['Terror', 'Aventura', 'Suspense']
// tags.valoracion = 'Execlente';
// console.log(tags);

// Metodo para agregar un elemento y/o eliminar desde cualquier indice -> Splice(indiceParaAgregar, cuantoQueremosCorrer, datoParaAgregar);
/* tags.splice(1, 0, 'Gore');
console.log(tags) */

// Formas de vaciar un array:
// tags = []; //TypeError: Error al referenciar a otro tipo de dato en una CONSTANTE. 

/* 2da forma correcta:
tags.length = 0;
console.log(tags); */


/* 3er forma correcta:
tags.splice(0, tags.length);
console.log(tags) */


//Array dimensionales:
/* const libros = [['It', 7], ['El Terror', 9], ['Up', 10]];

// const terror = libros[1][0]; //Acceder al terror
// const precio = libros[1][1]; //Acceder al precio


//Desestructuración de array:
// const [it, elTerror, laUp] = libros; // Desestructuración.
// console.log(it);

const [, [titulo, precio]] = libros // Desestructuracion de algo en particular
console.log(titulo);
console.log(precio);

//Desestructuracion con parametros REST
const [it, ...resto] = libros;
console.log(it);
console.log(resto); */



//Ejercicio con API:

/* const API = 'https://randomuser.me/api/?results=7';

async function getData(){
   const response = await fetch(API);
   const { results } = await response.json();
   showUsers(results);
}  

function showUsers(users){
   console.log(users);
   users.forEach(user => {
      const picture = user.picture.medium;
      const name = user.name.first;
      
      const img = document.createElement('img');
      const nombre = document.createElement('h2');
      const caja = document.createElement('div');
      nombre.innerHTML = name;
      img.src = picture;

      caja.append(img,nombre)

      document.body.appendChild(caja);
   });
}

getData();
 */







// Clase 14 -> Manipulando Array ======================================================== 

/* const arr1 = ['One','Two','Three','Four'];
// Método para añadir un elemento al inicio de nuestro array:
arr1.unshift('Nuevo Item'); //Dentro de los parentesis podemos agregar cualquier tipo de dato
console.log(arr1); 

//Método para añadir un elemento al final de nuestro array:
arr1.push('UltimoItem');
console.log(arr1);

//Método para extraer el ultimo elemento de nuestro array, es decir, devuelve el ultimo elemento y lo podemos guardar en una variable
const ultimoElemento = arr1.pop();
console.log(ultimoElemento); //Deberia imprimir UltimoItem

//Método para extraer el primer elemento de nuestro array. Igual que el metodo POP(), podemos usar su valor de retorno.
const primerElemento = arr1.shift();
console.log(primerElemento); //Deberia imprimir NuevoItem */


// Operador Spread: Añadir un elemento al inicio de un array sin mutar el array original.
/* const colores = ['RED','BLUE','GREEN'];
const colores2 = ['ORANGE', ...colores];
console.log(colores);
console.log(colores2);

// Operador Spread: Añadir un elemento al final de un array sin mutar el array original.
const colores3 = [...colores2, 'BLACK'];
console.log(colores3);
 */


// Método Splice, para añadir en cualquier lugar del array mutando al array original
/* const colores = ['RED','BLUE','GREEN'];
const nuevoColor = 'BLACK';
colores.splice(2, 0, nuevoColor);
colores.splice(1, 1, 'WHITE', 'PINK'); // -> ['RED', 'WHITE', 'PINK', 'BLACK', 'GREEN'];
console.log(colores); */


// Método Slice, para añadir en cualquier lugar del array SIN mutar el array original
/* const colores = ['red','blue','green'];
const colores2 = [
   ...colores.slice(0,2), //Red and Blu
   'Yellow',
   ...colores.slice(2), //Green
]
console.log(colores2);


//Método para saber si esta o no un elemento PRIMITIVO en nuestro array. Si esta devuelve si posicion, es decir, su indice, sino devuelve -1.
const IsColour = colores.indexOf('red'); //Indice 0
console.log(IsColour);


//Otro Método es includes, esto devuelve true o false. Solo importa saber si esta o no, no le importa el indice. Lo podemos usar para Strings o arrays.
console.log(colores.includes('Red')); //False
colores.includes('white') ? console.log('The white color is') : console.log('The white color is not'); */



//Método findIndex: Devuelve el indice si esta, sino devuelve -1
const colores = [
   {id: 0, color: 'blue'},
   {id: 1, color: 'green'},
   {id: 2, color: 'pink'},
   {id: 3, color: 'green'},
];

/* const indice = colores.findIndex(item => item.color === 'green');
console.log(indice);


//Método find: Devuelve el elementos si esta, sino undefined.
const isGreen = colores.find(item => item.color === 'green');
console.log(isGreen);

//Método filter:
const newColors = colores.filter(item => item.color.length >= 5);
console.log(newColors); */


// Método JSON -> stringify y parse
/* const copia = JSON.stringify(colores);
console.log(copia); //String

const copia2 = JSON.parse(copia);
console.log(copia2); //Lo convierte a un objeto JS NATIVO */




// Clase 15 -> Filter, Reduce, Sort, Map y forEach ======================================================== 
/* let employees = [ //Employees = empleados
   {name: 'John', salary: 90000, hireDate: 'July 1, 2010'},
   {name: 'David', salary: 75000, hireDate: 'August 15, 2009'},
   {name: 'Ana', salary: 80000, hireDate: 'December 12, 2011'},
]; */

//FOREACH:
// employees.forEach((employee, index) => console.log(`Employee: ${index + 1} - ${employee.name}`));



//FILTER:
/* const employeesSalary = employees.filter(employee => employee.salary > 75000);
console.log(employeesSalary); */



//MAP: 
/* const upperCaseName = employees.map(employee => employee.name.toLocaleUpperCase());
console.log(upperCaseName); */

//MAP EJEMPLO 2:
/* const employeesTier = employees.map(employee => {
   return {
      name: employee.name,
      tier: employee.salary > 75000 ? 'high' : 'mid',
   }
})
console.log(employeesTier);
 */


//SORT: Ordenar los elementos de un array:
/* const numbers = [1,2,3,7,5,6,4,8,9,10];
numbers.sort((num1,num2) => {
   return num1 - num2
   if(num1 < num2){
      return -1
   }else if(num1 > num2){
      return 1
   }else{
      return 0
   } 
});
console.log(numbers); */

/* let employees = [ //Employees = empleados
   {name: 'John', salary: 90000, hireDate: 'July 1, 2010'},
   {name: 'David', salary: 75000, hireDate: 'August 15, 2009'},
   {name: 'Ana', salary: 80000, hireDate: 'December 12, 2011'},
]; */
//Ordenar por salario: a - b orden ascendente != b - a orden descendente
// console.log(employees.sort((a, b) => a.salary - b.salary));



//REDUCE:
/* const total = [2,5,1,2,7,3].reduce((total, current) => {
   console.log(total, current);
   return total + current
})
console.log(total);

const totalSalaries = employees.reduce((total, current) => total + current.salary, 0);
console.log(totalSalaries); */


//Practica :
let employees = [ //Employees = empleados
   {name: 'John', salary: 90000, hireDate: 'July 1, 2010'},
   {name: 'David', salary: 75000, hireDate: 'August 15, 2009'},
   {name: 'Ana', salary: 80000, hireDate: 'December 12, 2011'},
];

const totalHightier = employees.map(employee => employee.salary).filter(salary => salary > 75000).reduce((total, current) => total + current);
console.log(totalHightier)

