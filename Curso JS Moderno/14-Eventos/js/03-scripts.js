const busqueda = document.querySelector('.busqueda')

busqueda.addEventListener('keydown', () => {
    console.log('Escribiendo');
})

busqueda.addEventListener('blur', () => {
    console.log('Foco saliendo del cuadro de texto');
})

busqueda.addEventListener('copy', () => {
    console.log('Texto copiado');
})

busqueda.addEventListener('cut', () => {
    console.log('Texto cortado');
})

busqueda.addEventListener('paste', () => {
    console.log('Texto pegado');
})

busqueda.addEventListener('input', (evento) => {
    console.log(evento.type);
    console.log(evento.target);
})
