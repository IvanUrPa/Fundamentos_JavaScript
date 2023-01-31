/*metodos para arreglos*/

const numeros = [10, 20, 30, 40, 50];



//array con constructor
const meses = new Array('Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo');


//agregar elementos a un arreglo al final
numeros.push(60);
numeros.push(70);
numeros.push(80,90);

//agregra elementos al inicio del arreglo
numeros.unshift(-10, -20, -30);
console.table(numeros);

//eliminar elementos de un arreglo al final
meses.pop();

//eliminar el primer elemento de un arreglo
meses.shift();

//eliminar un elemento con el indice 2 y solo un elemento
meses.splice(2,1);
console.table(meses);

/*Nota: Todos estos metodos modifican el arreglo original*/

//Rest Operator o Spread Operator
const nuevoArreglo = [...meses, 'Junio'];
console.log(nuevoArreglo);

const nuevoArreglo2 = ['Enero',...meses];
console.log(nuevoArreglo2);


