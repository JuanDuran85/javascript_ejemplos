// comentario del tipo 1

/* 
    comentario del tipo 2
    varias lineas a la vez
*/

var numero1 = prompt("Ingrese el primer numero a sumar: ",0);
var numero2 = prompt("Ingrese el segundo numero a sumar: ",0);

var casa;
var nombre = null;

const NX = -100;

const suma = parseInt(numero1) + parseInt(numero2) + NX;

console.log("Los valores ingresados por usuario fueron: ")
console.log(typeof numero1);
console.log(typeof numero2);

console.log("La suma es: ", suma);
console.log(suma);

document.write("<h3>La suma es: " + suma + "</h3>");

document.write(`<h3>La suma es: ${suma}</h3>`)


console.log(Math.round(3564.6656));
console.log(Math.floor(3564.4656));
console.log(Math.ceil(3564.4656));
console.log(Math.random());