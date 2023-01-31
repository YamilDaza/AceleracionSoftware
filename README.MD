# Curso JavaScript - Wmedia por Juan Andrés Núñez.


## CLASE 1 ->  Las variables en JS -----------------------------------------------------------------

   ### ¿Qué son?
      Una variables es caja que contiene un dato que podemos usar o modificar. Es importante declarar nuestras variables con nombres declarativos, es decir, nombres representativos segun el dato a almacenar.

   ### Tipos de datos:
   - Number (enteros)
   - String (texto)
   - Boolean (true o false)
   - Array (Es un conjunto que contiene varias variables del mismo tipo)

   *Dato -> cuando sumamos un texto con un numero, siempre da texto*

   ### Tipos de variables
      - var variable = dato -> X no es recomendado 
      - let variable = dato -> Se recomiendo
      - const variable = dato -> Si sabemos que nuestro dato no va a cambiar durante la ejecución del nuestro programa, se recomienda usar.

   *La etiqueta <script> es la forma canonica de agregar js en nuestro archivo de HTML*
   *Atributo defer, es para agregar nuestro script en el head. Difiere la carga del JS hasta que el DOM este listo*
   *NoScript -> es para mostrar un mensaje de javascript desactivado, es decir, en nuestro navegador no esta javascript*



## CLASE 2 ->  Alzado o Hoisting -----------------------------------------------------------------
   - JavaScript es un lenguaje con tipado dinamico, es decir, podemos asignar y reasignar diferentes tipos de datos a una misma variable.
   - Para hacerlo tenemos que utilizar dos fases diferentes: declaración e inicialización.
      * var nombreVariable -> Declaración
      * nombreVariable = 12 -> Inicialización
      * nombreVariable = "Hola" -> Reasignación.

   - Cuando declaramos una variable sin ningun dato inicializado, JavaScript lo declara como undefined, es decir, variable creado en memoria pero no esta definida en cuanto a dato.

   ### Hoisting
   - JavaScript alza por encima de todo nuestro codigo, todas las variables declaradas con Var y las inicializa con el valor undefined.
   - JavaScript alza todo el cuerpo de las funciones declaradas con 'function' por encima de todo nuestro codigo. 
   - Todo esto lo realiza internamente.
   - ReferenceError: Es cuando queremos usar la referencia a un identificador no creado, es decir, a una variable no declarada.
   - Console.log('variable') -> esto es una referencia a una variable



## CLASE 3 ->  Variable let y Ambito -----------------------------------------------------------
   - El ambito es la limitación de una variable, es decir, donde comienzan y terminan su uso. Tenemos ambitos de bloque {} y ambitos global, que esta por fuera de las funciónes o entre llaves {}.
   - Las variables declaradas con let tienen un AMBITO de bloque. Este ambito tiene ventajas como por ejemplo poder usar bucles y no mantener valores erroneos.
   - Las variables declaradas con LET no tienen HOISTING o ALZADO



## CLASE 4 ->  Variable CONST -------------------------------------------------------------------
   - Son declaración de variables con la diferencia que nuestro dato almacenado no varia durante la ejecucion del programa, por eso es el nombre de CONSTANTE.
   - Cuando asignamos un tipos de datos primitivos a una constante, su valor NO PUEDE ser reasignado durante la ejecución de nuestro programa, pero en cambio, cuanto asignamos tipos de datos compuestos, como por ejemplo objetos array, etc, ahi si podemos modificar el contenido del tipo de dato pero no cambiaria el dato asignado a la CONSTANTE
   - Las variables creadas con Const NO TIENEN hoisting asi como var o function, y su ambito es de BLOQUE al igual que let.




## CLASE 5 ->  Parámetro y Argumentos -----------------------------------------------------------------
   *Parámetros*
   - Todas las functiones pueden tener parametros
   - Los parámetros son accesibles como variables en el cuerpo de la función
   - Los parametros son creados cuando declaramos una function -> function nombreFunction(parametroA, parametroB){}
   - Podemos establecer valores por defecto para los parametros -> function nombreFunction(parametroA = 12, parametroB = 2){}

   *Argumentos*
   - Los argumentos son los valores que le pasamos a una función en su invocación -> nombreFunción(argumento1, argumento2);
   - Tener en cuenta la cantidad de argumentos que espera recibir una función para no tener errores. Misma cantidad de parámetros, misma cantidad de argumentos.

   *Podemos usar estructuras de control para validar los datos enviado y/o recibidos a una función*




## CLASE 6 ->  Funciones en JavaScript -----------------------------------------------------------------
   - En JavaScript hay 3 formas de crear funciones:
      1) Funciones declaradas, estas requieren un identificador y son alzadas -> function identificadorUnico_Nombre(parametro o no){};
      2) Expresión funcional, que consiste en asociar una funcion en una variable. No son alzadas. -> const identificador = function (){};
      3) Funciones Flecha, No disponen contexto de THIS, disponen de retorno implicito y NO SE ALZAN -> const saludar = () => {};




