const encabezado = document.querySelector('h1')


encabezado.style.backgroundColor = 'red'
encabezado.style.fontFamily = 'Arial'
encabezado.style.textTransform = 'uppercase'

// No se recomeinda acceder direcatmente a los valores. Mejor agregar nuevas clases
const card = document.querySelector('.card')
card.classList.add('nueva-clase', 'segunda-clase')
console.log(card.classList);
card.classList.remove('segunda-clase')
console.log(card.classList);
