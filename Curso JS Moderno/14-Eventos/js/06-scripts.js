// Event bubbling: Como titulo está en info e info en card, cuando hago click en título se disparan los tres eventos.
// Se detiene con e.stopPropagation
const cardDiv = document.querySelector('.card')
const infoDiv = document.querySelector('.info')
const tituloDiv = document.querySelector('.titulo')

cardDiv.addEventListener('click', (e) => {
    e.stopPropagation()
    console.log('click en card')
})

infoDiv.addEventListener('click', (e) => {
    e.stopPropagation()
    console.log('click en info')
})

tituloDiv.addEventListener('click', (e) => {
    e.stopPropagation()
    console.log('click en titulo')
})
