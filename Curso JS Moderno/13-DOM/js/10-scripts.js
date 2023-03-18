const enlace = document.createElement('A')
enlace.textContent = 'Nuevo enlace'
enlace.href = '/nuevo-enlace'
enlace.onclick = () => alert('Hola')

const navegacion = document.querySelector('.navegacion')
navegacion.appendChild(enlace)
navegacion.insertBefore(enlace, navegacion.children[1])


// Crear un nuevo card
const parrafo1 = document.createElement('P')
parrafo1.textContent = 'Concierto'
parrafo1.classList.add('categoria', 'concierto')

const parrafo2 = document.createElement('P')
parrafo2.textContent = 'El Fary en el MadCool'
parrafo2.classList.add('titulo')

const parrafo3  = document.createElement('P')
parrafo3.textContent = 'Gratis pa los zagales'
parrafo3.classList.add('precio')

const divInfo = document.createElement('div')
divInfo.classList.add('info')
divInfo.appendChild(parrafo1)
divInfo.appendChild(parrafo2)
divInfo.appendChild(parrafo3)

const imagen = document.createElement('img')
imagen.src = 'img/newyork4.jpg'

const card = document.createElement('div')
card.appendChild(imagen)
card.appendChild(divInfo)
card.classList.add('card')

const contenedor = document.querySelector('.contenedor-cards')
contenedor.insertBefore(card, contenedor.children[1])