const producto1 = {
    nombre: "A",
    precio: 1
}

const producto2 = {
    nombre: "B",
    precio: 2
}

const producto3 = {
    nombre: "C",
    precio: 3
}

const producto4 = {
    nombre: "D",
    precio: 4
}

const carrito = [producto1]
console.table(carrito);


console.log("1. Anadimos al final");
carrito.push(producto2)
console.table(carrito);

console.log("2. Anadimos al principo");
carrito.unshift(producto3)
console.table(carrito);

console.log("3. Eliminamos al final");
carrito.pop()
console.table(carrito);

console.log("4. Eliminamos al principio");
carrito.shift()
console.table(carrito);

console.log("5. Eliminamos n elementos desde la posición i");
const i = 1
const n = 2
carrito.splice(i, n)
console.table(carrito);






