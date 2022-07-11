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
// 
// ----------------------------------------------------------------------------------------

//-----------------------------------------------------------------------------------------


console.log('-----------------------------------------------------------------------------------------');