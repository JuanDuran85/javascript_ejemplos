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

console.log('-----------------------------------------------------------------------------------------');

// ----------------------------------------------------------------------------------------
// Se puede convertir un dato tipo number a tipo string, utilizando la clase String
// ----------------------------------------------------------------------------------------
console.log(`Type of ${100}: ${typeof 100}`); // Type of 100: number
console.log(`Type of ${String(100)}: ${typeof String(100)}`); // Type of 100: string

// ----------------------------------------------------------------------------------------

console.log('-----------------------------------------------------------------------------------------');

// ----------------------------------------------------------------------------------------
// Se puede verificar si existe algun tipo de dato en una variable mediante la clase Boolean o con el operador !!. Ojo: Retorna true cuando es un arreglo u objeto vacio.
// ----------------------------------------------------------------------------------------

const inputOne = 100;

// Opcion 1 de verificacion:
const outputOne = Boolean(inputOne);
console.log(outputOne); // true

// Opcion 2 de varificacion:
const outputTwo = !!inputOne;
console.log(outputTwo); // true


// ----------------------------------------------------------------------------------------

console.log('-----------------------------------------------------------------------------------------');

// ----------------------------------------------------------------------------------------
// Se puede invertir o pasar un valor de una variable a otra utilizado arreglos
// ----------------------------------------------------------------------------------------
let variableUno = "JavaScript";
let variableDos = "Python";

console.log({variableUno});
console.log({variableDos});

[variableUno, variableDos] = [variableDos, variableUno];

console.log({variableUno});
console.log({variableDos});

// ----------------------------------------------------------------------------------------

console.log('-----------------------------------------------------------------------------------------');

// ----------------------------------------------------------------------------------------
// Existen dos maneras de elevar un nuevo a un valor x. La primera puede ser utilizando la libreria Math con el metodo pow, la segunda puede ser la utilizacion del operador **.
// ----------------------------------------------------------------------------------------

//opcion 1: Math.pow
console.log(Math.pow(2, 3)); // 8

//opcion 2: **
console.log(2 ** 3); // 8


// ----------------------------------------------------------------------------------------

console.log('-----------------------------------------------------------------------------------------');

// ----------------------------------------------------------------------------------------
// Existen dos maneras de repetir un string n cantidad de veces, la primera es las larga y se debe utilizar un ciclo for. la segunda es usando el metodo reapeat de los string.
// ----------------------------------------------------------------------------------------

//opcion 1: Ya no se debe usar
let stringUno = "";
for (let i = 0; i<5; i++){
    stringUno += "Texto X ";
}
console.log(stringUno); // Texto X Texto X Texto X Texto X

//opcion 2: la ideal usando repeat
const stringDos = "Texto Y ".repeat(5);
console.log(stringDos); // Texto Y Texto Y Texto Y Texto Y


// ----------------------------------------------------------------------------------------