# Curso JavaScript - Wmedia por Juan Andrés Núñez.


## Las variables en JS ---------------------------------------------------------------------------------------------------------------------

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

   *La etiqueta <script> es la forma de agregar js en nuestro archivo de HTML*
   *Atributo defer, es para agregar nuestro script en el head. Difiere la carga del JS hasta que el DOM este listo*
   *NoScript -> es para mostrar un mensaje de javascript desactivado, es decir, en nuestro navegador no esta javascript*



## Alzado o Hoisting ----------------------------------------------------------------------------------------------------------------------
   - JavaScript es un lenguaje con tipos dinamicos, es decir, podemos asignar y reasignar diferentes tipos a una misma variable.
   - Para hacerlo tenemos que utilizar dos fases diferentes: declaración e inicialización.
      * var nombreVariable -> Declaración
      * nombreVariable = 12 -> Inicialización
      * nombreVariable = "Hola" -> Reasignación.

   - Cuando declaramos una variable sin ningun dato inicializado, JavaScript lo declara como undefined, es decir, variable creado en memoria pero no esta definida en cuanto dato.

   ### Hoisting
   - JavaScript alza al comienzo del programa todas las variables declaradas con var y las funciones declaradas con function pero no su inicialización;
   - ReferenceError: Es cuando queremos usar la referencia a un identificador no creado



## Variable let y Ambito ----------------------------------------------------------------------------------------------------------------------
   - El ambito es la limitación de una variable, es decir, donde comienza y termina su uso. Tenemos ambitos de bloque {} y ambito global que esta por fuera de las funciónes.
   - Las variables declaradas con let tiene un ambito de bloque. Este ambito tiene ventajas como por ejemplo poder usar bucles y no mantener valores erroneos.
   - Estas mismas no tiene hoisting como var



## Variable CONST ----------------------------------------------------------------------------------------------------------------------
   - Son variables con la diferencia que nuestro dato almacenado no varia durante la ejecucion del programa, por eso el nombre CONSTANTE.
   - Al usar dato primitivos no podemos reasignar su valor
   - Pero si cuando tenemos datos compuestos como objetos o array, si podemos modificar el contenido de ese tipo de dato.
   - Las variables creadas con Const no tiene hoisting asi como var.




