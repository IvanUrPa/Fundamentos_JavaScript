/*Iteradores*/

//for loop
/*for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0 ){ //solo imprime los numeros pares
        console.log(`${i} x ${i} = ${i*i}`);
    } else {
        console.log(`${i} x ${i} = ${i*i} impares`);
    }
}*/

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

for (let i = 0; i < carrito.length; i++) {
    console.log(carrito[i]);
    console.log(carrito[i].nombre);
    console.log(carrito[i].precio);
}

//while loop
let i = 1; //indice
while (i <= 10) { // condicion
    if (i % 2 === 0 ) {
        console.log(`El numero ${i} es par`);
    } else {
        console.log(`El numero ${i} es impar`);
    }
    i++; //incremento
}

let j = 0;
while (j < carrito.length) {
    console.log(carrito[j]);
    console.log(carrito[j].nombre);
    console.log(carrito[j].precio);
    j++;
}

//do while loop
let k = 100;
do {
    console.log(k);
    k++;
} while (k<10);