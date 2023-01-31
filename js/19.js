/*Funciones*/

//Declaración de funcion
function sumar() {
    console.log(10 * 10);
}

//llamado de la funcion
sumar();

// Expresion de la funcion
const sumar2 = function () {
    console.log(3+3);
}
sumar2();



// IIFE - funcion invocada por ella misma
(function (){
   console.log("Esto es una función");
})();
