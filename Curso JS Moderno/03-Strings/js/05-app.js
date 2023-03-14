const producto = 'Monitor de 20 pulgadas'

// Replace
console.log(producto);
console.log(producto.replace(' pulgadas', '"'));

// Cortar
// del 3 en adelante
console.log(producto.slice(3));
// del 0 al 10
console.log(producto.slice(0,10));
// Mal, no hace nada
console.log(producto.slice(2,1));

// SUBCADENAS

// igual que slice
console.log(producto.substring(0,10));
// OJO!! est'a mal as'i que cambia las posiciones
console.log(producto.substring(5,1));


console.log(producto.substring(0,1));
console.log(producto.charAt(0))
