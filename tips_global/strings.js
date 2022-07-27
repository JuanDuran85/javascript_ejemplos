/*

Ejemplos, trucos y tips para trabajar con string en JavaScript

*/

console.log('-----------------------------------------------------------------------------------------');


// ----------------------------------------------------------------------------------------
// Cuatro maneras de invertir una cadena de texto
// ----------------------------------------------------------------------------------------
// 1. Usando split - reverse - join
console.log("1. Invertir una cadena de texto usando split - reverse - join");
const reverseOne = stringIn => stringIn.split('').reverse().join('');
console.log(`Texto orginal: JavaScript. Texto en reverso: ${reverseOne("JavaScript")}`); // retorna "sapSavaJ" 

// 2. Usando destructuracion - reverse - join
console.log("\n2. Invertir una cadena de texto usando destructuracion - reverse - join");
const reverseStringTwo = stringIn => [...stringIn].reverse().join('');
console.log(`Texto orginal: JavaScript. Texto en reverso: ${reverseStringTwo("JavaScript")}`); // retorna "sapSavaJ" 

// 3. Usando split, reduce y join
console.log("\n3. Invertir una cadena de texto usando split - reduce - join");
const reverseThree = stringIn => stringIn.split('').reverse((reverse,char) => `${char}${reverse}`, '').join('');
console.log(`Texto orginal: JavaScript. Texto en reverso: ${reverseThree("JavaScript")}`); // retorna "sapSavaJ"

// 4. Usando recursividad
console.log("\n4. Invertir una cadena de texto usando recursividad");
const reverseFour = stringIn => stringIn === '' ? '' : reverseFour(stringIn.substring(1)) + stringIn.charAt(0);
console.log(`Texto orginal: JavaScript. Texto en reverso: ${reverseFour("JavaScript")}`); // retorna "sapSavaJ"
// ----------------------------------------------------------------------------------------


console.log('-----------------------------------------------------------------------------------------');


// ----------------------------------------------------------------------------------------
// Realizando una busca en string de un caracter o palabra en particuar con 6 diferentes metodos
// ----------------------------------------------------------------------------------------
console.log("Buscando en un string alguna palabra o caracter en particular");
const mensajeCompleto = "El futuro mostrará los resultados y juzgará a cada uno de acuerdo a sus logros.";
console.log({mensajeCompleto});
// 1. indexOf
console.log(mensajeCompleto.indexOf("resultados")); // retorna el indice de la palabra. Si no existe, entonces retornara -1
// 2. lastIndexOf
console.log(mensajeCompleto.lastIndexOf("o")); // retorna el indice de la ultima coincidencia. Si no existe, entonces retornara -1
// 3. startsWith
console.log(mensajeCompleto.startsWith("El")); // retorna true o false, dependiendo si la cadena empieza con la palabra o no
// 4. endsWith
console.log(mensajeCompleto.endsWith(".")); // retorna true o false, dependiendo si la cadena termina con el caracter o no
// 5. includes
console.log(mensajeCompleto.includes("resultados")); // retorna true o false, dependiendo si la cadena contiene la palabra o no
// 6. match: retorna un array con todas las coincidencias
console.log(mensajeCompleto.match(/a/gi)); // retorna un array con todas las coincidencias

//-----------------------------------------------------------------------------------------


console.log('-----------------------------------------------------------------------------------------');