## CLASE 7 ->  Parametros y Argumentos REST -----------------------------------------------------------------
   - Con los parámetros REST podemos aceptar cualquier numero de parámetros en una función.
   - Estos parámetros REST deben declararse al final de los parametros habituales. -> function nombre(parametro1, parametro2, ...todosLosParametros){}
   - Los parametros REST siempre los veras dentro de los parametros de una función.

   *Object arguments no es una matriz y por lo tanto no podemos usar metodos de una matriz*





## CLASE 8 ->  Return Valor ------------------------------------------------------------------------------
   - A no ser que seamos explicitos, las funciones JavaScript retornan undefined(*implicit return*)
   - Ahora bien, si especificamos algo que retornar, la función realiza la tarea para la que fue creada y retorna dicho valor.




## CLASE 9 ->  CLOSURES ------------------------------------------------------------------------------
   - Es una caracteristica de JavaScript, es importante entenderlo para lograr tener el beneficio de los CLOSURES.
   - CLOSURE: es retornar una función dentro otra función con acceso al entorno de variables de un ámbito exterior. Esto quiere decir que yo puedo retornar una función dentro de otra, y puedo usar las variables que esten por encima de la función que retornar(función hija).

   Ejemplo:
      function soyUnClosures(){
         //Algo...
         return function(){
            return algo...
         }
      }

   - Cada closure retornado es independiente al anterior, es decir, forman un nuevo ambito.
   - Eso si, un closure puede modificar el estado atrapado en su interior. ***




## CLASE 10 ->   IIFE ------------------------------------------------------------------------------
   - EXPRESIONES FUNCIONALES INMEDIATAMENTE INVOCABLES
   - Lo parte más importante es inmediatamente.
   - Para crear un IIFE debemos envolver una function con el operador de agrupación -> (function(){})
   - La principal utilidad de un IIFE es la auto-creación de un ámbito funcional, nuevo e independiente.





## CLASE 11 ->  CALLBACKS ------------------------------------------------------------------------------
   - Los callbaks son una función que se pasa a otra función como argumento para ejecución posterior. 
   - Recordar que ARGUMENTO es lo que le pasamos a una función en la invocación. ejemplo -> funcion(datos.., otraFuncion)
   - Existen callbaks sincronicos y asincronicos.
   - Podemos llamar a un callback en su argumento como -> fn, call, callback, cb, funct.





## CLASE 12 ->  THIS - Call, bind y apply ------------------------------------------------------------------------------
   - El concepto de this puede ser confuso, ya que es dinámico y depende del contexto de ejecución.
   - THIS es una referencia a algo.
   - Call -> Es un prototipo de las funciones, es para darle el valor de THIS que queremos. Ejemplo #1
   - Apply -> Pasarle un valor de THIS pero lo argumentos pasarle un tipo de datos iterable. Ejemplo #2
   - Podemos perder el contexto de THIS cuando tenemos una función dentro de otra. Ejemplo #3





## CLASE 13 ->  Array - 2 Claves para entender los arreglos ------------------------------------------------------------------------------
   
   - ¿Qué son los arrays? -> Es una estructura de datos ordenada por indices unicos. Su tipo de dato que almacena es homgenea, es decir, tiene que ser el mismo tipo de dato. Son objetos recortados.
   - Ejemplo -> const nombreArray = [elemento1, elemento2, elemento N..];
   - Podemos acceder a los elementos del array por medio de su indice unico. Empieza de 0 a N..
   - Metodo length -> Nos devuelve la cantidad de elementos de un array
   - Podemos agregar propiedades a los array -> const tags = [elemento1, elemento 2] ; tags.valoracion = 'excelente'; NO ES RECOMENDADO
   - Podemos tener array dimensionales. Array dentro de otro array, lo importante es saber referirse a su indice -> const libros = [[], []];
   - Desestructuración de arreglos -> const [elementos...] = array;




