/*orden de las operaciones*/

let resultado;

resultado = 20 + 30 * 2;
resultado = (20 + 30) * 2;
resultado = (100 + 200 +300) * .20; //calculo del 20% de la suma de los valores
resultado = (100 + 200 +300) * 1.16; //calculo de un impuesto del 16%
resultado = (200 + 200) * 1.05; //calculo de un cobro del 5% extra

console.log(resultado)

// Incrementos
let puntaje = 10;
console.log(puntaje);
// incremento en 1
puntaje++;
console.log(puntaje);
console.log(puntaje++);
console.log(++puntaje);

// Decremento en 1
puntaje--;
console.log(puntaje);

//incrmento de 10
puntaje += 10;
console.log(puntaje);