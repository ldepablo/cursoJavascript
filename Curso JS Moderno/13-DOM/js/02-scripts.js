const header = document.getElementsByClassName('header')
console.log(header);

const hero = document.getElementsByClassName('hero')
console.log(hero);


// Si hay múltiples, devuelve un array
const contenedores = document.getElementsByClassName('contenedor')
console.log(contenedores);

// Si no exsite, devuelve un array vacío. No da error
const noExiste = document.getElementsByClassName('noExiste')
console.log(noExiste);