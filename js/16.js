/*arreglos*/

const numeros = [10, 20, 30, 40, 50];

console.log(numeros);
console.table(numeros);

//array con constructor
const meses = new Array('Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo');

//array sin constructor
const meses2 = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo'];

console.table(meses);
console.table(meses2);

const arreglo = ["Hola", 10, true, "si", null, {nombre: "Ivan", trabajo: "Programador"}, [1,2,3]];
console.log(arreglo);

//acceder a los valores de un arreglo
console.log(numeros[4]);
console.log(numeros[2]);

//conocer el tamaño de un arreglo
console.log(numeros.length);

meses.forEach(function (mes){
    console.log(mes);
})