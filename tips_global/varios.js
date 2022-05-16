/*

Ejemplos, trucos y tips para trabajar con en JavaScript

*/

// ----------------------------------------------------------------------------------------
// Generar un color aleatorio en Hexadecimal
// ----------------------------------------------------------------------------------------

const generaColorAleatorio = () => `#${Math.floor(Math.random() * 0xFFFFFF).toString(16)}`;
console.log(generaColorAleatorio()); // retorna un color aleatorio


// ----------------------------------------------------------------------------------------


console.log('-----------------------------------------------------------------------------------------');

// ----------------------------------------------------------------------------------------
// Generate Random Password
// ----------------------------------------------------------------------------------------

let pass = "";
const stringAll = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
let getChar = 0;
for (let index = 1; index <= 8; index++) {
    getChar = Math.floor(Math.random() * stringAll.length + 1);
    pass += stringAll.charAt(getChar);
}
console.log(pass);


//-----------------------------------------------------------------------------------------