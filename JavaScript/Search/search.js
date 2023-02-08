//Search
document.addEventListener('keyup', e => {
   
   if(e.target.matches('#search')){
      document.querySelectorAll('.colour').forEach(item => {
         item.textContent.toLowerCase().includes(e.target.value.toLowerCase()) ? item.classList.remove('filtro') : item.classList.add('filtro')
      })
   }

})