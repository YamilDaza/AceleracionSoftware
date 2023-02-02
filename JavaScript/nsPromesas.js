// TODO: Promesas -> Son eventos que se esperan cumplir en un determinado tiempo, teniendo como una respuesta buena o mala
// * THEN() -> Por medio de este método podemos acceder al valor que se encuentra dentro de la promesa RESOLVE
// * CACTH() -> Este método es cuando ocurre algun error en nuestra promesa, el valor de error lo podemos capturar con el metodo CACTH().

/* const p1 = Promise.resolve(1); //Promesa resuelta de manera inmediata
console.log(p1);
p1
   .then(res => res + 5)// X es el valor que se encuentra dentro de la promesa p1 { 1 } 
   .then(res => Promise.resolve(res + 5)) //Tambien podemos devolver otra promesa que se resuelve de manera inmediata
   .then(res => Promise.reject('Error'))
   .catch(err => console.log(err)) */



//Practice 1:
let x = 10;

const p = new Promise((resolve, reject) => {
   if(x == 10){
      resolve(console.log('La variable es igual a 10'));
   }else{
      reject(console.log('La variable no es igual a 10'));
   }
});

p
   .then((res) => res)
   .catch((err) => err)





