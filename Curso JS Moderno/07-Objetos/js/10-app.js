
const producto = {
    nombre: "Monitor 20 pulgadas",
    precio: 30,
    disponible: true
}


const medidas = {
    peso: '1 kg',
    medida: '1 metro'
}

// anade los valores de medidas a producto, y adem'as devuelve producto
// console.log(producto);
// console.log(medidas);
// let resultado = Object.assign(producto, medidas)
// console.log(producto);
// console.log(medidas);


// Spread Operator o Rest Operator no modifica los argumentos
// console.log(producto);
// console.log(medidas);
let resultado2 = { ...producto, ...medidas};
// console.log(producto);
// console.log(medidas);


console.log(resultado2);