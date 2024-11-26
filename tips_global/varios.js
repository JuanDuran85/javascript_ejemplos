/*

Ejemplos, trucos y tips para trabajar con en JavaScript

*/

// ----------------------------------------------------------------------------------------
// Generar un color aleatorio en Hexadecimal
// ----------------------------------------------------------------------------------------

const generaColorAleatorio = () =>
  `#${Math.floor(Math.random() * 0xffffff).toString(16)}`;
console.debug(generaColorAleatorio()); // retorna un color aleatorio
// ----------------------------------------------------------------------------------------

console.debug(
  "-----------------------------------------------------------------------------------------"
);

// ----------------------------------------------------------------------------------------
// Generate Random Password
// ----------------------------------------------------------------------------------------

let pass = "";
const stringAll =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
let getChar = 0;
for (let index = 1; index <= 8; index++) {
  getChar = Math.floor(Math.random() * stringAll.length + 1);
  pass += stringAll.charAt(getChar);
}
console.debug(pass);
//-----------------------------------------------------------------------------------------

console.debug(
  "-----------------------------------------------------------------------------------------"
);

// ----------------------------------------------------------------------------------------
// Tres maneras de recorrer un objeto
// ----------------------------------------------------------------------------------------

const userExampleObject = {
  name: "Juan",
  age: 31,
  weight: 67,
};

// 1. Usando Object.keys y For...of
for (const keys of Object.keys(userExampleObject)) {
  console.debug(keys, userExampleObject[keys]);
}

// 2. Usando solo For...in
for (const key in userExampleObject) {
  if (Object.hasOwnProperty.call(userExampleObject, key)) {
    console.debug(key, userExampleObject[key]);
  }
}

// 3. Usando Object.values and For...of
for (const values of Object.values(userExampleObject)) {
  console.debug(values);
}
//-----------------------------------------------------------------------------------------

console.debug(
  "-----------------------------------------------------------------------------------------"
);

// ----------------------------------------------------------------------------------------
// Spread Operator: Expande un elemento iterable en elementos unicos.
// ----------------------------------------------------------------------------------------
console.debug("--Spread Operator--");
console.debug("Shallow cloning - Crear un copia de un objeto existente");
const shirtOne = {
  color: "green",
  size: "M",
};
const shirtTwo = {
  ...shirtOne,
  color: "white",
};

console.debug({ shirtOne });
console.debug({ shirtTwo });
//---------------------------------------------
console.debug(
  "Add an element - Agregar un elemento a una coleccion de elementos"
);
let closetOne = ["shirt", "socks", "shoes"];
const sweater = "Sweater";
closetOne = [...closetOne, sweater];
console.debug({ sweater });
console.debug({ closetOne });
//-----------------------------------------------------------------------------------------

console.debug(
  "-----------------------------------------------------------------------------------------"
);

// ----------------------------------------------------------------------------------------
// Rest Operator: Recopila todos los elementos restantes en una coleccion. Tambien se puede decir que colapsa todos los argumentos restantes de una funcion dentro de una coleccion.
// ----------------------------------------------------------------------------------------
console.debug("--Rest Operator--");
console.debug(
  "Collects multiple elements - Recopullar multiples elementos en un solo elemento"
);

let closetTwo = ["shirt", "socks", "shoes"];
const clothing = ["jacket", "jeans", "dress"];
console.debug({ closetTwo });
console.debug({ clothing });

const addToClosetTwo = (...clothings) =>
  (closetTwo = [...closetTwo, ...clothings]);

addToClosetTwo(...clothing);
console.debug({ closetTwo });

//---------------------------------------------
console.debug(
  "Join elements - Separar elementos y unir los elementos restantes en una nueva coleccion"
);
const closetThree = ["shirt", "socks", "shoes"];
console.debug({ closetThree });
const [shirt, ...newClosetThree] = closetThree;
console.debug({ newClosetThree });
//-----------------------------------------------------------------------------------------

console.debug(
  "-----------------------------------------------------------------------------------------"
);

