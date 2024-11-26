/*

Ejemplos, trucos y tips para trabajar con arreglos en JavaScript

*/

// ----------------------------------------------------------------------------------------
// Metodo at: permite leer un elemento en un indice dado
// ----------------------------------------------------------------------------------------
const arregloUno = ['a', 'b', 'c', 'd', 'e', 'f']
console.debug(arregloUno.at(0)); // retorna 'a'
console.debug(arregloUno.at(-1)); // retorna 'f'

// ----------------------------------------------------------------------------------------


console.debug('-----------------------------------------------------------------------------------------');

// ----------------------------------------------------------------------------------------
// Barajar un array: es organizar su elemento de forma aleatoria.
// ----------------------------------------------------------------------------------------

const arrayDosBarajar = (arr) => arr.sort(() => Math.random() - 0.5);
const arregloTres = ['a', 'b', 'c', 'd', 'e', 'f'];
console.debug(arrayDosBarajar(arregloTres)); // retorna un array aleatorio

//-----------------------------------------------------------------------------------------

console.debug('-----------------------------------------------------------------------------------------');

// ----------------------------------------------------------------------------------------
// Obtener elementos unicos de un array mediante Set
// ----------------------------------------------------------------------------------------
const obtenerElementosUnicos = (arreglo) => [...new Set(arreglo)];
const arregloDos = ['a','d','e','b','c','d','c','e','f','a','b','c','d','e','c','f','a','f'];
console.debug(obtenerElementosUnicos(arregloDos)); // retorna un array con los elementos unicos


//-----------------------------------------------------------------------------------------

console.debug('-----------------------------------------------------------------------------------------');

// ----------------------------------------------------------------------------------------
// Cuatro formas distintas de convertir un string a un arreglo
// ----------------------------------------------------------------------------------------
const stringUno = "JavaScript";
// Opcion 1:
console.debug(`String original: ${stringUno}`)
console.debug(stringUno.split(','));

// Opcion 2:
console.debug([...stringUno]);

// Opcion 3:
console.debug(Array.from(stringUno));

// Opcion 4:
console.debug();

//-----------------------------------------------------------------------------------------

console.debug('-----------------------------------------------------------------------------------------');

// ----------------------------------------------------------------------------------------
// El metodo includes permite saber si un elemento existe en un arreglo, en convinacion con un condicional if, podemos hacer una comparacion de un elemento en un arreglo y ahorrar condiciones repetidas. Incluso crear funciones que solo se encarguen de buscar un elemento en un arreglo.
// ----------------------------------------------------------------------------------------

const arregloStringElementos = ['Casa', 1, "Compra", "cosas"]
if (arregloStringElementos.includes('Casa')) {
  console.debug('El elemento existe');
}

const findAnimal = "Perro";

const validateAnimal = (animalName) => {
  const animalsReference = ["Perro", "Gato", "Caballo", "Cabra"];
  return animalsReference.includes(animalName);
};

if(validateAnimal(findAnimal)) {
  console.debug(`El animal ${findAnimal} existe`);
} else {
  console.debug(`El animal ${findAnimal} no existe`);
}
//-----------------------------------------------------------------------------------------

console.debug('-----------------------------------------------------------------------------------------');

// ----------------------------------------------------------------------------------------
// Se puede utilizar el metodo filter para filtrar elementos de un arreglo, pero al pasarle como argumento la palabra Boolean, retornara solamente los elementos del arreglo que sean true o validos.
// ----------------------------------------------------------------------------------------

const arregloSinValidar = [12, null, 0, 34, "JS", false];
const arregloFiltradoValido = arregloSinValidar.filter(Boolean);
console.debug(arregloFiltradoValido);

//-----------------------------------------------------------------------------------------

console.debug('-----------------------------------------------------------------------------------------');

// ----------------------------------------------------------------------------------------
// Para obtener el valor maximo y minimo de un arreglo se puede utilizar el metodo Math.max y Math.min.
// ----------------------------------------------------------------------------------------

const arregloNumeros = [3,6,8,2,6,1,9];

console.debug(Math.max(...arregloNumeros)); // 9
console.debug(Math.min(...arregloNumeros)); // 1


// ----------------------------------------------------------------------------------------

console.debug('-----------------------------------------------------------------------------------------');

// ----------------------------------------------------------------------------------------
// Se pueden unir o concatenar dos arreglos de dos posibles maneras, una es mediante el metodo concat, y la otra es mediante el metodo spread.
// ----------------------------------------------------------------------------------------

