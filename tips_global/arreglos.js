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
// El metodo includes permite saber si un elemento existe en un arreglo, en convinacion con un condicional if, podemos hacer una comparacion de un elemento en un arreglo y ahorrar condiciones repetidas.
// ----------------------------------------------------------------------------------------

const arregloStringElementos = ['Casa', 1, "Compra", "cosas"]
if (arregloStringElementos.includes('Casa')) {
  console.log('El elemento existe');
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