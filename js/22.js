/*funciones que retornan valores*/

/*
function sumar(n1, n2) {
    return n1 + n2;
}

const resultado = sumar(5,3);
console.log(resultado);*/

let total = 0;
function agregarCarrito(precio) {
    return total += precio;
}
function calcularImpuesto(total) {
    return total * 1.15;
}

total = agregarCarrito(200);
total = agregarCarrito(400);
total = agregarCarrito(600);

let totalPagar = calcularImpuesto(total);

console.log(total);
console.log(`El total a pagar es: $${totalPagar}`);