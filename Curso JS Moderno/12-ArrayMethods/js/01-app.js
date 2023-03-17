const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]

// // .includes: para elementos simples
// console.log(meses.includes('Enero'))
// // .some: para objetos
// console.log(carrito.some(p => p.nombre.startsWith('Moni')))

// // .findIndex (devuelve el índice del primer elemento que cumpla)
// console.log(meses.findIndex(m => m === 'Abril'))
// console.log(carrito.findIndex(p => p.nombre.startsWith('T')))

// // .reduce (un puto lío)
// console.log(carrito.reduce((total, p) => total + p.precio, 0))


// // .filter (quita los que no cumplen)
// console.log(carrito.filter(p => p.nombre.startsWith('T')))

// // .find (primera ocurrencia)
// console.log(carrito.find(p => p.nombre.startsWith('T')))

// // .every (todos los elementos cumplen X)
// console.log(carrito.every(p => p.nombre.startsWith('T')))
// console.log(carrito.every(p => p.nombre.length > 0))

// // .concat (une arrays)
// const carrito2 = [
//     { nombre: 'Otro producto', precio: 1000 }
// ]
// console.log(carrito.concat(carrito2))
// console.log([...carrito, ...carrito2])