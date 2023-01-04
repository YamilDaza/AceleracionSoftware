package IntroProgramación.Java.Task1;

public class Main{
   public static void main(String[] args) {
      System.out.println("Software aceleration - Developer Yamil Daza");

      /* int resultado = 0;
      resultado = suma(4,2); */
      System.out.println(suma(4,2));
      
   }
   
   /* Funciones -> Esta función acepta 2 parametros y retorna un tipo de dato integer */
   public static String suma(int a, int b){
      return "El resultado de sumar " + a + " + " + b + " es: " + (a+b);
   }
}