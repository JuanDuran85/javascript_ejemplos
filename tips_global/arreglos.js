/*

Ejemplos, trucos y tips para trabajar con arreglos en JavaScript

*/

// ----------------------------------------------------------------------------------------
// Metodo at: permite leer un elemento en un indice dado
// ----------------------------------------------------------------------------------------
const arregloUno = ['a', 'b', 'c', 'd', 'e', 'f']
console.log(arregloUno.at(0)); // retorna 'a'
console.log(arregloUno.at(-1)); // retorna 'f'

// ----------------------------------------------------------------------------------------


console.log('-----------------------------------------------------------------------------------------');

// ----------------------------------------------------------------------------------------
// Barajar un array: es organizar su elemento de forma aleatoria.
// ----------------------------------------------------------------------------------------

const arrayDosBarajar = (arr) => arr.sort(() => Math.random() - 0.5);
const arregloTres = ['a', 'b', 'c', 'd', 'e', 'f'];
console.log(arrayDosBarajar(arregloTres)); // retorna un array aleatorio

//-----------------------------------------------------------------------------------------

console.log('-----------------------------------------------------------------------------------------');

// ----------------------------------------------------------------------------------------
// Obtener elementos unicos de un array mediante Set
// ----------------------------------------------------------------------------------------
const obtenerElementosUnicos = (arreglo) => [...new Set(arreglo)];
const arregloDos = ['a','d','e','b','c','d','c','e','f','a','b','c','d','e','c','f','a','f'];
console.log(obtenerElementosUnicos(arregloDos)); // retorna un array con los elementos unicos


//-----------------------------------------------------------------------------------------

console.log('-----------------------------------------------------------------------------------------');

// ----------------------------------------------------------------------------------------
// Cuatro formas distintas de convertir un string a un arreglo
// ----------------------------------------------------------------------------------------
const stringUno = "JavaScript";
// Opcion 1:
console.log(`String original: ${stringUno}`)
console.log(stringUno.split(','));

// Opcion 2:
console.log([...stringUno]);

// Opcion 3:
console.log(Array.from(stringUno));

// Opcion 4:
console.log();

//-----------------------------------------------------------------------------------------

console.log('-----------------------------------------------------------------------------------------');

// ----------------------------------------------------------------------------------------
// El metodo includes permite saber si un elemento existe en un arreglo, en convinacion con un condicional if, podemos hacer una comparacion de un elemento en un arreglo y ahorrar condiciones repetidas. Incluso crear funciones que solo se encarguen de buscar un elemento en un arreglo.
// ----------------------------------------------------------------------------------------

const arregloStringElementos = ['Casa', 1, "Compra", "cosas"]
if (arregloStringElementos.includes('Casa')) {
  console.log('El elemento existe');
}

const findAnimal = "Perro";

const validateAnimal = (animalName) => {
  const animalsReference = ["Perro", "Gato", "Caballo", "Cabra"];
  return animalsReference.includes(animalName);
};

if(validateAnimal(findAnimal)) {
  console.log(`El animal ${findAnimal} existe`);
} else {
  console.log(`El animal ${findAnimal} no existe`);
}
//-----------------------------------------------------------------------------------------

console.log('-----------------------------------------------------------------------------------------');

// ----------------------------------------------------------------------------------------
// Se puede utilizar el metodo filter para filtrar elementos de un arreglo, pero al pasarle como argumento la palabra Boolean, retornara solamente los elementos del arreglo que sean true o validos.
// ----------------------------------------------------------------------------------------

const arregloSinValidar = [12, null, 0, 34, "JS", false];
const arregloFiltradoValido = arregloSinValidar.filter(Boolean);
console.log(arregloFiltradoValido);

//-----------------------------------------------------------------------------------------

console.log('-----------------------------------------------------------------------------------------');

// ----------------------------------------------------------------------------------------
// Para obtener el valor maximo y minimo de un arreglo se puede utilizar el metodo Math.max y Math.min.
// ----------------------------------------------------------------------------------------

const arregloNumeros = [3,6,8,2,6,1,9];

console.log(Math.max(...arregloNumeros)); // 9
console.log(Math.min(...arregloNumeros)); // 1


// ----------------------------------------------------------------------------------------

console.log('-----------------------------------------------------------------------------------------');

