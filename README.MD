# Curso JavaScript - Wmedia por Juan Andrés Núñez.


## Las variables en JS -----------------------------------------------------------------

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



## Alzado o Hoisting -----------------------------------------------------------------
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



## Variable let y Ambito -----------------------------------------------------------
   - El ambito es la limitación de una variable, es decir, donde comienzan y terminan su uso. Tenemos ambitos de bloque {} y ambitos global, que esta por fuera de las funciónes o entre llaves {}.
   - Las variables declaradas con let tienen un AMBITO de bloque. Este ambito tiene ventajas como por ejemplo poder usar bucles y no mantener valores erroneos.
   - Las variables declaradas con LET no tienen HOISTING o ALZADO



## Variable CONST -------------------------------------------------------------------
   - Son declaración de variables con la diferencia que nuestro dato almacenado no varia durante la ejecucion del programa, por eso es el nombre de CONSTANTE.
   - Cuando asignamos un tipos de datos primitivos a una constante, su valor NO PUEDE ser reasignado durante la ejecución de nuestro programa, pero en cambio, cuanto asignamos tipos de datos compuestos, como por ejemplo objetos array, etc, ahi si podemos modificar el contenido del tipo de dato pero no cambiaria el dato asignado a la CONSTANTE
   - Las variables creadas con Const NO TIENEN hoisting asi como var o function, y su ambito es de BLOQUE al igual que let.




## Parámetro y Argumentos -----------------------------------------------------------------
   *Parámetros*
   - Todas las functiones pueden tener parametros
   - Los parámetros son accesibles como variables en el cuerpo de la función
   - Los parametros son creados cuando declaramos una function -> function nombreFunction(parametroA, parametroB){}
   - Podemos establecer valores por defecto para los parametros -> function nombreFunction(parametroA = 12, parametroB = 2){}

   *Argumentos*
   - Los argumentos son los valores que le pasamos a una función en su invocación -> nombreFunción(argumento1, argumento2);
   - Tener en cuenta la cantidad de argumentos que espera recibir una función para no tener errores. Misma cantidad de parámetros, misma cantidad de argumentos.

   *Podemos usar estructuras de control para validar los datos enviado y/o recibidos a una función*




## Funciones en JavaScript -----------------------------------------------------------------
   - En JavaScript hay 3 formas de crear funciones:
      1) Funciones declaradas, estas requieren un identificador y son alzadas -> function identificadorUnico_Nombre(parametro o no){};
      2) Expresión funcional, que consiste en asociar una funcion en una variable. No son alzadas. -> const identificador = function (){};
      3) Funciones Flecha, No disponen contexto de THIS, disponen de retorno implicito y NO SE ALZAN -> const saludar = () => {};




## Parametros y Argumentos REST -----------------------------------------------------------------
   - Con los parámetros REST podemos aceptar cualquier numero de parámetros en una función.
   - Estos parámetros REST deben declararse al final de los parametros habituales. -> function nombre(parametro1, parametro2, ...todosLosParametros){}
   - Los parametros REST siempre los veras dentro de los parametros de una función.

   *Object arguments no es una matriz y por lo tanto no podemos usar metodos de una matriz*





## Return Valor ------------------------------------------------------------------------------
   - A no ser que seamos explicitos, las funciones JavaScript retornan undefined(*implicit return*)
   - Ahora bien, si especificamos algo que retornar, la función realiza la tarea para la que fue creada y retorna dicho valor.




## CLOSURES ------------------------------------------------------------------------------
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




## IIFE ------------------------------------------------------------------------------
   - EXPRESIONES FUNCIONALES INMEDIATAMENTE INVOCABLES
   - Lo parte más importante es inmediatamente.
   - Para crear un IIFE debemos envolver una function con el operador de agrupación -> (function(){})
   - La principal utilidad de un IIFE es la auto-creación de un ámbito funcional, nuevo e independiente.





## CALLBACKS ------------------------------------------------------------------------------
   - Los callbaks son una función que se pasa a otra función como argumento para ejecución posterior. 
   - Recordar que ARGUMENTO es lo que le pasamos a una función en la invocación. ejemplo -> funcion(datos.., otraFuncion)
   - Existen callbaks sincronicos y asincronicos.
   - Podemos llamar a un callback en su argumento como -> fn, call, callback, cb, funct.


















