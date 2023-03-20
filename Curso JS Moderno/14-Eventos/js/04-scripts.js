const formulario = document.querySelector('#formulario') // Buscamos el formulario, no el input

formulario.addEventListener('submit', (e) => {
    e.preventDefault() // Evita que se ejecute el action
    console.log(e)
    console.log(e.target.action)
})

// el siguiente código es igual y no acabo de entender cómo se pasa el e por arte de magia.
// ChatGPT está caído
formulario.addEventListener('submit', validarFormulario)

function validarFormulario(e) {
    e.preventDefault() // Evita que se ejecute el action
    console.log(e)
    console.log(e.target.action)
}