const arregloNumerosUno = [3,6,8];
console.debug(arregloNumerosUno);
// Opcion 1: concat
const arregloConcatenadoUno = arregloNumerosUno.concat([6,2]);
console.debug(arregloConcatenadoUno); 

// Opcion 2: operador spread
const arregloConcatenadoDos = [...arregloNumerosUno, 6,2];
console.debug(arregloConcatenadoDos);

// ----------------------------------------------------------------------------------------

console.debug('-----------------------------------------------------------------------------------------');

// ----------------------------------------------------------------------------------------
// Using delete to erase an element in an array -  When you delete an array element, the array length is not affected. This holds even if you delete the last element of the array. When the delete operator removes an array element, that element is no longer in the array
// ----------------------------------------------------------------------------------------
// 1. usando delete
console.debug("Utilizando delete")
const arrayElementosToDelete = ['a', 'b', 'c', 'd', 'e', 'f'];
console.debug({arrayElementosToDelete});
delete arrayElementosToDelete[3];
console.debug({arrayElementosToDelete});

// ----------------------------------------------------------------------------------------

console.debug('-----------------------------------------------------------------------------------------');

// ----------------------------------------------------------------------------------------
// String to array in JS
// ----------------------------------------------------------------------------------------
console.debug("1. Split string to array");
const stringToArrayWithSplit = "JavaScript-JS";
console.debug(stringToArrayWithSplit.split("-"));

console.debug("2. Array From");
const stringToArrayWithArrayFrom = "JavaScript-JS";
console.debug(Array.from(stringToArrayWithArrayFrom));

console.debug("3. Object assign");
const stringToArrayWithObjectAssign = "JavaScript-JS";
console.debug(Object.assign([], stringToArrayWithObjectAssign));

console.debug("4. Spread operator");
const stringToArrayWithSpreadOperator = "JavaScript-JS";
console.debug([...stringToArrayWithSpreadOperator]);

console.debug("5. Manual for loop");
const stringToArrayWithManualForLoop = "JavaScript-JS";
let arrayFinal = [];
for (let index of stringToArrayWithManualForLoop) {
  arrayFinal.push(index);
}
console.debug({arrayFinal});

console.debug("6. JSON Parse");
const stringToArrayWithJSONParse = '["J","a","v","a","S","c","r","i","p","t"]';
console.debug(JSON.parse(stringToArrayWithJSONParse));

// ----------------------------------------------------------------------------------------

console.debug('-----------------------------------------------------------------------------------------');

// ----------------------------------------------------------------------------------------
// JS Arrays Destructuring
// ----------------------------------------------------------------------------------------

console.debug("Assigning array items to variables");
const [a, b, c] = [45,"texto",true];
console.debug({a,b,c});

console.debug("Skipping items");
const [,x] = [45,"texto",true];
console.debug({x});

console.debug("Assigning the first nvalues, storing the rest together");
const [y,z, ...rest] = [45,"texto",true,[1,2,3],{name: "Juan"}];
console.debug({y,z,rest});

console.debug("Swapping values");
let w = true;
let p = false;
console.debug({w,p});
[w,p] = [p,w];
console.debug({w,p});

console.debug("Using positional arguments to assign values");
const countries = ["Venezuela","Chile","Colombia","Peru","Brasil"];
const { 0: ven, 3: per } = countries;
console.debug({ven,per});

// ----------------------------------------------------------------------------------------

console.debug('-----------------------------------------------------------------------------------------');

// ----------------------------------------------------------------------------------------
// Using map and flatMap to merge two arrays in one. -  The map method returns a new array with the results of calling a provided function on every element in the calling array. The flatMap method returns a new array with the concatenation of the results of calling a provided function on every element in the calling array.
// ----------------------------------------------------------------------------------------
const animals = ["🐱​","​🐶​","​🦊​","​🐺​","🦝"];
const names = ["cat","dog","fox","wolf","raccoon"];
// 1. map
console.debug("Using map:");
const mapOnly = animals.map((animal, index) => [animal, names[index]]);
console.debug({mapOnly});

// 2. flatMap
console.debug("Using flatMap:");
const flatMapOnly = animals.flatMap((animal, index) => [animal, names[index]]);
console.debug({flatMapOnly});
// ----------------------------------------------------------------------------------------

console.debug('-----------------------------------------------------------------------------------------');

// ----------------------------------------------------------------------------------------
// You can use the math library to find a get a random item from an array.
// ----------------------------------------------------------------------------------------
console.debug("Random item from array with Math Library");
const arrayToFindRandomItem = ["Python","JavaScript","C++","C#","Java","PHP","Ruby"];
console.debug({arrayToFindRandomItem});
const randomItemFound = arrayToFindRandomItem[Math.floor(Math.random() * arrayToFindRandomItem.length)];
console.debug({randomItemFound});
// ----------------------------------------------------------------------------------------

