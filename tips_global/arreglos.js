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
// Dos formas de eliminar elementos de un array en JS -  When you delete an array element, the array length is not affected. This holds even if you delete the last element of the array. When the delete operator removes an array element, that element is no longer in the array
// ----------------------------------------------------------------------------------------
// 1. usando delete
console.log("Utilizando delete")
const arrayElementosToDelete = ['a', 'b', 'c', 'd', 'e', 'f'];
console.log({arrayElementosToDelete});
delete arrayElementosToDelete[3];
console.log({arrayElementosToDelete});


// ----------------------------------------------------------------------------------------