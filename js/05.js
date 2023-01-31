/*Metodos para los strings*/
let tweet = 'Aprendiendo JavaScript con el curso de Desarrollo Web Completo';
let producto2 = 'Monitor de 37"';

//metodo length sobre string
console.log(tweet.length); //indica numero de caracteres dentro de la variable
console.log(producto2);

//indexof indica en que posición se encuentra un texto o una palabra que estamos buscando
console.log(tweet.indexOf('JavaScript'));
console.log(producto2.indexOf('Tablet'));// cuando indica un valor -1 significa que una palabra no fue encontrada en una cadena de texto

//includes retorna true o false si encuentra una palabra
console.log(tweet.includes('JavaScript'));
console.log(producto2.includes('Tablet'));