console.debug('-----------------------------------------------------------------------------------------');

// ----------------------------------------------------------------------------------------
// You can use filter methods to find items in an array, and length to count the number of items found.
// ----------------------------------------------------------------------------------------
console.debug("Finding items in array with filter and count");
const arregloNumerosTwo = [1,1,3,4,1,5,5,7,1,4,3,5,1,9,4,3,2,1,5];
const countTotal = (numToFind) => arregloNumerosTwo.filter(item => item === numToFind).length;
console.debug(countTotal(7));
// ----------------------------------------------------------------------------------------

console.debug('-----------------------------------------------------------------------------------------');

// ----------------------------------------------------------------------------------------
// You can use reduce methods to find the sum of a specific imtem in an array and create an object.
// ----------------------------------------------------------------------------------------
console.debug("Using reduce to sum an array");
const dataToTransformOne = ["casa", "carro", "perro", "carro", "perro"];
const dataToTransformTwo = ["casa", "carro", "perro", "carro", "perro"];
const dataToTransform = [...dataToTransformOne, ...dataToTransformTwo];
console.debug({dataToTransform});
const result = dataToTransform.reduce(
  (map, word) => ({ ...map, [word]: (map[word] || 0) + 1 }),
  {}
);
console.debug({ result });
// ----------------------------------------------------------------------------------------

console.debug('-----------------------------------------------------------------------------------------');

// ----------------------------------------------------------------------------------------
// Using reduce and filter into a function to count the number of times an item appears in an array
// ----------------------------------------------------------------------------------------
console.debug("Using reduce and filter into a function");

const countItemFromArray = (arrayIn, element) =>
  arrayIn.reduce(
    (count, subArray) =>
      subArray.filter((value) => value === element).length + count,
    0
  );
const dataFinal = [
  ["casa", "carro", "perro"],
  ["carro", "perro", "pc"],
  ["casa", "gato"],
  ["carro", "perro", "pc"],
];
console.debug({dataFinal});
console.debug(`La cuenta para el elemento: carro es: ${countItemFromArray(dataFinal, "carro")}`);
// ----------------------------------------------------------------------------------------

console.debug('-----------------------------------------------------------------------------------------');

// ----------------------------------------------------------------------------------------
// With the use of reduce method easily calcule the total, minumum and maximum value in the array.
// ----------------------------------------------------------------------------------------
console.debug("Get total, min and max from array with reduce");

const arrayToCalculeAll = [4,6,3,1,8,9,0,5,-4,2];
console.debug({arrayToCalculeAll});

// Total
const totalValueFromArray = arrayToCalculeAll.reduce((num1,num2) => num1 + num2);
console.debug({totalValueFromArray});

// Maximum
const maximunValueFromArray = arrayToCalculeAll.reduce((num3,num4) => num3 > num4 ? num3 : num4);
console.debug({maximunValueFromArray});

// Minimum
const minumumValueFromArray = arrayToCalculeAll.reduce((num5,num6) => num5 < num6 ? num5 : num6);
console.debug({minumumValueFromArray});
// ----------------------------------------------------------------------------------------

console.debug('-----------------------------------------------------------------------------------------');

// ----------------------------------------------------------------------------------------
// Se puede utilizar funciones, ciclos y condicionales basicos para encontrar la cantidad de veces que se repite un elemento en un array.
// ----------------------------------------------------------------------------------------
console.debug("Contador de elemento en un array");
const arryToCountItem = ["casa", "carro", "perro", "carro", "perro"];
console.debug({arryToCountItem});
const contadorElemento = (unidimensionalArray, elemento) => {
  let contador = 0;
  for (const elementInArray of unidimensionalArray) {
    if (elementInArray === elemento) contador++;
  }
  return contador;
};

console.debug(`El elemento: carro se repite: ${contadorElemento(arryToCountItem, "carro")} veces`);
// ----------------------------------------------------------------------------------------

console.debug('-----------------------------------------------------------------------------------------');

// ----------------------------------------------------------------------------------------
// Se puede utilizar splice mas indexOf para eliminar un elemento en especifico de una arreglo de acuerdo a su ubicacion.
// ----------------------------------------------------------------------------------------
console.debug("Eliminando un elemeto de un arreglo");
let numerosLoteria = [4,6,2,7,9,10,1,2,11,3];
console.debug({numerosLoteria});
const indexNumero = numerosLoteria.indexOf(177);
numerosLoteria.splice(indexNumero,indexNumero > 0 ? 1 : 0);
console.debug({numerosLoteria});
// ----------------------------------------------------------------------------------------