## CLASE 14 ->  Manipulando array ------------------------------------------------------------------------------
   *Métodos array:*
   - array.push(...items) – agrega ítems al final,
   - array.unshift(...items) – agrega ítems al principio.
   - array.pop() – extrae un ítem del final,
   - array.shift() – extrae un ítem del inicio,

   *Método para añadir elementos al inicio sin mutar el array podemos usar el operador spread:*
   - ArrayNuevo = [DATO,...arrayACopiar];

   *Método para añadir elementos en cualquier indice y mutar el Array podemos usar el método SPLICE*
   - Array.splice(inicioDePosicion, hastaDondeAñadir, dato);

   *Método para añadir elementos en cualquier indice y NO mutar el Array podemos usar el método SLICE*
   - Array.slice(inicioParaExtraer, hastaDondeExtraer);

   *Método para encontrara elementos PRIMIVITOS es utiizar indexOf. Devuelve el indice si lo encuentra, sino -1.*
   - Arr.indexOf('Dato')

   *Método para encontrara elementos es includes(). Devuelve solo true o false, si esta o no esta, no el indice, ni el valor mismo.*
   - arr.includes('dato');

   *Método findIndex acepta un callback y devuelve el indice del primer elementos que cumpla con la condición del callback. Si cumple la condicion devuelve su indice, sino devuelve -1.*
   - const indice = colores.findIndex(color => color.nombre = 'green');

   **- indexOf: Devuelve el indice de array PRIMITIVOS != findIndex: Duvuelve el indice de array COMPUESTOS -**

   *Ahora si queremos que nos devuelva en elemento en si, tenemos que usar el método find. Este método devuelve el elemento si esta, sino devuelve undefined.*
   - const elemento = array.find(item = item.propiedad === dato)

   *Método filter, devuelve un nuevo array sin mutar el original pasando una condicion en el callback*
   - const newArray = array.filter(item => condicion);

   *Métodos para la copia superficial de un array. Si los elementos del array son PRIMITIVOS, se hace la copia y no se muta el array original, pero si los elementos del array son tipos COMPUESTOS, se pasa la referencia y por lo tanto se puede mutar*
   - Slice -> const copia = arrOriginal.slice();
   - Spread -> const copia = [...arrOriginal]
   - array.From -> const copia = Array.from(arrOriginal)

   *Método JSON.stringify() -> convierte lo que esta pasado por parentesis en un string. Esto es limitado //ver mdn*
   - const copia = JSON.stringify().

   *Método JSON.parse() -> convierte lo que esta pasado por parentesis en un objeto nativo de JS //ver mdn*





## CLASE 15 ->  Filter, Reduce, Sort, Map y forEach ------------------------------------------------------------------------------
   - forEach -> Ejecuta una funcion callback que se ejecuta en cada uno de los elementos de un array. Tambien acepta un valor opcional que es el index, indice de cada elemento de un array

   - filter -> Es un método que retorna un nuevo array y no muta al array original. Lo que realiza filter es que FILTRAR por una condición cada una de los elementos del array.

   - map -> Crea un nuevo array, con la misma longitud del array original a mapear, pero con ciertos cambios que le pasamos a una function por cada elemento del array.

   - sort -> Sirve para ordenar los elementos de un array, no se le pasa una funcion porque automaticamente lo hace pero con string. Modifica el array original.

   - reduce -> Pasa una funcion por cada uno de los elementos del array. tiene 2 valores: total(acumulado de todo lo que hacemos - es el primer elemento de nuestro array *TENER CUIDADO*, por eso debo pasarle un valor inicial al primer parametro en 0) y current(el que voy recorriendo).




## CLASE 16 ->  For of Loop ------------------------------------------------------------------------------
   - Sentencia de bucles super potente
   - Crea una sentencia iterable que descompone un Array o String en cada elemento.
   - for(const item of array-String-etc) {}
   - Break y Continue -> Break es para terminar. Continue es para pasar a la siguiente iteración



## CLASE 17 ->  Fusionar Arrays ------------------------------------------------------------------------------
   - Spread syntax(...) -> Trabaja en un elemento iterable y los descompone, es decir, extraer cada uno de los elementos
   - .Concant -> Este método puede fusionar 2 o mas arrays: const nuevoArray = array1.concat(array2);



## CLASE 18 ->  Comprobar si un valor en Array en JavaScript ------------------------------------------------------------------------------
   - Hoy veremos: typeof, instanceof y isArray
   * typeof: retorna un string que indica el tipo de dato que ponemos a lado derecho -> ejemplo typeof tipoDeDATO
   * instanceof: comprueba si el prototipo es encontrado en el constructor del prototipo, esto devuelve un valor booleano, true o false -> myArray instanceof Array
   * isArray: Este metodo determina si el valor que le pasamos es un array o no, retorna true o false. -> ejemplo: Array.isArray(myArray)



## CLASE 19 ->  Objetos ------------------------------------------------------------------------------
   - Los objetos en JavaScript son estructuras en cuyo interior se guardan colecciones de pares propiedad-valor. Los objetos son muy comunes en JavaScript para usar el registro de datos de entidades. El valor almacenado en cualquier propiedad puede ser de valores primitivos hasta compuestos como arrays u objetos.
   - Ejemplo: const nombreObjeto = {propiedad1: valor1, propiedad2:valor2}
   - Los objetos a diferencia de los arrays tienen identificadores unicos(propiedad), por eso el orden no es tan importante.







