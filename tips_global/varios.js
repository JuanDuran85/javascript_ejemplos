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

console.log('-----------------------------------------------------------------------------------------');

// ----------------------------------------------------------------------------------------
// Tres maneras de recorrer un objeto
// ----------------------------------------------------------------------------------------

const userExampleObject = {
    name: "Juan",
    age: 31,
    weight: 67
}

// 1. Usando Object.keys y For...of
for (const keys of Object.keys(userExampleObject)) {
    console.log(keys,userExampleObject[keys]);
}

// 2. Usando solo For...in
for (const key in userExampleObject) {
    if (Object.hasOwnProperty.call(userExampleObject, key)) {
        console.log(key,userExampleObject[key]);
    }
}

// 3. Usando Object.values and For...of
for (const values of Object.values(userExampleObject)) {
    console.log(values);
} 


//-----------------------------------------------------------------------------------------