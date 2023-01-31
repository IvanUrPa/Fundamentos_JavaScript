/*POO*/

//object literal
const producto = {
    nombre: 'Tablet',
    precio: 500
}

//* el prototype solo permite crear funciones que se utilicen en un objeto en especifico
Producto.prototype.formatearProducto = function() {
    return `El producto ${this.nombre} tiene un precio de ${this.precio}`;
}

//object constructor
function Producto(nombre, precio) {
    this.nombre = nombre;
    this.precio = precio;
}
const producto2 = new Producto('Monitor curvo 34"', 800);
const producto3 = new Producto('Monitor curvo 27"', 500);

//formatear producto
function formatearProducto(producto) {
    return `El producto ${producto.nombre} tiene un precio de ${producto.precio}`;
}

console.log(producto2.formatearProducto());
console.log(producto3);

console.log(formatearProducto(producto3));

