const btnFlotante = document.querySelector('.btn-flotante')
const footer = document.querySelector('.footer')

btnFlotante.addEventListener('click', mostrarOcultarFooter)
const textoOriginal = btnFlotante.textContent

function mostrarOcultarFooter() {
    if (footer.classList.contains('activo')) {
        console.log('está activo')
        footer.classList.remove('activo') 
        btnFlotante.classList.remove('activo') 
        btnFlotante.textContent = textoOriginal
        console.log('... y lo quito')   
    } else {
        console.log('está inactivo')
        footer.classList.add('activo')
        btnFlotante.classList.add('activo')
        btnFlotante.textContent = "X Cerrar"
        console.log('... y lo pongo')
    } 
    return () => {
        console.log('click en botón')
    }
}
