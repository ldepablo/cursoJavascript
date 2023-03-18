
// Devuelve el primero
const card= document.querySelector('.card')
console.log(card);

//puedes usar CSS
const info = document.querySelector('.premium .info')
console.log(info);

//dentro de la sección 'hospedaje', el segundo hijo de clase card
const segundoCard = document.querySelector('section.hospedaje .card:nth-child(2)')
console.log(segundoCard);

// Por id
const formulario = document.querySelector('#formulario')
console.log(formulario)

// Por etiqueta HTML
const navegacion = document.querySelector('nav')
console.log(navegacion);
