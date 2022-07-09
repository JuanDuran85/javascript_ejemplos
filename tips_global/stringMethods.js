/*

    Metodos de String en JavaScript - JavaScript String Methods Cheat Sheet
        - at
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
        - localeCompare
        - match
        - matchAll
        - normalize
        - padEnd
        - padStart
        - raw
        - repeat
        - replace
        - replaceAll
        - search
        - slice
        - split
        - startWith
        - substring
        - toLocaleLowerCase
        - toLowerCase
        - toString
        - toUpperCasa
        - trim
        - trimEnd
        - trimStart
        - valueOf
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
console.log("Concat method");
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
console.log("Includes method");
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
const textoToIndexOf = "Aplicando el metodo indexOf en JS";
console.log(`Texto original: ${textoToIndexOf}`);
console.log(`Texto a buscar 'JS': ${textoToIndexOf.indexOf("JS")}`);
//-----------------------------------------------------------------------------------
console.log("----------------------------------------------------------------------");


console.log("----------------------------------------------------------------------");
//-----------------------------------------------------------------------------------
// The lastIndexOf() method, given one argument: a substring to search for, searches the entire calling string, and returns the index of the last occurrence of the specified substring. Given a second argument: a number, the method returns the last occurrence of the specified substring at an index less than or equal to the specified number.
//-----------------------------------------------------------------------------------
console.log("lastIndexOf method");
const textoToLastIndexOf = "Aplicando el metodo lastIndexOf en con el lenguaje de programacion JS";
console.log(`Texto original: ${textoToLastIndexOf}`);
console.log(`Texto a buscar 'JS': ${textoToLastIndexOf.lastIndexOf("JS")}`);
console.log(`Texto a buscar 'el': ${textoToLastIndexOf.lastIndexOf("el")}`);
console.log(`Texto a buscar 'Python': ${textoToLastIndexOf.lastIndexOf("Python")}`);
//-----------------------------------------------------------------------------------
console.log("----------------------------------------------------------------------");


console.log("----------------------------------------------------------------------");
//-----------------------------------------------------------------------------------
// The localeCompare() method returns a number indicating whether a reference string comes before, or after, or is the same as the given string in sort order. 
//-----------------------------------------------------------------------------------
console.log("localeCompare method");
const textToLocaleCompare = ['réservé', 'Premier', 'Cliché', 'communiqué', 'café', 'Adieu'];
const resultLocaleCompare = textToLocaleCompare.sort( (a, b) => a.localeCompare(b, 'fr', { ignorePunctuation: true }));
console.log(resultLocaleCompare);
//-----------------------------------------------------------------------------------
console.log("----------------------------------------------------------------------");


console.log("----------------------------------------------------------------------");
//-----------------------------------------------------------------------------------
// The match() method retrieves the result of matching a string against a regular expression. 
//-----------------------------------------------------------------------------------
console.log("match method");
const textToMatch = "Aplicando el metodo match en JS";
const regularExpresionToMach = /[A-Z]/g;
console.log(`Texto original: ${textToMatch}`);
console.log(`Texto a buscar '/[A-Z]/g': ${textToMatch.match(regularExpresionToMach)}`);
//-----------------------------------------------------------------------------------
console.log("----------------------------------------------------------------------");


console.log("----------------------------------------------------------------------");
//-----------------------------------------------------------------------------------
// The matchAll() method returns an iterator of all results matching a string against a regular expression, including capturing groups. 
//-----------------------------------------------------------------------------------
console.log("matchAll method");
const textToMatchAll = "Aplicando el metodo matchAll en JS";
const regularExpresionToMachAll = /[A-Z]/g;
console.log(`Texto original: ${textToMatchAll}`);
console.log(`Texto a buscar '/[A-Z]/g': ${[...textToMatchAll.matchAll(regularExpresionToMachAll)]}`);
//-----------------------------------------------------------------------------------
console.log("----------------------------------------------------------------------");


console.log("----------------------------------------------------------------------");
//-----------------------------------------------------------------------------------
// The normalize() method returns the Unicode Normalization Form of the string. 
//-----------------------------------------------------------------------------------
console.log("normalize method");
let string1 = '\u00F1';           // ñ
let string2 = '\u006E\u0303';     // ñ

string1 = string1.normalize('NFD');
string2 = string2.normalize('NFD');

console.log(string1 === string2); // true
console.log(string1.length);      // 2
console.log(string2.length);      // 2
//-----------------------------------------------------------------------------------
console.log("----------------------------------------------------------------------");


console.log("----------------------------------------------------------------------");
//-----------------------------------------------------------------------------------
// The padEnd() method pads the current string with a given string (repeated, if needed) so that the resulting string reaches a given length. The padding is applied from the end of the current string. 
//-----------------------------------------------------------------------------------
console.log("padEnd method");
const textoToPadEnd = "Aplicando el metodo padEnd";
console.log(`Texto original: ${textoToPadEnd}`);
console.log(`Texto con padEnd '*': ${textoToPadEnd.padEnd(35, ".")}`);
//-----------------------------------------------------------------------------------
console.log("----------------------------------------------------------------------");


console.log("----------------------------------------------------------------------");
//-----------------------------------------------------------------------------------
// The padStart() method pads the current string with another string (multiple times, if needed) until the resulting string reaches the given length. The padding is applied from the start of the current string. 
//-----------------------------------------------------------------------------------
console.log("padStart method");
const textoToPadStart = "Aplicando el metodo padStart";
console.log(`Texto original: ${textoToPadStart}`);
console.log(`Texto con padEnd '.': ${textoToPadStart.padStart(35, ".")}`);
//-----------------------------------------------------------------------------------
console.log("----------------------------------------------------------------------");


console.log("----------------------------------------------------------------------");
//-----------------------------------------------------------------------------------
// The static String.raw() method is a tag function of template literals. This is similar to the r prefix in Python, or the @ prefix in C# for string literals. It's used to get the raw string form of template literals, that is, substitutions (e.g. ${foo}) are processed, but escapes (e.g. \n) are not. 
//-----------------------------------------------------------------------------------
console.log("raw method");
const resultStringWithRaw = String.raw`\home\js\Directorio\programas\javascript_ejemplos\tips_global\stringMethods.js`;
console.log(resultStringWithRaw);
//-----------------------------------------------------------------------------------
console.log("----------------------------------------------------------------------");


console.log("----------------------------------------------------------------------");
//-----------------------------------------------------------------------------------
// The repeat() method constructs and returns a new string which contains the specified number of copies of the string on which it was called, concatenated together. 
//-----------------------------------------------------------------------------------
console.log("repeat method");
const textoToRepeat = "Texto repetido con el metodo repeat. ";
console.log(`Texto original: ${textoToRepeat}`);
console.log(`Texto repetido: ${textoToRepeat.repeat(3)}`);
//-----------------------------------------------------------------------------------
console.log("----------------------------------------------------------------------");


console.log("----------------------------------------------------------------------");
//-----------------------------------------------------------------------------------
// The replace() method returns a new string with some or all matches of a pattern replaced by a replacement. The pattern can be a string or a RegExp, and the replacement can be a string or a function called for each match. If pattern is a string, only the first occurrence will be replaced. 
//-----------------------------------------------------------------------------------
console.log("replace method");
const textToReplace = "Aplicando el metodo replace en JS";
console.log(`Texto original: ${textToReplace}`);
console.log(`Texto a remplazar 'JS': ${textToReplace.replace("JS","JavaSript")}`);
const regExpToReplace = /metodo/gi;
console.log(`Texto a remplazar 'metodo': ${textToReplace.replace(regExpToReplace, "Método")}`);
//-----------------------------------------------------------------------------------
console.log("----------------------------------------------------------------------");


console.log("----------------------------------------------------------------------");
//-----------------------------------------------------------------------------------
// The replaceAll() method returns a new string with all matches of a pattern replaced by a replacement. The pattern can be a string or a RegExp, and the replacement can be a string or a function to be called for each match. 
//-----------------------------------------------------------------------------------
console.log("replaceAll method");
const textToReplaceAll = "Aplicando el metodo replaceAll en JS. El metodo retorna un string con todas las coincidencias remplazadas en JS.";
console.log(`Texto original: ${textToReplaceAll}`);
console.log(`Texto a remplazar 'JS': ${textToReplaceAll.replaceAll("JS","JavaSript")}`);
const regExpToReplaceAll = /metodo/gi;
console.log(`Texto a remplazar 'metodo': ${textToReplaceAll.replaceAll(regExpToReplaceAll, "Método")}`);
//-----------------------------------------------------------------------------------
console.log("----------------------------------------------------------------------");


console.log("----------------------------------------------------------------------");
//-----------------------------------------------------------------------------------
// The search() method executes a search for a match between a regular expression and this String object. 
//-----------------------------------------------------------------------------------
console.log("search method");
const textToSearch = "Aplicando el metodo search en JS";
console.log(`Texto original: ${textToSearch}`);
console.log(`Texto a buscar 'JS': ${textToSearch.search("JS")}`);
const regExpToSearch = /(metodo)/g;
console.log(`Texto a buscar 'metodo': ${textToSearch.search(regExpToSearch)}`);
console.log(textToSearch[textToSearch.search(regExpToSearch)]);
//-----------------------------------------------------------------------------------
console.log("----------------------------------------------------------------------");


console.log("----------------------------------------------------------------------");
//-----------------------------------------------------------------------------------
// The slice() method extracts a section of a string and returns it as a new string, without modifying the original string. 
//-----------------------------------------------------------------------------------
console.log("slice method");
const textToSlice = "Aplicando el metodo slice en JS";
console.log(`Texto original: ${textToSlice}`);
console.log(`Texto a extraer 'slice': ${textToSlice.slice(20,25)}`);
console.log(`Texto a extraer 'JS': ${textToSlice.slice(-2)}`);
//-----------------------------------------------------------------------------------
console.log("----------------------------------------------------------------------");


console.log("----------------------------------------------------------------------");
//-----------------------------------------------------------------------------------
// The split() method takes a pattern and divides a String into an ordered list of substrings by searching for the pattern, puts these substrings into an array, and returns the array.
//-----------------------------------------------------------------------------------
console.log("split method");
const textToSplit = "Aplicando el metodo split en JS";
console.log(`Texto original: ${textToSplit}`);
console.log(`Resultado del split al texto original: ${textToSplit.split(' ')}`);
console.log(`Resultado del split con limite al texto original: ${textToSplit.split('', 9)}`);
const textoToSplitTwo = "Aplicando 1 el metodo split 2 en JS";
console.log(`Texto original: ${textoToSplitTwo}`);
const regExpToSplit = /(\d)/g;
const resultTextToSplit = textoToSplitTwo.split(regExpToSplit);
console.log(resultTextToSplit);
//-----------------------------------------------------------------------------------
console.log("----------------------------------------------------------------------");


console.log("----------------------------------------------------------------------");
//-----------------------------------------------------------------------------------
// The startsWith() method determines whether a string begins with the characters of a specified string, returning true or false as appropriate. The position in this string at which to begin searching for searchString. Defaults to 0. 
//-----------------------------------------------------------------------------------
console.log("startsWith method");
const textToStartsWith = "Aplicando el metodo startsWith en JS";
console.log(`Texto original: ${textToStartsWith}`);
console.log(`Texto a buscar en el inicio 'JS': ${textToStartsWith.startsWith("JS")}`);
console.log(`Texto a buscar en la posicion 13 'metodo': ${textToStartsWith.startsWith("metodo", 13)}`);
//-----------------------------------------------------------------------------------
console.log("----------------------------------------------------------------------");


console.log("----------------------------------------------------------------------");
//-----------------------------------------------------------------------------------
// The substring() method returns the part of the string between the start and end indexes, or to the end of the string. 
//-----------------------------------------------------------------------------------
console.log("substring method");
const textoToSubstring = "Aplicando el metodo substring en JS";
console.log(`Texto original: ${textoToSubstring}`);
console.log(`Texto a extraer desde la posicion 13 hasta la posicion 20: ${textoToSubstring.substring(13,20)}`);
console.log(`Texto a extraer desde la posicion 13 hasta el final: ${textoToSubstring.substring(13)}`);
//-----------------------------------------------------------------------------------
console.log("----------------------------------------------------------------------");


console.log("----------------------------------------------------------------------");
//-----------------------------------------------------------------------------------
// The toLocaleLowerCase() method returns the calling string value converted to lower case, according to any locale-specific case mappings. 
//-----------------------------------------------------------------------------------
console.log("toLocaleLowerCase method");
const textoToLocaleLowerCase = "Aplicando el metodo toLocaleLowerCase en JS - \u0130 \u0133 \u0134 ";
console.log(`Texto original: ${textoToLocaleLowerCase}`);
console.log(`Texto a convertir a minusculas: ${textoToLocaleLowerCase.toLocaleLowerCase('es-ES')}`);

//-----------------------------------------------------------------------------------
console.log("----------------------------------------------------------------------");


console.log("----------------------------------------------------------------------");
//-----------------------------------------------------------------------------------
// The toLocaleUpperCase() method returns the calling string value converted to upper case, according to any locale-specific case mappings. 
//-----------------------------------------------------------------------------------
console.log("toLocaleUpperCase method");
const textoToLocaleUpperCase = "Aplicando el metodo toLocaleUpperCase en JS - \u0130 \u0133 \u0134 ";
console.log(`Texto original: ${textoToLocaleUpperCase}`);
console.log(`Texto a convertir a mayusculas: ${textoToLocaleUpperCase.toLocaleUpperCase('es-ES')}`);
//-----------------------------------------------------------------------------------
console.log("----------------------------------------------------------------------");


console.log("----------------------------------------------------------------------");
//-----------------------------------------------------------------------------------
//  The toLowerCase() method returns the calling string value converted to lower case. 
//-----------------------------------------------------------------------------------
console.log("toLowerCase method");
const textToLowerCase = "Aplicando el metodo toLowerCase en JS";
console.log(`Texto original: ${textToLowerCase}`);
console.log(`Texto a convertir a minusculas: ${textToLowerCase.toLowerCase()}`);
//-----------------------------------------------------------------------------------
console.log("----------------------------------------------------------------------");


console.log("----------------------------------------------------------------------");
//-----------------------------------------------------------------------------------
// The toString() method returns a string representing the specified object. 
//-----------------------------------------------------------------------------------
console.log("toString method");
const textToString = String("Aplicando el metodo toString en JS");
console.log(`Texto original: ${textToString}`);
console.log(`Texto a convertir a string: ${textToString.toString()}`);
const numberToString = Number(123);
console.log(`Numero original: ${numberToString}`);
console.log(`Numero a convertir a string: ${numberToString.toString()}`);
//-----------------------------------------------------------------------------------
console.log("----------------------------------------------------------------------");


console.log("----------------------------------------------------------------------");
//-----------------------------------------------------------------------------------
// The toUpperCase() method returns the calling string value converted to uppercase (the value will be converted to a string if it isn't one). 
//-----------------------------------------------------------------------------------
console.log("toUpperCase method");
const textToUpperCase = "Aplicando el metodo toUpperCase en JS";
console.log(`Texto original: ${textToUpperCase}`);
console.log(`Texto a convertir a mayusculas: ${textToUpperCase.toUpperCase()}`);
//-----------------------------------------------------------------------------------
console.log("----------------------------------------------------------------------");


console.log("----------------------------------------------------------------------");
//-----------------------------------------------------------------------------------
// The trim() method removes whitespace from both ends of a string and returns a new string, without modifying the original string. Whitespace in this context is all the whitespace characters (space, tab, no-break space, etc.) and all the line terminator characters (LF, CR, etc.). 
//-----------------------------------------------------------------------------------
console.log("trim method");
const textToTrim = "        Aplicando el metodo trim en JS           ";
console.log(`Texto original: ${textToTrim}`);
console.log(`Texto a convertir a string: ${textToTrim.trim()}`);
//-----------------------------------------------------------------------------------
console.log("----------------------------------------------------------------------");


console.log("----------------------------------------------------------------------");
//-----------------------------------------------------------------------------------
// The trimEnd() method removes whitespace from the end of a string. trimRight() is an alias of this method. 
//-----------------------------------------------------------------------------------
console.log("trimEnd method");
const textToTrimEnd = "        Aplicando el metodo trimEnd en JS           ";
console.log(`Texto original: ${textToTrimEnd}`);
console.log(`Texto a convertir a string: ${textToTrimEnd.trimEnd()}`);
//-----------------------------------------------------------------------------------
console.log("----------------------------------------------------------------------");


console.log("----------------------------------------------------------------------");
//-----------------------------------------------------------------------------------
// The trimStart() method removes whitespace from the beginning of a string. trimLeft() is an alias of this method. 
//-----------------------------------------------------------------------------------
console.log("trimStart method");
const textToTrimStart = "        Aplicando el metodo trimStart en JS           ";
console.log(`Texto original: ${textToTrimStart}`);
console.log(`Texto a convertir a string: ${textToTrimStart.trimStart()}`);
//-----------------------------------------------------------------------------------
console.log("----------------------------------------------------------------------");


console.log("----------------------------------------------------------------------");
//-----------------------------------------------------------------------------------
// The valueOf() method returns the primitive value of a String object. 
//-----------------------------------------------------------------------------------
console.log("valueOf method");
const textToValueOf = String("Aplicando el metodo valueOf en JS");
console.log(`Texto original: ${textToValueOf}`);
console.log(`Texto a convertir a string: ${textToValueOf.valueOf()}`);
//-----------------------------------------------------------------------------------
console.log("----------------------------------------------------------------------");
