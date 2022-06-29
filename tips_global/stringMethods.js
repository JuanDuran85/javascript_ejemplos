/*

    Metodos de String en JavaScript - JavaScript String Methods Cheat Sheet
        - chartAt
        - charCodeAt
        - codePointAt
        - concat
        - endsWith
        - fromCharCode
        - fromCodePoint
        - includes
        - indexOf
        - lastIndexOf
        - replace
        - search
        - slice
        - substr
        - toUpperCasa
        - valueOf
        - trim
        - toString
        - match
        - split
        - toLowerCase
        -
        -
        -
*/

console.log("----------------------------------------------------------------------");
//-----------------------------------------------------------------------------------
// The at() method takes an integer value and returns a new String consisting of the single UTF-16 code unit located at the specified offset. This method allows for positive and negative integers. Negative integers count back from the last string character.
//-----------------------------------------------------------------------------------
console.log("at method");
const textoToAt = "Aplicando el metodo at";
console.log(`Texto original: ${textoToAt}`);
console.log(`Aplicando at(4): ${textoToAt.at(4)}`);   // c
console.log(`Aplicando at(-4): ${textoToAt.at(-4)}`); // 0
//-----------------------------------------------------------------------------------
console.log("----------------------------------------------------------------------");


console.log("----------------------------------------------------------------------");
//-----------------------------------------------------------------------------------
// The String object's charAt() method returns a new string consisting of the single UTF-16 code unit located at the specified offset into the string. 
//-----------------------------------------------------------------------------------
console.log("chartAt method");
const textoToChartAt = "Aplicando el metodo chartAt";
console.log(`Texto original: ${textoToChartAt}`);
console.log(`Aplicando chartAt(4): ${textoToChartAt.charAt(4)}`);  // c
//-----------------------------------------------------------------------------------
console.log("----------------------------------------------------------------------");


console.log("----------------------------------------------------------------------");
//-----------------------------------------------------------------------------------
// The charCodeAt() method returns an integer between 0 and 65535 representing the UTF-16 code unit at the given index. 
//-----------------------------------------------------------------------------------
console.log("charCodeAt method");
const textToChartCodeAt = "Aplicando el metodo charCodeAt";
console.log(`Texto original: ${textToChartCodeAt}`);
console.log(`Aplicando charCodeAt(4): ${textToChartCodeAt.charCodeAt(4)}`); // 99
//-----------------------------------------------------------------------------------
console.log("----------------------------------------------------------------------");


console.log("----------------------------------------------------------------------");
//-----------------------------------------------------------------------------------
// The codePointAt() method returns a non-negative integer that is the Unicode code point value at the given position. Note that this function does not give the nth code point in a string, but the code point starting at the specified string index. 
//-----------------------------------------------------------------------------------
console.log("codePointAt method");
const textToCodePointAt = "❤ ♛ ❀ ✔ ✖ ♂ ◥ ▶ ☆ ❣ ❂";
console.log(`Texto original: ${textToCodePointAt}`);
console.log(`Aplicando codePointAt(4): ${textToCodePointAt.codePointAt(4)}`); // 10048
//-----------------------------------------------------------------------------------
console.log("----------------------------------------------------------------------");


console.log("----------------------------------------------------------------------");
//-----------------------------------------------------------------------------------
// The concat() method concatenates the string arguments to the calling string and returns a new string. 
//-----------------------------------------------------------------------------------
console.log(" method");
const textoToConcatOne = "Aplicando el";
const textoToConcatTwo = "Metodo concat";
console.log(`Textos originales: 1. ${textoToConcatOne} - 2. ${textoToConcatTwo}`);
console.log(`Aplicando concat: ${textoToConcatOne.concat(textoToConcatTwo)}`);
console.log(`Aplicando concat: ${textoToConcatOne.concat(': ',textoToConcatTwo)}`);
//-----------------------------------------------------------------------------------
console.log("----------------------------------------------------------------------");


console.log("----------------------------------------------------------------------");
//-----------------------------------------------------------------------------------
// The endsWith() method determines whether a string ends with the characters of a specified string, returning true or false as appropriate. 
//-----------------------------------------------------------------------------------
console.log("endsWith method");
const textoToEndsWith = "Aplicando el metodo endsWith";
console.log(`Texto original: ${textoToEndsWith}`);
console.log(`Texto a buscar: ${textoToEndsWith.endsWith("metodo")}`);
console.log(`Texto a buscar: ${textoToEndsWith.endsWith("endsWith")}`);
console.log(`Texto a buscar: ${textoToEndsWith.endsWith("el", 12)}`);
//-----------------------------------------------------------------------------------
console.log("----------------------------------------------------------------------");


console.log("----------------------------------------------------------------------");
//-----------------------------------------------------------------------------------
// The static String.fromCharCode() method returns a string created from the specified sequence of UTF-16 code units. 
//-----------------------------------------------------------------------------------
console.log("fromCharCode method");
console.log(`Aplicando el metodo fromCharCode: ${String.fromCharCode(65, 66, 67)}`);
//-----------------------------------------------------------------------------------
console.log("----------------------------------------------------------------------");


