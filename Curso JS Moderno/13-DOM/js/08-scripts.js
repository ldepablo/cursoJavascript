// const navegacion = document.querySelector('.navegacion')

// console.log(navegacion)
// console.log(navegacion.childNodes) // los espacios en blanco se consideran elementos
// console.log(navegacion.children) // Sólo los nodos HTML reales

// console.log(navegacion.children[1].nodeName) // etiqueta
// console.log(navegacion.children[1].nodeType) // número correspondiente al número de tipo (https://developer.mozilla.org/en-US/docs/Web/API/Node/nodeType)


const card = document.querySelector('.card')
// card.children[1].children[1].textContent = 'El Fary en MadCool'
// console.log(card.children[1].children[1].textContent);

// Ahora hacia arriba

// console.log(card.parentNode)
// console.log(card.parentElement)
// console.log(card.parentElement.parentElement)
// console.log(card.parentElement.parentElement.parentElement)


// y ahora por hermanos
console.log(card)
console.log(card.nextElementSibling)
console.log(card.nextElementSibling.nextElementSibling)
console.log(card.nextElementSibling.nextElementSibling.previousElementSibling)


const navegacion = document.querySelector('.navegacion')
console.log(navegacion.firstElementChild)