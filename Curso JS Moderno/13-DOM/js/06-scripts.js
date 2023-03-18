const encabezado = document.querySelector('.contenido-hero h1')
console.log(encabezado)

// console.log(encabezado.innerText) // devuelve todo lo que no esté con visibility = false
// console.log(encabezado.textContent) // devuelve todo el texto
// console.log(encabezado.innerHTML) // devuelve todo el código html en crudo

document.querySelector('.contenido-hero h1').textContent = 'nuevo heading'

const imagen = document.querySelector('.card img')
imagen.src = 'img/hacer2.jpg'