// ----------------------------------------------------------------------------------------
// Se pueden unir o concatenar dos arreglos de dos posibles maneras, una es mediante el metodo concat, y la otra es mediante el metodo spread.
// ----------------------------------------------------------------------------------------

const arregloNumerosUno = [3,6,8];
console.log(arregloNumerosUno);
// Opcion 1: concat
const arregloConcatenadoUno = arregloNumerosUno.concat([6,2]);
console.log(arregloConcatenadoUno); 

// Opcion 2: operador spread
const arregloConcatenadoDos = [...arregloNumerosUno, 6,2];
console.log(arregloConcatenadoDos);

// ----------------------------------------------------------------------------------------

console.log('-----------------------------------------------------------------------------------------');

// ----------------------------------------------------------------------------------------
// Using delete to erase an element in an array -  When you delete an array element, the array length is not affected. This holds even if you delete the last element of the array. When the delete operator removes an array element, that element is no longer in the array
// ----------------------------------------------------------------------------------------
// 1. usando delete
console.log("Utilizando delete")
const arrayElementosToDelete = ['a', 'b', 'c', 'd', 'e', 'f'];
console.log({arrayElementosToDelete});
delete arrayElementosToDelete[3];
console.log({arrayElementosToDelete});

// ----------------------------------------------------------------------------------------

console.log('-----------------------------------------------------------------------------------------');

// ----------------------------------------------------------------------------------------
// String to array in JS
// ----------------------------------------------------------------------------------------
console.log("1. Split string to array");
const stringToArrayWithSplit = "JavaScript-JS";
console.log(stringToArrayWithSplit.split("-"));

console.log("2. Array From");
const stringToArrayWithArrayFrom = "JavaScript-JS";
console.log(Array.from(stringToArrayWithArrayFrom));

console.log("3. Object assign");
const stringToArrayWithObjectAssign = "JavaScript-JS";
console.log(Object.assign([], stringToArrayWithObjectAssign));

console.log("4. Spread operator");
const stringToArrayWithSpreadOperator = "JavaScript-JS";
console.log([...stringToArrayWithSpreadOperator]);

console.log("5. Manual for loop");
const stringToArrayWithManualForLoop = "JavaScript-JS";
let arrayFinal = [];
for (let index of stringToArrayWithManualForLoop) {
  arrayFinal.push(index);
}
console.log({arrayFinal});

console.log("6. JSON Parse");
const stringToArrayWithJSONParse = '["J","a","v","a","S","c","r","i","p","t"]';
console.log(JSON.parse(stringToArrayWithJSONParse));

// ----------------------------------------------------------------------------------------

console.log('-----------------------------------------------------------------------------------------');

// ----------------------------------------------------------------------------------------
// JS Arrays Destructuring
// ----------------------------------------------------------------------------------------

console.log("Assigning array items to variables");
const [a, b, c] = [45,"texto",true];
console.log({a,b,c});

console.log("Skipping items");
const [,x] = [45,"texto",true];
console.log({x});

console.log("Assigning the first nvalues, storing the rest together");
const [y,z, ...rest] = [45,"texto",true,[1,2,3],{name: "Juan"}];
console.log({y,z,rest});

console.log("Swapping values");
let w = true;
let p = false;
console.log({w,p});
[w,p] = [p,w];
console.log({w,p});

console.log("Using positional arguments to assign values");
const countries = ["Venezuela","Chile","Colombia","Peru","Brasil"];
const { 0: ven, 3: per } = countries;
console.log({ven,per});

// ----------------------------------------------------------------------------------------

console.log('-----------------------------------------------------------------------------------------');

// ----------------------------------------------------------------------------------------
// Using map and flatMap to merge two arrays in one. -  The map method returns a new array with the results of calling a provided function on every element in the calling array. The flatMap method returns a new array with the concatenation of the results of calling a provided function on every element in the calling array.
// ----------------------------------------------------------------------------------------
const animals = ["🐱​","​🐶​","​🦊​","​🐺​","🦝"];
const names = ["cat","dog","fox","wolf","raccoon"];
// 1. map
console.log("Using map:");
const mapOnly = animals.map((animal, index) => [animal, names[index]]);
console.log({mapOnly});

// 2. flatMap
console.log("Using flatMap:");
const flatMapOnly = animals.flatMap((animal, index) => [animal, names[index]]);
console.log({flatMapOnly});
// ----------------------------------------------------------------------------------------