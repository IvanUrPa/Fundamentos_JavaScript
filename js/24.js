/*Arrow function*/
// solo se puede utilizar en las expresiones de las funciones y no en las declaraciones de estas

const sumar2 = (n1, n2) => console.log(n1 + n2); //() cuando hay mas de un parametro

sumar2(5, 10);

const aprendiendo = tecnologia => console.log(`Aprendiendo ${tecnologia}`); // el () es opcional cuando solo hay un parametro

aprendiendo('Javascript');

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

//forEach con arrow function
meses2.forEach(mes => {
    if(mes === 'Marzo') {
        console.log('Marzo si existe');
    }
});

//some ideal para arreglo de objetos
let resultado2 = carrito.some(producto => producto.nombre === 'Celular');

//some con arrow function
let resultado3 = carrito.some(producto => producto.nombre === 'Celular PRO');

// Reduce
let resultado4 = carrito.reduce((total, producto) => total + producto.precio, 0);

// Filter
let resultado6 = carrito.filter(producto => producto.precio > 400);

let resultado7 = carrito.filter(producto => producto.nombre !== "Celular");

console.log(resultado2);
console.log(resultado3);
console.log(resultado4);
console.log(resultado6);
console.log(resultado7);
