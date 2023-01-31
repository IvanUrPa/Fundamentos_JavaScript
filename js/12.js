/*Modificar objetos*/

const producto = {
    nombreProducto: "Monitor 50\"",
    precio: 450,
    disponible: true
};

console.log(producto);

//agregar nuevas propiedades
producto.imagen = "imagen.jpg";
console.log(producto);

//eliminar propiedades
delete producto.disponible;
console.log(producto);