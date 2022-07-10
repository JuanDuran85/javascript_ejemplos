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

console.log('-----------------------------------------------------------------------------------------');

// ----------------------------------------------------------------------------------------
// Spread Operator: Expande un elemento iterable en elementos unicos. 
// ----------------------------------------------------------------------------------------
console.log("--Spread Operator--")
console.log("Shallow cloning - Crear un copia de un objeto existente");
const shirtOne = {
    color: 'green',
    size: 'M',
};
const shirtTwo = {
    ...shirtOne,
    color: 'white',
};

console.log({shirtOne});
console.log({shirtTwo});
//---------------------------------------------
console.log("Add an element - Agregar un elemento a una coleccion de elementos");
let closetOne = ['shirt', 'socks', 'shoes'];
const sweater = "Sweater";
closetOne = [...closetOne, sweater];
console.log({sweater});
console.log({closetOne});
//-----------------------------------------------------------------------------------------

console.log('-----------------------------------------------------------------------------------------');

// ----------------------------------------------------------------------------------------
// Rest Operator: Recopila todos los elementos restantes en una coleccion. 
// ----------------------------------------------------------------------------------------
console.log("--Rest Operator--")
console.log("Collects multiple elements - Recopullar multiples elementos en un solo elemento");

let closetTwo = ["shirt", "socks", "shoes"];
const clothing = [ "jacket", "jeans", "dress"];
console.log({closetTwo});
console.log({clothing});

const addToClosetTwo = (...clothings) => closetTwo = [...closetTwo, ...clothings];

addToClosetTwo(...clothing);
console.log({closetTwo});

//---------------------------------------------
console.log("Join elements - Separar elementos y unir los elementos restantes en una nueva coleccion");
const closetThree = ["shirt", "socks", "shoes"];
console.log({closetThree});
const [shirt, ...newClosetThree] = closetThree;
console.log({newClosetThree});
//-----------------------------------------------------------------------------------------