/* 
   TODO: Promesas en JavaScript:
   * Es importante entender para que funcionan las promesas... Las promesas vienen a resolver el problema de callback hell
   * Promesas: Es simplemente un resultado de una promesa, una palabra a cumplir. Ahora bien, el resultado puede ser o no el esperado.
   * Las promesas tiene 3 estados que son internas:
   *  1- Pendiente
   *  2- Satisfecho
   *  3- Rechazado o no satisface
   

*/

// let compras = 'Shop';
//Proceso SINCRONO
/* function hacerLaCompra(callback){
   setTimeout(() => {
      compras += ' :D';
      callback();
   },3000)
}
hacerLaCompra(() => {
   console.log(compras);
}); */



//Promesas -> Resolve(resultado satisfactorio) - Reject(Resultado de ERROR)
let desarrollo = new Promise(function(resolve, reject){
   //Acciones necesarias para conseguir un resultado satisfactorio
   const proyecto = 'Backend Developer 2023';

   setTimeout(() => {
      let aleatorio = Math.random();
      if(aleatorio < 0.4){
         resolve(proyecto)
      }else{
         reject('error: No entregado a tiempo')
      }
   },1500);
});

//Consumir una promesa -> Método para resolve y reject, y un tercer metodo opcional. 
// 1er THEN(): Aca todo lo que retorne en el resolve se almacena en THEN.
// 2do CATCH(): Aca todo lo que retorne el método reject se almacena en CATCH.
// 3er FANILLY(): Este método se realiza si o si, es decir si lo ejecutamos, no le importa el resultado de la promesa.
desarrollo
   .then((res) => console.log(res)) //RESOLVE
   .catch((error) => console.log(error)) //REJECT
   .finally(() => console.log('Promesa finalizado...')) //SIEMPRE SE EJECUTA EN CUALQUIER ESTADO


//Practice 1:
let compras = "Laptop";
function hacerLaCompra(){
   return new Promise((resolve, reject) => {
      setTimeout(() => {
         compras += " :D";
         console.log(compras);
         resolve()
      },2000)
   })
}

hacerLaCompra()
   .then(() => hacerLaCompra())
   .then(() => hacerLaCompra())
   .then(() => hacerLaCompra())
   .catch(() => console.log('Error'))
   .finally(() => console.log('Promesa finalizada'))








