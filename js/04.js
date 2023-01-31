/*Tipo de dato string*/
//Primer forma de crear un string
const producto = 'Monitor de 20"';
const producto4 = "Monitor de 50\""; //escape de comillas \" para imprimir la " como caracter

//Segunda forma de crear un string
const producto2 = String('Monitor de 30"');

//Tercer forma de crear un string, este lo crea como objeto
const producto3 = new String('Monitor de 50"');

console.log(producto);
console.log(producto2);
console.log(producto3);
console.log(producto4);

//Saber que tipo de dato tiene la variable
console.log(typeof producto);
console.log(typeof producto2);
console.log(typeof producto3);
