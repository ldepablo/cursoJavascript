const producto = {
    nombre: "Monitor 20 pulgadas",
    precio: 30,
    disponible: true
}

function Producto(nombre, precio) {
    this.nombre = nombre
    this.precio = precio
    this.disponible = true
}

const product1 = new Producto("Tele", 100)
console.log(product1);
const product2 = new Producto("Móvil", 200)
console.log(product2);