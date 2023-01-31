/*Estructuras de control*/

const puntaje = 1000;

if (puntaje == 1000) { //!= diferente de
    console.log("El puntaje es 1000");
} else {
    console.log("El puntaje es distinto de 1000");
}

const efectivo = 1000;
const carrito = 1000;
if (efectivo>=carrito) {
    console.log("saldo suficiente");
} else {
    console.log("saldo insuficiente");
}

const rol = "Becario";

if (rol==="Administrador") {
    console.log("Tienes acceso a todo el sistema");
} else if (rol === "Editor") {
    console.log("Eres editor solo tienes acceso parcial");
} else {
    console.log("No tienes acceso al sistema");
}