//Search
document.addEventListener('keyup', e => {
   
   /* if(e.key === 'Escape')e.target.value = ""; */

   // console.log(e.target.value);

   if(e.target.matches('#search')){
      document.querySelectorAll('.colour').forEach(item => {
         item.textContent.toLowerCase().includes(e.target.value.toLowerCase()) ? item.classList.remove('filtro') : item.classList.add('filtro')
      })
   }

})