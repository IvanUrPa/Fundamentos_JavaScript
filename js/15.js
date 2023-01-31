/*Union de dos bojetos*/
// procurar no modificar ninguno de los objetos

const producto = {
    nombreProducto: "Monitor 50\"",
    precio: 450,
    disponible: true
};

const medidas = {
    peso: "1 Kg",
    medida: "1 m"
};
// combinar 2 objetos sin modificarlos
const nuevoProducto = { ...producto, ...medidas };
console.log(producto);
console.log(nuevoProducto);