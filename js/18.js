/*Array methods*/
const meses2 = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo'];

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

/*Comprobar si un lemento esta dentro de un arreglo*/
//forEach
meses2.forEach(function (mes){
    if(mes === 'Marzo') {
        console.log('Marzo si existe');
    }
});

//includes para arreglos planos
let resultado = meses2.includes('Marzo');

//some ideal para arreglo de objetos
let resultado2 = carrito.some(function (producto){
   return producto.nombre === 'Celular';
});

//some con arrow function
let resultado3 = carrito.some(producto => producto.nombre === 'Celular PRO');

// Reduce
let resultado4 = carrito.reduce((total, producto) => {
    return total + producto.precio
}, 0);

let resultado5 = carrito.reduce((total, producto)=> total + producto.precio, 0);

// Filter
let resultado6 = carrito.filter(function (producto){
   return producto.precio > 400;
});

let resultado7 = carrito.filter(function (producto){
    return producto.nombre !== "Celular";
});

console.log(resultado);
console.log(resultado2);
console.log(resultado3);
console.log(resultado4);
console.log(resultado5);
console.log(resultado6);
console.log(resultado7);