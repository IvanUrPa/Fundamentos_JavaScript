/*this*/

const reservacion = {
    nombre: "Ivan",
    appellido: "Urbano",
    total: 5000,
    pagado: false,
    informacion: function (){
        console.log(`El cliente ${this.nombre} reservo y su cantidad a pagar es de ${this.total}`);
    }
}
const reservacion2 = {
    nombre: "Ruben",
    appellido: "Palafox",
    total: 4000,
    pagado: false,
    informacion: function (){
        console.log(`El cliente ${this.nombre} reservo y su cantidad a pagar es de ${this.total}`);
    }
}

reservacion.informacion();
reservacion2.informacion();

