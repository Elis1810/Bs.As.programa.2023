let miNombre = "Eliana"
let miApellido = "Maldonado"
const ESPACIO = " "

let nombreIngresado = prompt(miNombre + ESPACIO + miApellido);
let entrada = prompt("Ingresar una letra")
let salida = "La letra" + ESPACIO + entrada + ESPACIO + "fue ingresada";
alert(salida);

let mensaje = prompt("Ingrese sonido de animal");
 
if (mensaje == "guau") {
    console.log ("es un perro");
}
else if (mensaje == "miau") {
    alert ("es un gato");
}
else {
    alert ("animal desconocido");
}

let animal = prompt ("ingrese sonido de animal");
