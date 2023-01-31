/*promesas*/

const usuarioAutenticado = new Promise((resolve, reject) => {
   const auth = false;
   if (auth) { //si auth es verdadero
       resolve('Usuario autenticado'); // el promise se cumple
   } else {
       reject('No se puede iniciar sesión'); // el promise no se cumple
   }
});

usuarioAutenticado
    .then(resultado => console.log(resultado))
    .catch(error => console.log(error))

console.log(usuarioAutenticado);

// en los promises existen 3 valores
//Pending: no se ha cumplido pero tampoco se ha rechazado
//Fulfilled: se cumplio el promise
//Rejected: no se cumple el promise