console.debug('-----------------------------------------------------------------------------------------');

// ----------------------------------------------------------------------------------------
// Se puede utilizar funciones, ciclos y condicionales basicos para encontrar la cantidad de veces que se repite un elemento en una matriz.
// ----------------------------------------------------------------------------------------
console.debug("Contador de elemento en una matriz");
const countElementInMatrix = (matrix, element) => {
  let countTotalTwo = 0;
  for (const row of matrix) {
    for (const elementInRow of row) {
      if (elementInRow === element) countTotalTwo++;
    }
  }
  return countTotalTwo;
};

const dataFinalTwo = [
  ["casa", "carro", "perro"],
  ["carro", "perro", "pc"],
  ["casa", "gato"],
  ["carro", "perro", "pc"],
];
console.debug({dataFinalTwo});
console.debug(`El elemento: carro se repite: ${countElementInMatrix(dataFinalTwo, "carro")} veces`);
// ----------------------------------------------------------------------------------------


console.debug('-----------------------------------------------------------------------------------------');

// ----------------------------------------------------------------------------------------
// You can filter number from an array using filter by passing Number as an argument, but if you want filter only integer number and not string number, you can use the isInteger method. 
// ----------------------------------------------------------------------------------------
console.debug("Number.isInteger");
const arrayNumbers = ['1','2',3,'4',5,'6','texto',false,true,[],{},null,undefined,0,'0'];
console.debug({arrayNumbers});
const resultNumberFilterOne = arrayNumbers.filter(Number);
console.debug({resultNumberFilterOne});
const resultNumberFilterTwo = arrayNumbers.filter(Number.isInteger);
console.debug({resultNumberFilterTwo});
// ----------------------------------------------------------------------------------------

console.debug('-----------------------------------------------------------------------------------------');

// ----------------------------------------------------------------------------------------
// Se puede mezclar los elementos de un array mediante la utilizacion de spread operator, sort method y la libreria Math con las funciones round y random.
// ----------------------------------------------------------------------------------------
console.debug("Mezclando elementos de una array");
const colors = ["rojo", "azul", "verde", "amarillo", "rosa"];
console.debug({colors});
const getArayColorsMixed = (arrayIn = []) => [...arrayIn].sort(()=> Math.round(Math.random())*2-1);
console.debug(getArayColorsMixed(colors));
console.debug(getArayColorsMixed(colors));
console.debug(getArayColorsMixed(colors));
// ----------------------------------------------------------------------------------------

console.debug('-----------------------------------------------------------------------------------------');

// ----------------------------------------------------------------------------------------
// Se puede utilizar for..of para atravesar arreglos, tambien se puede agregar desestructuracion para capturar una propiedad en particular.
// ----------------------------------------------------------------------------------------
console.debug("Usando for..of para arreglos");
const users = [
  { name: "Juan", age: 20 },
  { name: "Pedro", age: 30 },
  { name: "Maria", age: 40 },
];

for (const userValues of users) {
  console.debug(userValues);
}

for (const { name } of users) {
  console.debug(name);
}
// ----------------------------------------------------------------------------------------

console.debug('-----------------------------------------------------------------------------------------');

// ----------------------------------------------------------------------------------------
// 
// ----------------------------------------------------------------------------------------
console.debug("Chunking an array in n chunks");

const chunk = (arr, size) =>
  Array.from({ length: Math.ceil(arr.length / size) }, (_, i) =>
    arr.slice(i * size, i * size + size)
  );

console.debug(chunk([1, 2, 3, 4, 5, 6, 7], 3));
// ----------------------------------------------------------------------------------------

console.debug('-----------------------------------------------------------------------------------------');

// ----------------------------------------------------------------------------------------
// Array to Object transformation with reduces or fromEntries methods.
// ----------------------------------------------------------------------------------------
console.debug("Array to Object with reduce");
// Maximum customization

const peopleData = [
  ['name', 'John'],
  ['age', 30],
  ['city', 'New York'],
]; // we want to see the result as { name: 'John', age: 30, city: 'New York' }

const arrayToObject = (arrayIn) => {
  return arrayIn.reduce((total, actual) => {
    const [prop, value] = actual;
    return {
      ...total,
      [prop]: value
    };
  }, {});
};

console.debug(arrayToObject(peopleData));
//---------------------------------------------------------------------
console.debug("Array to Object with fromEntries");
// Easy way

const resultArrayToObject = Object.fromEntries(peopleData);
console.debug({resultArrayToObject});
// ----------------------------------------------------------------------------------------