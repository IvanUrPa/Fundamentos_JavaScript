/*Destructuring objetos*/

const producto = {
    nombreProducto: "Monitor 50\"",
    precio: 450,
    disponible: true
};

// forma anterior
/*const precioProducto = producto.precio;
const nombreProducto = producto.nombreProducto;
console.log(precioProducto);
console.log(nombreProducto);*/

//Nueva forma destructuring (crea la variable y extrae el valor en un solo paso)
const {precio, nombreProducto} = producto;

console.log(precio);
console.log(nombreProducto);