// ----------------------------------------------------------------------------------------
// The Performance interface provides access to performance-related information for the current page. It's part of the High Resolution Time API, but is enhanced by the Performance Timeline API, the Navigation Timing API, the User Timing API, and the Resource Timing API.
// ----------------------------------------------------------------------------------------
console.debug(
  "The performance.now() method returns a DOMHighResTimeStamp, measured in milliseconds. "
);
const firstTime = performance.now();
for (let index = 0; index < 1000; index++) {
  console.debug(index);
}
const secondTime = performance.now();
console.debug(`Elapsed time: ${secondTime - firstTime}ms`);
//-----------------------------------------------------------------------------------------

console.debug(
  "-----------------------------------------------------------------------------------------"
);

// ----------------------------------------------------------------------------------------
// Sumatoria de numeros: Utilizando funciones con parametros rest para encontrar el total de varios numeros pasados como argumentos.
// Los parametros rest (...) permiten a una funcion tomar un numero cualquiera de parametros, que seran convertidos en un Array.
// ----------------------------------------------------------------------------------------
console.debug("Sumatoria de numeros con funciones con parametros rest");
const sumaTotal = (...numbers) =>
  numbers.reduce((total, actual) => total + actual);

const resultSumaTotal = sumaTotal(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
console.debug({ resultSumaTotal });
//-----------------------------------------------------------------------------------------

console.debug(
  "-----------------------------------------------------------------------------------------"
);

// ----------------------------------------------------------------------------------------
// You can use map and Number to convert a list of strings to numbers. Array-map can take the Number constructor as an argument.
// ----------------------------------------------------------------------------------------
console.debug("Converting a list of strings to numbers");
const stringNumbers = ["12", "45", "1", "9.56", "0.1", "xyz", "-3", "103045"];
console.debug({ stringNumbers });
const number = stringNumbers.map(Number);
console.debug({ number });
//-----------------------------------------------------------------------------------------

console.debug(
  "-----------------------------------------------------------------------------------------"
);

// ----------------------------------------------------------------------------------------
// You can use filter and Boolean to remove falsey values from an array. Array-filter can take the Boolean constructor as an argument.
// ----------------------------------------------------------------------------------------
console.debug("Removing falsey values from an array");
const arrayWithAnyElements = [
  12,
  "",
  null,
  "casa",
  undefined,
  0,
  NaN,
  false,
  true,
  [],
  {},
  0,
  [0],
  { key: 0 },
];
console.debug({ arrayWithAnyElements });
const resultFilterArray = arrayWithAnyElements.filter(Boolean);
console.debug({ resultFilterArray });
//-----------------------------------------------------------------------------------------

console.debug(
  "-----------------------------------------------------------------------------------------"
);

// ----------------------------------------------------------------------------------------
// You can use Math library with the max and min methods and spread operator to find the maximum and minimum values in an array.
// ----------------------------------------------------------------------------------------
console.debug("Finding the maximum and minimum values in an array");
const arrayToFindMaxAndMin = [4, 7, 4, 21, 8, 9, 5, 1, 9, -6, -4, 3, 23];
console.debug({ arrayToFindMaxAndMin });
console.debug(Math.max(...arrayToFindMaxAndMin));
console.debug(Math.min(...arrayToFindMaxAndMin));
//-----------------------------------------------------------------------------------------

console.debug(
  "-----------------------------------------------------------------------------------------"
);

// ----------------------------------------------------------------------------------------
// Filtering and Sorting a list of string using filter, lastIndexOf and sort
// ----------------------------------------------------------------------------------------
console.debug("Filtering and Sorting a list of string");
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
console.debug({ filteredAndSortedKeywords });
//-----------------------------------------------------------------------------------------

console.debug(
  "-----------------------------------------------------------------------------------------"
);

// ----------------------------------------------------------------------------------------
// Implementando funciones y objetos para crear un mapa de opciones: Se puede crear un objeto donde el key es la opcion y el value la funcion que se desea ejecutar. Esto permite evitar el uso de tantas condiciones if/else en un trozo de codigo.
// ----------------------------------------------------------------------------------------
console.debug("Funciones y Objetos para no user condicionales");

const preguntarQueQuiereComer = () => console.debug("Que quiere comer?");
const cocinarHamburguesa = () => console.debug("Cocinar hamburguesa");
const cocinarPizza = () => console.debug("Cocinar pizza");

const prepararComida = (comida) => {
  const queCocinar = {
    hamburguesa: cocinarHamburguesa,
    pizza: cocinarPizza,
    nachos: () => console.debug("Cocinando nachos"),
  };

  if (queCocinar[comida]) {
    queCocinar[comida]();
  } else {
    preguntarQueQuiereComer();
  }
};

prepararComida("nachos");
//-----------------------------------------------------------------------------------------

console.debug(
  "-----------------------------------------------------------------------------------------"
);

// ----------------------------------------------------------------------------------------
// Utilizando funciones con arreglos y reduce para retornar un objeto (key: value) de una lista de objetos.
// ----------------------------------------------------------------------------------------
console.debug("Funciones y Reduce");

const indexArrayByKey = (array, key) => {
  return array.reduce((acumulado, elemento) => {
    const index = elemento[key];
    return {
      ...acumulado,
      [index]: elemento,
    };
  }, {});
};

console.debug(
  indexArrayByKey(
    [
      { id: 1, name: "Juan" },
      { id: 2, name: "Pedro" },
    ],
    "id"
  )
);
//-----------------------------------------------------------------------------------------

console.debug(
  "-----------------------------------------------------------------------------------------"
);

// ----------------------------------------------------------------------------------------
// Function to transform an array to a CSV with or not default format
// ----------------------------------------------------------------------------------------
console.debug("Array to CSV");

const dataToTransform = [
  ["John", "Liverpool", "Guitar"],
  ["Ringo", "Liverpool", "Percussion"],
  ["Paul", "Liverpool", "Bass"],
  ["George", "Liverpool", "Guitar"],
];

const toCsvIn = (inputArray, separator = ",") => {
  // join items inside each nested array into string
  const rowsAsString = inputArray.map((row) => row.join(separator));
  // join arrays separeted by a link break
  return rowsAsString.join("\n");
};

console.debug(toCsvIn(dataToTransform));
console.debug("\n");
console.debug(toCsvIn(dataToTransform, ";"));
console.debug("\n");
console.debug(toCsvIn(dataToTransform, "|"));
//-----------------------------------------------------------------------------------------

console.debug(
  "-----------------------------------------------------------------------------------------"
);

// ----------------------------------------------------------------------------------------
// Bubble Sort: a simple sorting algorithm that repeatedly steps through the list, compares adjacent elements, and swaps them if the are in the wrong order
// ----------------------------------------------------------------------------------------
console.debug("Bubble Sort");
const bubbleSortFunction = (arrayInValue) => {
  const n = arrayInValue.length;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (arrayInValue[j] > arrayInValue[j + 1]) {
        const temp = arrayInValue[j];
        arrayInValue[j] = arrayInValue[j + 1];
        arrayInValue[j + 1] = temp;
      }
    }
  }
  return arrayInValue;
};

