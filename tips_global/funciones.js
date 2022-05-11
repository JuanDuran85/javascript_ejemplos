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