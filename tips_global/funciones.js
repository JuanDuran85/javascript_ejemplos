/*

Ejemplos, trucos y tips para trabajar con distintas funciones en JavaScript o ejemplos que utilicen funciones para generar una solucion.

*/


// ----------------------------------------------------------------------------------------
//  Reversing a String with function - Example One using split and reverse
// ----------------------------------------------------------------------------------------

function reverseString(inputString) {
    return inputString.split("").reverse().join("");
}

console.log(reverseString("Ejemplo de string"));

// ----------------------------------------------------------------------------------------


console.log('-----------------------------------------------------------------------------------------');

// ----------------------------------------------------------------------------------------
// Reversing a String with function - Example two using spred and reverse
// ----------------------------------------------------------------------------------------

function reverseStringTwo(inputString) {
    return [...inputString].reverse().join(""); 
}

console.log(reverseStringTwo("Ejemplo de string"));
//-----------------------------------------------------------------------------------------

console.log('-----------------------------------------------------------------------------------------');

// ----------------------------------------------------------------------------------------
// Capitalize first letter of a string in a function
// ----------------------------------------------------------------------------------------

function capitalizeFirstLetter(inputString) {
    return inputString.charAt(0).toUpperCase() + inputString.slice(1); 
}

console.log(capitalizeFirstLetter("ejemplo de string a capitalizar en la primera letra"));
//-----------------------------------------------------------------------------------------

console.log('-----------------------------------------------------------------------------------------');

// ----------------------------------------------------------------------------------------
// Using spread operator in the argument of a function
// ----------------------------------------------------------------------------------------

function eatFood(...fruits) {
    const [first, second] = fruits;
    console.log(`First fruit: ${first}`);
    console.log(`Second fruit: ${second}`);
}

eatFood("Apple", "Orange");
//-----------------------------------------------------------------------------------------