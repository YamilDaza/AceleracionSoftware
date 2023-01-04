package IntroProgramación.Java.Task2;

/* 1) Enunciado: Crear una función con 3 parámetros que sean números que se sumen entre sí. Llamar a la función en el main y darle valores.
   2) Enunciado: 
   - Crear una clase coche, con una variable numérica que almacene el número de puertas que tiene.
   - Una función que incremente el número de puertas que tiene el coche.
   - Crear un objeto miCoche en el main y añadirle una puerta. 
   - Mostrar el número de puertas que tiene el objeto.
*/

public class Main {
   public static void main(String[] args) {
      int param1 = 4;
      int param2 = 10;
      int param3 = 5;

      int resultado = sumaNumeros(param1, param2, param3);
      System.out.println("El resultado de la suma es: " + resultado);

      Coche miCoche = new Coche();

      miCoche.incrementarNroPuertas();
      miCoche.incrementarNroPuertas();
      miCoche.incrementarNroPuertas();

      System.out.println("El numero de puertas que tiene tu coche es " + miCoche.nroPuertas);

   }

   public static int sumaNumeros(int a, int b, int c){
      return a + b + c;
   }
}
