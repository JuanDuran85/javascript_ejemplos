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
// Rest Operator: Recopila todos los elementos restantes en una coleccion. Tambien se puede decir que colapsa todos los argumentos restantes de una funcion dentro de una coleccion.
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

console.log('-----------------------------------------------------------------------------------------');

// ----------------------------------------------------------------------------------------
// You can use filter and Boolean to remove falsey values from an array. Array-filter can take the Boolean constructor as an argument.
// ----------------------------------------------------------------------------------------
console.log('Removing falsey values from an array');
const arrayWithAnyElements = [12,"",null,"casa",undefined,0,NaN,false,true,[],{},0,[0],{key: 0}];
console.log({arrayWithAnyElements});
const resultFilterArray = arrayWithAnyElements.filter(Boolean);
console.log({resultFilterArray});
//-----------------------------------------------------------------------------------------

console.log('-----------------------------------------------------------------------------------------');

// ----------------------------------------------------------------------------------------
// You can use Math library with the max and min methods and spread operator to find the maximum and minimum values in an array.
// ----------------------------------------------------------------------------------------
console.log('Finding the maximum and minimum values in an array');
const arrayToFindMaxAndMin = [4,7,4,21,8,9,5,1,9,-6,-4,3,23];
console.log({arrayToFindMaxAndMin});
console.log(Math.max(...arrayToFindMaxAndMin));
console.log(Math.min(...arrayToFindMaxAndMin));
//-----------------------------------------------------------------------------------------

console.log('-----------------------------------------------------------------------------------------');

// ----------------------------------------------------------------------------------------
// Filtering and Sorting a list of string using filter, lastIndexOf and sort
// ----------------------------------------------------------------------------------------
console.log("Filtering and Sorting a list of string");
const arrayWithString = [
  "casa",
  "carro",
  "perro",
  "gato",
  "zapato",
  "computador",
  "silla",
  "mesa",
  "monitor",
  "algebra",
  "geografia",
];
const filteredAndSortedKeywords = arrayWithString
  .filter(
    (nameFronList, index) => arrayWithString.lastIndexOf(nameFronList) === index
  )
  .sort((a, b) => (a < b ? -1 : 1));
  console.log({filteredAndSortedKeywords});
//-----------------------------------------------------------------------------------------


console.log('-----------------------------------------------------------------------------------------');

// ----------------------------------------------------------------------------------------
// Implementando funciones y objetos para crear un mapa de opciones: Se puede crear un objeto donde el key es la opcion y el value la funcion que se desea ejecutar. Esto permite evitar el uso de tantas condiciones if/else en un trozo de codigo. 
// ----------------------------------------------------------------------------------------
console.log("Funciones y Objetos para no user condicionales");

const preguntarQueQuiereComer = () => console.log("Que quiere comer?");
const cocinarHamburguesa = () => console.log("Cocinar hamburguesa");
const cocinarPizza = () => console.log("Cocinar pizza");

const prepararComida = (comida) => {
    const queCocinar = {
        hamburguesa: cocinarHamburguesa,
        pizza: cocinarPizza,
        nachos: () => console.log("Cocinando nachos"),
    }

    if (queCocinar[comida]) {
        queCocinar[comida]();
    } else {
        preguntarQueQuiereComer();
    }
}

prepararComida("nachos");
//-----------------------------------------------------------------------------------------

console.log('-----------------------------------------------------------------------------------------');

// ----------------------------------------------------------------------------------------
// Utilizando funciones con arreglos y reduce para retornar un objeto (key: value) de una lista de objetos.
// ----------------------------------------------------------------------------------------
console.log("Funciones y Reduce");

const indexArrayByKey = (array, key) => {
    return array.reduce((acumulado, elemento) => {
        const index = elemento[key];
        return {
            ...acumulado,
            [index]: elemento,
        };
    },{});
}

console.log(indexArrayByKey([{id: 1, name: "Juan"}, {id: 2, name: "Pedro"}], "id"));
//-----------------------------------------------------------------------------------------


console.log('-----------------------------------------------------------------------------------------');


// ----------------------------------------------------------------------------------------
// Function to transform an array to a CSV with or not default format
// ----------------------------------------------------------------------------------------
console.log("Array to CSV");

const dataToTransform = [
    ["John", "Liverpool","Guitar"],
    ["Ringo", "Liverpool","Percussion"],
    ["Paul", "Liverpool","Bass"],
    ["George", "Liverpool","Guitar"],
];

const toCsvIn = (inputArray, separator = ",") => {
    // join items inside each nested array into string
    let rowsAsString = inputArray.map(row => row.join(separator));
    // join arrays separeted by a link break
    return rowsAsString.join("\n");
};

console.log(toCsvIn(dataToTransform));
console.log("\n")
console.log(toCsvIn(dataToTransform, ";"));
console.log("\n")
console.log(toCsvIn(dataToTransform, "|"));
//-----------------------------------------------------------------------------------------