const nav = document.querySelector('.navegacion')

nav.addEventListener('click', () => {
    console.log('click en nav')
})

nav.addEventListener('mouseenter', () => {
    console.log('entrando a la navegacion')
    nav.style.backgroundColor = 'red'
})

nav.addEventListener('mouseout', () => {
    console.log('saliendo de la navegacion')
    nav.style.backgroundColor = 'transparent'
})

nav.addEventListener('mousedown', () => {
    console.log('botón pulsado')
})

nav.addEventListener('mouseup', () => {
    console.log('botón soltado')
})

nav.addEventListener('dblclick', () => {
    console.log('doble click')
})