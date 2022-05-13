/*

Ejemplos, trucos y tips para trabajar con tipos de datos primitivos en JavaScript

*/

// ----------------------------------------------------------------------------------------
// Quick float to integer conversion. if you want to convert a float to an integer, you can use Math.floor, Math.ceil, or Math.round. But, there is also a faster way to truncate a float to an integer using '|', the bitwise OR operator. For example:
// ----------------------------------------------------------------------------------------
console.log(23.534545 | 0); // 23
console.log(23.0233 | 0); // 23
console.log(-27.9001 | 0); // -27
console.log(27.99992 | 0); // 27

// ----------------------------------------------------------------------------------------


console.log('-----------------------------------------------------------------------------------------');

// ----------------------------------------------------------------------------------------
// Convertir un numero a hexadecimal o binario / Convert Number to Hex or Binary
// ----------------------------------------------------------------------------------------
const numberToConvert = 36;
console.log({numberToConvert})
console.log(numberToConvert.toString(2)); // 1100011
console.log(numberToConvert.toString(16)); // 43

// ----------------------------------------------------------------------------------------

console.log('-----------------------------------------------------------------------------------------');

// ----------------------------------------------------------------------------------------
// Existen dos posibles maneras de redondear un numero hacia abajo, la primera es usando Math.round, utilizando el operador ~~, el cual es una operacion bitwise OR.
// ----------------------------------------------------------------------------------------

// Opcion 1: Math.floor
const numeroUno = Math.floor(6.8)
console.log(numeroUno); // 6

//Opcion 2: ~~
const numeroDos = ~~6.8;
console.log(numeroDos); // 6

// ----------------------------------------------------------------------------------------

console.log('-----------------------------------------------------------------------------------------');

// ----------------------------------------------------------------------------------------
// Se pueden declarar varias variables al mismo tiempo utilizando arreglo 
// ----------------------------------------------------------------------------------------

let [ a, b, c] = [1,2,3]
console.log(a,b,c); // 1 2 3

// ----------------------------------------------------------------------------------------