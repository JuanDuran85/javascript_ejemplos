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

console.log('-----------------------------------------------------------------------------------------');

// ----------------------------------------------------------------------------------------
// The Performance interface provides access to performance-related information for the current page. It's part of the High Resolution Time API, but is enhanced by the Performance Timeline API, the Navigation Timing API, the User Timing API, and the Resource Timing API.
// ----------------------------------------------------------------------------------------
console.log('The performance.now() method returns a DOMHighResTimeStamp, measured in milliseconds. ');
const firstTime = performance.now();
for (let index = 0; index < 1000; index++) {
    console.log(index);  
}
const secondTime = performance.now();
console.log(`Elapsed time: ${secondTime - firstTime}ms`);
//-----------------------------------------------------------------------------------------

console.log('-----------------------------------------------------------------------------------------');

// ----------------------------------------------------------------------------------------
// Sumatoria de numeros: Utilizando funciones con parametros rest para encontrar el total de varios numeros pasados como argumentos.
// Los parametros rest (...) permiten a una funcion tomar un numero cualquiera de parametros, que seran convertidos en un Array.
// ----------------------------------------------------------------------------------------
console.log('Sumatoria de numeros con funciones con parametros rest');
const sumaTotal = (...numbers) => numbers.reduce((total,actual) => total + actual);

const resultSumaTotal = sumaTotal(1,2,3,4,5,6,7,8,9,10);
console.log({resultSumaTotal});
//-----------------------------------------------------------------------------------------

console.log('-----------------------------------------------------------------------------------------');

// ----------------------------------------------------------------------------------------
// You can use map and Number to convert a list of strings to numbers. Array-map can take the Number constructor as an argument.
// ----------------------------------------------------------------------------------------
console.log('Converting a list of strings to numbers');
const stringNumbers = ['12','45','1','9.56','0.1','xyz','-3','103045'];
console.log({stringNumbers});
const number = stringNumbers.map(Number);
console.log({number});
//-----------------------------------------------------------------------------------------