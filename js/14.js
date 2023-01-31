//"use strict";//correr js en modo estricto
/*objetos*/

const producto = {
    nombreProducto: "Monitor 50\"",
    precio: 450,
    disponible: true
};

//Object.freeze(producto);//freeze evita agregar nuevas propiedades al objeto tampoco permite eliminar propiedades, tampoco permite cambiar valores
Object.seal(producto);//seal evita agregar nuevas propiedades al objeto, no permite agregar, pero si permite modificar valores
producto.imagen = "imagen1.jpg";

//console.log(Object.isFrozen(producto));
console.log(Object.isSealed(producto));

console.log(producto);