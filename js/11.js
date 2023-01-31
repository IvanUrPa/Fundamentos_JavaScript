/*Objetos*/

const nombreProducto = "Monitor 20\"";
const precio = 300;
const disponible = true;

const producto = {
    nombreProducto: "Monitor 50\"",
    precio: 450,
    disponible: true
};

console.log(producto);
console.log(producto.nombreProducto);
console.log(producto.precio);
console.log(producto.disponible);

console.log(producto["nombreProducto"]);
console.log(producto["precio"]);
console.log(producto["disponible"]);