console.log("----------------------------------------------------------------------");
//-----------------------------------------------------------------------------------
// The static String.fromCodePoint() method returns a string created by using the specified sequence of code points. 
//-----------------------------------------------------------------------------------
console.log("fromCodePoint method");
console.log(`Aplicando el metodo fromCodePoint: ${String.fromCodePoint(9731, 9733, 9842, 0x2F804)}`);
//-----------------------------------------------------------------------------------
console.log("----------------------------------------------------------------------");


console.log("----------------------------------------------------------------------");
//-----------------------------------------------------------------------------------
// The includes() method performs a case-sensitive search to determine whether one string may be found within another string, returning true or false as appropriate. 
//-----------------------------------------------------------------------------------
console.log(" method");
const textToIncludes = "Aplicando el metodo includes en JS";
console.log(`Texto original: ${textToIncludes}`);
console.log(`Texto a buscar 'JS': ${textToIncludes.includes("JS")}`);
//-----------------------------------------------------------------------------------
console.log("----------------------------------------------------------------------");


console.log("----------------------------------------------------------------------");
//-----------------------------------------------------------------------------------
// The indexOf() method, given one argument: a substring to search for, searches the entire calling string, and returns the index of the first occurrence of the specified substring. Given a second argument: a number, the method returns the first occurrence of the specified substring at an index greater than or equal to the specified number.
//-----------------------------------------------------------------------------------
console.log("indexOf method");
//-----------------------------------------------------------------------------------
const textoToIndexOf = "Aplicando el metodo indexOf en JS";
console.log(`Texto original: ${textoToIndexOf}`);
console.log(`Texto a buscar 'JS': ${textoToIndexOf.indexOf("JS")}`);

console.log("----------------------------------------------------------------------");


console.log("----------------------------------------------------------------------");
//-----------------------------------------------------------------------------------
// The lastIndexOf() method, given one argument: a substring to search for, searches the entire calling string, and returns the index of the last occurrence of the specified substring. Given a second argument: a number, the method returns the last occurrence of the specified substring at an index less than or equal to the specified number.
//-----------------------------------------------------------------------------------
console.log("lastIndexOf method");


//-----------------------------------------------------------------------------------
console.log("----------------------------------------------------------------------");


console.log("----------------------------------------------------------------------");
//-----------------------------------------------------------------------------------
//
//-----------------------------------------------------------------------------------
console.log(" method");
//-----------------------------------------------------------------------------------
console.log("----------------------------------------------------------------------");


console.log("----------------------------------------------------------------------");
//-----------------------------------------------------------------------------------
//
//-----------------------------------------------------------------------------------
console.log(" method");
//-----------------------------------------------------------------------------------
console.log("----------------------------------------------------------------------");


console.log("----------------------------------------------------------------------");
//-----------------------------------------------------------------------------------
//
//-----------------------------------------------------------------------------------
console.log(" method");
//-----------------------------------------------------------------------------------
console.log("----------------------------------------------------------------------");


console.log("----------------------------------------------------------------------");
//-----------------------------------------------------------------------------------
//
//-----------------------------------------------------------------------------------
console.log(" method");
//-----------------------------------------------------------------------------------
console.log("----------------------------------------------------------------------");


console.log("----------------------------------------------------------------------");
//-----------------------------------------------------------------------------------
//
//-----------------------------------------------------------------------------------
console.log(" method");
//-----------------------------------------------------------------------------------
console.log("----------------------------------------------------------------------");


console.log("----------------------------------------------------------------------");
//-----------------------------------------------------------------------------------
//
//-----------------------------------------------------------------------------------
console.log(" method");
//-----------------------------------------------------------------------------------
console.log("----------------------------------------------------------------------");


console.log("----------------------------------------------------------------------");
//-----------------------------------------------------------------------------------
//
//-----------------------------------------------------------------------------------
console.log(" method");
//-----------------------------------------------------------------------------------
console.log("----------------------------------------------------------------------");


console.log("----------------------------------------------------------------------");
//-----------------------------------------------------------------------------------
//
//-----------------------------------------------------------------------------------
console.log(" method");
//-----------------------------------------------------------------------------------
console.log("----------------------------------------------------------------------");


console.log("----------------------------------------------------------------------");
//-----------------------------------------------------------------------------------
//
//-----------------------------------------------------------------------------------
console.log(" method");
//-----------------------------------------------------------------------------------
console.log("----------------------------------------------------------------------");


console.log("----------------------------------------------------------------------");
//-----------------------------------------------------------------------------------
//
//-----------------------------------------------------------------------------------
console.log(" method");
//-----------------------------------------------------------------------------------
console.log("----------------------------------------------------------------------");


console.log("----------------------------------------------------------------------");
//-----------------------------------------------------------------------------------
//
//-----------------------------------------------------------------------------------
console.log(" method");
//-----------------------------------------------------------------------------------
console.log("----------------------------------------------------------------------");