console.debug(bubbleSortFunction([64, 34, 25, 12, 22, 11, 90]));

console.debug(
  "-----------------------------------------------------------------------------------------"
);

// ----------------------------------------------------------------------------------------
// Quick Sort: a fast sorting algorithm that uses a divide-andconquer strategy to sort elements.
// ----------------------------------------------------------------------------------------
console.debug("Quick Sort");
const quickSort = (arrayInValue) => {
  if (arrayInValue.length <= 1) return arrayInValue;

  const pivotValue = arrayInValue[0];
  const leftArray = [];
  const rightArray = [];

  for (let i = 1; i < arrayInValue.length; i++) {
    arrayInValue[i] < pivotValue
      ? leftArray.push(arrayInValue[i])
      : rightArray.push(arrayInValue[i]);
  }

  return quickSort(leftArray).concat(pivotValue, quickSort(rightArray));
};

console.debug(quickSort([64, 34, 25, 12, 22, 11, 90]));
// ----------------------------------------------------------------------------------------
console.debug(
  "-----------------------------------------------------------------------------------------"
);

// ----------------------------------------------------------------------------------------
// Binary Search: An efficient search algorithm that finds the position of a target value within a sorted array.
// ----------------------------------------------------------------------------------------
console.debug("Binary Search");
const binarySearch = (arrIn, targetIn) => {
  let low = 0;
  let high = arrIn.length - 1;

  while (low <= high) {
    const mid = Math.floor((low + high) / 2);
    const guess = arrIn[mid];

    if (guess === targetIn) return mid;
    if (guess > targetIn) high = mid - 1;
    else low = mid + 1;
  }

  return -1;
};

console.debug(binarySearch([1, 3, 5, 7, 9, 11, 13, 15, 17, 19], 15));
