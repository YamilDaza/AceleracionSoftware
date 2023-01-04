# Frontend ReactJs - OpenBootcamp - Introducción a la programación 

## === === === === === === ===   Aceleración software - Dia 1: Programacion, variables, constantes y memoria.   === === === === === === === === ===


### Tipos de lenguajes de Programación 
   
   - 1er Tipo -> Compilado: Los lenguajes compilados son aquellos que a partir de nuestro codigo, se genera un programa que el procesador es capas de ejecutar, por medio del dispositivo. Lenguajes como Go y  C+, usa este tipo. Es mas rapido pero no vale para todas las arquitecturas

   
   - 2do Tipo -> Inte== rpretados: Los lenguajes interpretados tambien tienen su codigo base pero este codigo no son entendibles para nuestro procesador, para que esto pueda suceder necesito un interprete. ¿Qué es un interprete?, es aquel programa que entiende un programa y lo ejecuta paso a paso. Lenguajes como Java usan este tipo. Es mas lento pero es mas sencillo encontrar un interprete para cualquier arquitectura.

   #### Tipados - No Tipados
   1) Tipados -> Son aquellos en los que uno puede almacenar datos pero debemos indicar que tipo de dato es. (Java, Go, C)

   2) No Tipados -> Son aquellos donde mi ordenador o interprete puede deducir que tipo de dato es. (JavaScript)

   #### Lo que podemos construir:
   *Aplicaciones web*
   *Aplicaciones moviles*
   *Aplicaciones de Escritorio*

   **¿Qué es una API? -> Es un conjunto de funciones que yo le pido algo a un servidor y recibo la respuesta.**
   **¿Qué es la programación? -> En palabras simples, es una seria de instrucciones que quiero que la maquina realize.**


###  Memoria y Variables 

   - La memoria tiene un limite, no es infinito. Cada ordenador tiene una memoria donde su capacidad de almacenar puede variar. Dentro de la memoria tenemos direcciones de memoria donde podemos almacenar datos para poder utilizar en nuestro programa.
   - La memoria es dinamica, que quiere decir, que puedo cambiar el valor de nuestras direcciónes de memoria.
   - En informatica empezamos a contar desde el 0 en adelante ..... N.
   - Como se vuelve muy dificil saber una dirección de memoria de tal dato, ahora podemos tener un nombre representativo para cada dirección de memoria.

   ## Variables de 2 tipos:
   *Cambiantes -> Las variables que pueden cambiar su valor se llaman VARIABLES
   *No Cambiantes -> Las variables que una vez declado su valor y no pueden modificar se llaman CONSTANTES

   *Aprender a determinar como programadores cuales son las variables cambiantes y no cambiantes*




## === === === === === === === ===  Aceleración software - Dia 2: Tipos de datos: Primitivos y Complejos  === === === === === === === === === === === === 

### Tipos de datos primitivos:
   - Estos tipos de datos que se almacenan en la memoria para nuestro ordenado son series de numeros (0 y 1). Son tipos de datos basicos que generalmente esta en cualquier lenguaje.

   *Carácter*  -> Representa un unico caracter('a', 9, %) entre letra, numero o simbolo. nombreVariable = 'a' caracter;
   *Texto o String*  -> Es una secuencia de caracteres. nombreVarible = "Texto"
   *Numericos*  -> Podemos representar numeros enteros o decimal, negativos y positivos.
   *Boolean*  -> Son valores entre verdadero y falto True o False. 
   

### Tipos de datos complejos:
   - Se forman por medio de tipos de datos simple(primitivos)
   
   *Array* -> Es una coleccion de elementos de un mismo tipo de dato simple. array = [1,2,3,4] (array de numeros). Tambien podemos tener array de array -> arrayNumero = [ [1,2,3], [4,5,6], [7,8,9] ]; a este tipo se los llama bidimensional.

   *Tuplas* -> Se utilizan en algunos lenguajes, una tupla es similar a un array pero con la diferencia de que sus elementos son inmutables, es decir, son constantes. tupla = (a,b,c)

   *Mapa o objetos asociativos* -> Es una representación entre clave y valor, donde podemos almacenar tipos de datos compuestos, ejemplo:
   auto = [
      marca: 'Volkswagen'
      modelo: 'Gol'
      año: 2001
   ]

   *Objetos* -> Es una representación de elementos de la vida real, ejemplo:
   - Caja:
      propiedades:
         -color: blanco
         -forma: rectangular
      metodos:
         guardarCosas




## === === === === === === === ===  Aceleración software - Dia 3: Funciones  === === === === === === === === === === === === 
   
   - Lo mas dificil es saber cuando crear una función, y para eso debemos entender para que vale una función.
   - Una función nos evita tener que repiter codigo. Las funciones pueden o no retornar algo.
   - Una función que retorna algo, es cuando al momento de invocar una función debe devolverme algo para usar a posterior
   - Funciones cortas, simples, modulares, que debe tener una sola responsabilidad.

   ### Parametros -> 
   - Son variables que solamente existen dentro del cuerpo de la funcióN, que al finalizar el uso de la función todo lo que esta dentro se destruye.
   - Podemos pasar parametros por valor y por referencia.
   - *Valor* -> es cuando se realiza una copia del valor y tipo en la función
   - *Referencia* -> es cuando le pasamos la direccion de memoria de dicha variable(puntero: es una referencia a una dirección de memoria) 

   ### Argumentos ->
   - Son los datos que le pasamos a una función en su declaración. Debe respetar la cantidad de variables y tipos.

   ### Función recursiva -> No es mas que devuelve un valor y se invoca asi misma.
   ### Función callback -> Asignar mi variable a una función -> miVariable = funcion(); miVariable();



