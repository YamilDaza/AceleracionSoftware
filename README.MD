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
   - JavaScript es un lenguaje con tipos dinamicos, es decir, podemos asignar y reasignar diferentes tipos a una misma variable.
   - Para hacerlo tenemos que utilizar dos fases diferentes: declaración e inicialización.
      * var nombreVariable -> Declaración
      * nombreVariable = 12 -> Inicialización
      * nombreVariable = "Hola" -> Reasignación.

   - Cuando declaramos una variable sin ningun dato inicializado, JavaScript lo declara como undefined, es decir, variable creado en memoria pero no esta definida en cuanto dato.

   ### Hoisting
   - JavaScript alza por encima de todo nuestro codigo, todas las variables declaradas con Var y las inicializa con el valor undefined.
   - JavaScript alza todo el cuerpo de las funciones declaradas con 'function' por encima de todo nuestro codigo. 
   - Todo esto lo realiza internamente.
   - ReferenceError: Es cuando queremos usar la referencia a un identificador no creado
   - Console.log('variable') -> esto es una referencia a una variable



## Variable let y Ambito -----------------------------------------------------------
   - El ambito es la limitación de una variable, es decir, donde comienzan y terminan su uso. Tenemos ambitos de bloque {} y ambitos global, que esta por fuera de las funciónes o entre llaves {}.
   - Las variables declaradas con let tienen un AMBITO de bloque. Este ambito tiene ventajas como por ejemplo poder usar bucles y no mantener valores erroneos.
   - Las variables declaradas con LET no tienen HOISTING o ALZADO



## Variable CONST -------------------------------------------------------------------
   - Son declaración de variables con la diferencia que nuestro dato almacenado no varia durante la ejecucion del programa, por eso es el nombre de CONSTANTE.
   - Cuando asignamos un tipos de datos primitivos a una constante, su valor NO PUEDE ser reasignado durante la ejecución de nuestro programa, pero en cambio, cuanto asignamos tipos de datos compuestos, como por ejemplo objetos array, etc, ahi si podemos modificar el contenido del tipo de dato pero no cambiaria el dato asignado a la CONSTANTE
   - Las variables creadas con Const NO TIENEN hoisting asi como var o function, y su ambito es de BLOQUE al igual que let.




