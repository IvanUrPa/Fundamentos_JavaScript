/*forEach y map*/
//estos metodos solo se pueden usar en arreglos

const carrito = [
    {nombre: "Monitor 20 pulgadas", precio: 500},
    {nombre: "Televisión 50 pulgadas", precio: 700},
    {nombre: "Tablet", precio: 300},
    {nombre: "Audifonos", precio: 200},
    {nombre: "Teclado", precio: 50},
    {nombre: "Celular", precio: 500},
    {nombre: "Bocinas", precio: 300},
    {nombre: "Laptop", precio: 800}
];

//forEach itera y muestra resultados
/*carrito.forEach(function (producto){
   console.log("una vex por cada elemento");
   console.log(producto);
    console.log(producto.nombre);
    console.log(producto.precio);
});*/
carrito.forEach(producto => console.log(producto.nombre));

//map para crear un nuevo arreglo es necesario asignarlo a una nueva variable
const arreglo2 = carrito.map(producto => `${producto.nombre} - ${producto.precio}`);

console.log(arreglo2);