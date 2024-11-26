/*

    Metodos de Array en JavaScript
        - push()
        - pop()
        - shift()
        - unshift()
        - splice()
        - slice()
        - indexOf()
        - lastIndexOf()
        - forEach()
        - map()
        - filter()
        - reduce()
        - reduceRight()
        - every()
        - some()
        - find()
        - findIndex()
        - fill()
        - copyWithin()
        - sort()
        - reverse()
        - join()
        - toString()
        - toLocaleString()
        - entries()
        - keys()
        - values()
        - flat()
        - flatMap()
        - at()
        - concat()
        - from()
        - includes()
        - isArray()
        - of()
        - findLast()
        - findLastIndex()
        - toSorted()
        - toSpliced()
        - with()

*/

const arrayGlobal = ["JavaScript", "Python"];
console.debug(arrayGlobal);

// ----------------------------------------------------------------------------------------
// The push() method adds one or more elements to the end of an array and returns the new length of the array.
// ----------------------------------------------------------------------------------------
console.debug("Push Method");
arrayGlobal.push("C++", "C#", "Java", "PHP", "JS", "Python");
console.debug(arrayGlobal);

// ----------------------------------------------------------------------------------------
console.debug(
  "-----------------------------------------------------------------------------------------"
);

// ----------------------------------------------------------------------------------------
// The pop() method removes the last element from an array and returns that element. This method changes the length of the array.
// ----------------------------------------------------------------------------------------
console.debug("Pop Method");
arrayGlobal.pop();
console.debug(arrayGlobal);

// ----------------------------------------------------------------------------------------
console.debug(
  "-----------------------------------------------------------------------------------------"
);

// ----------------------------------------------------------------------------------------
// The shift() method removes the first element from an array and returns that removed element. This method changes the length of the array.
// ----------------------------------------------------------------------------------------
console.debug("Shift Method");
arrayGlobal.shift();
console.debug(arrayGlobal);

// ----------------------------------------------------------------------------------------
console.debug(
  "-----------------------------------------------------------------------------------------"
);

// ----------------------------------------------------------------------------------------
// The unshift() method adds one or more elements to the beginning of an array and returns the new length of the array.
// ----------------------------------------------------------------------------------------
console.debug("Unshift Method");
arrayGlobal.unshift("JavaScript");
console.debug(arrayGlobal);

// ----------------------------------------------------------------------------------------
console.debug(
  "-----------------------------------------------------------------------------------------"
);

// ----------------------------------------------------------------------------------------
// The splice() method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place. array.splice(start[, deleteCount[, item1[, item2[, ...]]]])
// ----------------------------------------------------------------------------------------
console.debug("Splice Method");
arrayGlobal.splice(0, 0, "JS"); // Inserta un elemento en la posicion 0
console.debug(arrayGlobal);
arrayGlobal.splice(2, 1); // Elimina un elemento en la posicion 2
console.debug(arrayGlobal);

// ----------------------------------------------------------------------------------------
console.debug(
  "-----------------------------------------------------------------------------------------"
);

// ----------------------------------------------------------------------------------------
// El método slice() devuelve una copia de una parte del array dentro de un nuevo array empezando por inicio hasta fin (fin no incluido). El array original no se modificará. arr.slice([inicio [, fin]])
// ----------------------------------------------------------------------------------------
console.debug("Slice Method");
const resultSlice = arrayGlobal.slice(1, 3);
console.debug({resultSlice});
const arrayToSlice = [4,2,65,3,1,6,9];
console.debug({arrayToSlice});
const resultSliceLastTerm = arrayToSlice.slice(-1);
console.debug({resultSliceLastTerm});
// ----------------------------------------------------------------------------------------
console.debug(
  "-----------------------------------------------------------------------------------------"
);

// ----------------------------------------------------------------------------------------
// El método indexOf() retorna el primer índice en el que se puede encontrar un elemento dado en el array, ó retorna -1 si el elemento no esta presente. Si retorna -1 el elemento no fue encontrado
// ----------------------------------------------------------------------------------------
console.debug("indexOf Method");
let resultIndexOf = arrayGlobal.indexOf("JS");
console.debug(resultIndexOf);
resultIndexOf = arrayGlobal.indexOf("PHP");
console.debug(resultIndexOf);

// ----------------------------------------------------------------------------------------
console.debug(
  "-----------------------------------------------------------------------------------------"
);

// ----------------------------------------------------------------------------------------
// El método lastIndexOf() devuelve el último índice en el que un cierto elemento puede encontrarse en el arreglo, ó -1 si el elemento no se encontrara. El arreglo es recorrido en sentido contrario, empezando por el índice fromIndex.
// ----------------------------------------------------------------------------------------
console.debug("lastIndexOf Method");
let resultLastIndexOf = arrayGlobal.lastIndexOf("JavaScript");
console.debug(resultLastIndexOf);
resultLastIndexOf = arrayGlobal.lastIndexOf("JS");
console.debug(resultLastIndexOf);

// ----------------------------------------------------------------------------------------
console.debug(
  "-----------------------------------------------------------------------------------------"
);

// ----------------------------------------------------------------------------------------
// El método forEach() ejecuta la función indicada una vez por cada elemento del array.
// ----------------------------------------------------------------------------------------
console.debug("forEach Method");
arrayGlobal.forEach((element) => console.debug(element));

// ----------------------------------------------------------------------------------------
console.debug(
  "-----------------------------------------------------------------------------------------"
);

// ----------------------------------------------------------------------------------------
// El método map() crea un nuevo array con los resultados de la llamada a la función indicada aplicados a cada uno de sus elementos.
// ----------------------------------------------------------------------------------------
console.debug("map Method");
const resultMap = arrayGlobal.map((element) => element.toLowerCase());
console.debug(resultMap);

// ----------------------------------------------------------------------------------------
console.debug(
  "-----------------------------------------------------------------------------------------"
);

// ----------------------------------------------------------------------------------------
// El método filter() crea un nuevo array con todos los elementos que cumplan la condición implementada por la función dada.
// ----------------------------------------------------------------------------------------
console.debug("filter Method");
const resultFilter = arrayGlobal.filter((element) => element.length > 5);
console.debug(resultFilter);

const elementosToDeleteWithFilter = [
  "C++",
  "C#",
  "Java",
  "PHP",
  "JS",
  "Python",
];
console.debug({ elementosToDeleteWithFilter });
const resultFilter2 = elementosToDeleteWithFilter.filter(
  (_, index) => index !== 3
);
console.debug({ resultFilter2 });

// ----------------------------------------------------------------------------------------
console.debug(
  "-----------------------------------------------------------------------------------------"
);

// ----------------------------------------------------------------------------------------
// El método reduce() ejecuta una función reductora sobre cada elemento de un array, devolviendo como resultado un único valor.
// ----------------------------------------------------------------------------------------
console.debug("Reduce Method");
const resultReduce = arrayGlobal.reduce(
  (pre, current) => `${pre} ${current}`,
  "-"
);
console.debug(resultReduce);

// ----------------------------------------------------------------------------------------
console.debug(
  "-----------------------------------------------------------------------------------------"
);

// ----------------------------------------------------------------------------------------
// El método reduceRight() ejecuta una función reductora sobre cada elemento de un array, devolviendo como resultado un único valor. El array se reduce de derecha a izquierda.
// ----------------------------------------------------------------------------------------
console.debug("reduceRight Method");
const resultReduceRight = arrayGlobal.reduceRight(
  (pre, current) => `${pre} ${current}`,
  "-"
);
console.debug(resultReduceRight);

// ----------------------------------------------------------------------------------------
console.debug(
  "-----------------------------------------------------------------------------------------"
);

// ----------------------------------------------------------------------------------------
// El metodo every(): determina si todos los elementos en el array satisfacen una condición.
// ----------------------------------------------------------------------------------------
console.debug("Every Method");
const resultEvery = arrayGlobal.every((element) => element.length > 4);
console.debug(resultEvery);

// ----------------------------------------------------------------------------------------
console.debug(
  "-----------------------------------------------------------------------------------------"
);

// ----------------------------------------------------------------------------------------
// El método some() comprueba si al menos un elemento del array cumple con la condición implementada por la función proporcionada. Por lo que se puede usar para comprobar si existe alguna ocurrencia de un elemento en el array.
// ----------------------------------------------------------------------------------------
console.debug("Some Method");
const resultSome = arrayGlobal.some((element) => element.length > 4);
console.debug(resultSome);

const userInSystem = [
  {name: "Juan",isActive: false},
  {name: "Pedro",isActive: false},
  {name: "Maria",isActive: true},
];
const hasActiveUsers = userInSystem.some((user) => user.isActive);
console.debug({hasActiveUsers});

// ----------------------------------------------------------------------------------------
console.debug(
  "-----------------------------------------------------------------------------------------"
);

// ----------------------------------------------------------------------------------------
// El método find() devuelve el valor del primer elemento del array que cumple la función de prueba proporcionada.
// ----------------------------------------------------------------------------------------
console.debug("Find Method");
const resultFind = arrayGlobal.find((element) => element.length > 4);
console.debug(resultFind);

// ----------------------------------------------------------------------------------------
console.debug(
  "-----------------------------------------------------------------------------------------"
);

// ----------------------------------------------------------------------------------------
// El método findIndex() devuelve el índice del primer elemento de un array que cumpla con la función de prueba proporcionada. En caso contrario devuelve -1.
// ----------------------------------------------------------------------------------------
console.debug("findIndex Method");
const resultFindIndex = arrayGlobal.findIndex((element) => element.length > 4);
console.debug(resultFindIndex);

// ----------------------------------------------------------------------------------------
console.debug(
  "-----------------------------------------------------------------------------------------"
);

// ----------------------------------------------------------------------------------------
// The fill() method changes all elements in an array to a static value, from a start index (default 0) to an end index (default array.length). It returns the modified array.
// ----------------------------------------------------------------------------------------
console.debug("Fill Method");
const resultFill = arrayGlobal.fill("JS", 1, 2);
console.debug(resultFill);

// ----------------------------------------------------------------------------------------
console.debug(
  "-----------------------------------------------------------------------------------------"
);

// ----------------------------------------------------------------------------------------
// The copyWithin() method shallow copies part of an array to another location in the same array and returns it without modifying its length.
// ----------------------------------------------------------------------------------------
console.debug("CopyWithin Method");
const resultCopyWithin = arrayGlobal.copyWithin(1, 2);
console.debug(resultCopyWithin);

// ----------------------------------------------------------------------------------------
console.debug(
  "-----------------------------------------------------------------------------------------"
);

// ----------------------------------------------------------------------------------------
// The sort() method sorts the elements of an array in place and returns the sorted array. The default sort order is ascending, built upon converting the elements into strings, then comparing their sequences of UTF-16 code units values.
// ----------------------------------------------------------------------------------------
console.debug("Sort Method");
const arrayToSortOne = [8, 4, 2, 1, 0, 6, -7, 5, 3, 9];
let resultSort = arrayToSortOne.sort();
const arrayToSortTwo = [81, 41, 21, 1, 0, 64, -7, 5, 3, 9, 29, 56, 6, 30, 2, 7];
resultSort = arrayToSortTwo.sort();
console.debug(resultSort);
const arrayToSortThree = [
  "JavaScript",
  "Python",
  "C++",
  "C",
  "PHP",
  "Java",
  "Go",
];
resultSort = arrayToSortThree.sort();
console.debug(resultSort);
resultSort = arrayToSortTwo.sort((a, b) => a - b); // sort ascending order. if yo use b - a, it will sort descending order.
console.debug(resultSort);
const arrayWithObjectToSort = [
  { name: "Fernando", age: 20 },
  { name: "Jose", age: 27 },
  { name: "Petra", age: 38 },
  { name: "Maria", age: 18 },
];
resultSort = arrayWithObjectToSort.sort((a, b) => a.age - b.age);
console.debug(resultSort);
// ----------------------------------------------------------------------------------------
console.debug(
  "-----------------------------------------------------------------------------------------"
);

// ----------------------------------------------------------------------------------------
// The reverse() method reverses an array in place. The first array element becomes the last, and the last array element becomes the first.
// ----------------------------------------------------------------------------------------
console.debug("Reverse Method");
const arrayToReverseOne = [8, 4, 2, 1, 0, 6, -7, 5, 3, 9];
console.debug(arrayToReverseOne.reverse());
const arrayToReverseTwo = [
  "JavaScript",
  "Python",
  "C++",
  "C",
  "PHP",
  "Java",
  "Go",
];
console.debug(arrayToReverseTwo.reverse());
// ----------------------------------------------------------------------------------------
console.debug(
  "-----------------------------------------------------------------------------------------"
);

// ----------------------------------------------------------------------------------------
// The join() method creates and returns a new string by concatenating all of the elements in an array (or an array-like object), separated by commas or a specified separator string. If the array has only one item, then that item will be returned without using the separator.
// ----------------------------------------------------------------------------------------
console.debug("Join Method");
const arrayToJoinOne = ["Nuevo", "mensaje", "desde", "Array"];
const resultArrayToJoin = arrayToJoinOne.join(" ");
console.debug(resultArrayToJoin);

// ----------------------------------------------------------------------------------------
console.debug(
  "-----------------------------------------------------------------------------------------"
);

// ----------------------------------------------------------------------------------------
// The toString() method returns a string representing the specified array and its elements.
// ----------------------------------------------------------------------------------------
console.debug("toString Method");
const arrayToString = ["JavaScript", "Python", "C++", "C", "PHP", "Java", "Go"];
const resultArrayToString = arrayToString.toString();
console.debug(resultArrayToString);

// ----------------------------------------------------------------------------------------
console.debug(
  "-----------------------------------------------------------------------------------------"
);

// ----------------------------------------------------------------------------------------
// The toLocaleString() method returns a string representing the elements of the array. The elements are converted to Strings using their toLocaleString methods and these Strings are separated by a locale-specific String (such as a comma ",").
// ----------------------------------------------------------------------------------------
console.debug("toLocaleString Method");
const arrayToLocaleString = [new Date(), "JS", 1];
const resultArrayToLocalString = arrayToLocaleString.toLocaleString();
console.debug(resultArrayToLocalString);

// ----------------------------------------------------------------------------------------
console.debug(
  "-----------------------------------------------------------------------------------------"
);

// ----------------------------------------------------------------------------------------
// The entries() method returns a new Array Iterator object that contains the key/value pairs for each index in the array.
// ----------------------------------------------------------------------------------------
console.debug("Entries Method");
const arrayToEntries = [1, 2, "f", "r", null];
const resultArrayToEntries = arrayToEntries.entries(); // return a Object [Array Iterator] {}
console.debug(resultArrayToEntries);
console.debug(resultArrayToEntries.next());
console.debug(resultArrayToEntries.next().value);
console.debug(resultArrayToEntries.next().value);

// Usando for of para sacar los valores
for (const allElements of arrayToEntries.entries()) {
  console.debug(allElements);
}
for (const [keyElement, valueElement] of arrayToEntries.entries()) {
  console.debug({ keyElement });
  console.debug({ valueElement });
}

// ----------------------------------------------------------------------------------------
console.debug(
  "-----------------------------------------------------------------------------------------"
);

// ----------------------------------------------------------------------------------------
// The keys() method returns a new Array Iterator object that contains the keys for each index in the array.
// ----------------------------------------------------------------------------------------
console.debug("keys Method");
const arrayToKeys = [1, 2, "f", "r", null];
const resultArrayToKeys = arrayToKeys.keys();
console.debug(resultArrayToKeys);
console.debug(resultArrayToKeys.next());
console.debug(resultArrayToKeys.next().value);
console.debug(resultArrayToKeys.next().value);

// usando for - of
for (const values of arrayToKeys.keys()) {
  console.debug(values);
}

// ----------------------------------------------------------------------------------------
console.debug(
  "-----------------------------------------------------------------------------------------"
);

// ----------------------------------------------------------------------------------------
// The values() method returns a new array iterator object that contains the values for each index in the array.
// ----------------------------------------------------------------------------------------
console.debug("values Method");
const arrayToValues = [1, 2, "f", "r", null];
const resultArrayToValues = arrayToValues.values();
console.debug(resultArrayToValues);
console.debug(resultArrayToValues.next());
console.debug(resultArrayToValues.next().value);
console.debug(resultArrayToValues.next().value);

// usando for - of
for (const values of arrayToValues.values()) {
  console.debug(values);
}

// ----------------------------------------------------------------------------------------
console.debug(
  "-----------------------------------------------------------------------------------------"
);

// ----------------------------------------------------------------------------------------
// The flat() method creates a new array with all sub-array elements concatenated into it recursively up to the specified depth. Calling flat on an array with the argument Infinity leads to the array being flattened until there is only one layer left.
// ----------------------------------------------------------------------------------------
console.debug("flat Method");
const arrayToFlat = ["a", 1, [3, "b"], ["x", "y",["casa"],[2, ["nuevo",3],4, 5, "c"]]];
const resultArrayToFlatOne = arrayToFlat.flat();
console.debug({resultArrayToFlatOne});
const resultArrayToFlatTwo = arrayToFlat.flat(2);
console.debug({resultArrayToFlatTwo});
const flattenFunction = (...args) => args.flat(Infinity);
const resultWithFlatInfinity = flattenFunction(arrayToFlat)
console.debug({resultWithFlatInfinity});

// ----------------------------------------------------------------------------------------
console.debug(
  "-----------------------------------------------------------------------------------------"
);

// ----------------------------------------------------------------------------------------
// The flatMap() method returns a new array formed by applying a given callback function to each element of the array, and then flattening the result by one level
// ----------------------------------------------------------------------------------------
console.debug("flatMap Method");
const arrayToFlatMap = [1, 2, 3, [4, 5, 6], 7, [8, [9, 10]]];
let resultArrayToFlatMap = arrayToFlatMap.flatMap((x) => x * 2); //only one level is flattened
console.debug(resultArrayToFlatMap);
const arrayToFlatMapTwo = ["Mensaje separado", "con comas por", "los espacios"];
resultArrayToFlatMap = arrayToFlatMapTwo.flatMap((text) => text.split(" "));
console.debug(resultArrayToFlatMap);

// ----------------------------------------------------------------------------------------
console.debug(
  "-----------------------------------------------------------------------------------------"
);

// ----------------------------------------------------------------------------------------
// The at() method takes an integer value and returns the item at that index, allowing for positive and negative integers. Negative integers count back from the last item in the array.
// ----------------------------------------------------------------------------------------
console.debug("At Method");
const arrayToAt = [1, 2, 3, [4, 5, 6], 7, [8, [9, 10]]];
let resultArrayToAt = arrayToAt.at(0);
console.debug(resultArrayToAt);
const arrayToAtTwo = ["Mensaje separado", "con comas por", "los espacios"];
resultArrayToAt = arrayToAtTwo.at(-1);
console.debug(resultArrayToAt);

// ----------------------------------------------------------------------------------------
console.debug(
  "-----------------------------------------------------------------------------------------"
);

//-----------------------------------------------------------------------------------
// The concat() method is used to merge two or more arrays. This method does not change the existing arrays, but instead returns a new array.
//-----------------------------------------------------------------------------------
console.debug("Concat method");
const textoToConcatOne = ["Aplicando el"];
const textoToConcatTwo = ["Metodo concat"];
console.debug(
  `Textos originales: 1. ${textoToConcatOne} - 2. ${textoToConcatTwo}`
);
console.debug(`Aplicando concat: ${textoToConcatOne.concat(textoToConcatTwo)}`);
//-----------------------------------------------------------------------------------
console.debug(
  "----------------------------------------------------------------------"
);

//-----------------------------------------------------------------------------------
// The Array.from() static method creates a new, shallow-copied Array instance from an iterable or array-like object.
//-----------------------------------------------------------------------------------
console.debug("From method");
const texToFrom = "Aplicando el Metodo estatico from";
console.debug(`Textos original ${texToFrom}`);
console.debug(`Aplicando Array.from: ${Array.from(texToFrom)}`);
const texToFromWithSet = ["AA", "BB", "AA", "CC", "DD", "AA", "CC"];
const resultArrayFromSet = Array.from(new Set(texToFromWithSet)); // Array.from can be used to create a new array from an iterable object with Set or Map.
console.debug(`Aplicando Array.from: ${resultArrayFromSet}`);
const resultArrayWithMap = Array.from(
  new Map([
    ["a", 1],
    ["b", 2],
    ["c", 3],
  ])
);
console.debug(`Aplicando Array.from: ${resultArrayWithMap}`);
const resultArrayFromWithFunction = Array.from(
  new Set([1, 3, 5, 2, 1, 4, 2, 3, 1, 5, 6]),
  (x) => x ** 2
);
console.debug(`Aplicando Array.from: ${resultArrayFromWithFunction}`);
//-----------------------------------------------------------------------------------
console.debug(
  "----------------------------------------------------------------------"
);

//-----------------------------------------------------------------------------------
// The includes() method determines whether an array includes a certain value among its entries, returning true or false as appropriate.
//-----------------------------------------------------------------------------------
console.debug("Includes method");
const textToIncludes = ["Casa", "Carro", "Perro"];
console.debug(`Texto original: ${textToIncludes}`);
console.debug(`Texto a buscar 'JS': ${textToIncludes.includes("JS")}`);
console.debug(`Texto a buscar 'Carro': ${textToIncludes.includes("Carro")}`);
//-----------------------------------------------------------------------------------
console.debug(
  "----------------------------------------------------------------------"
);

//-----------------------------------------------------------------------------------
// The Array.isArray() method determines whether the passed value is an Array.
//-----------------------------------------------------------------------------------
console.debug("IsArray method");
console.debug(
  `Aplicando el metodo estatico isArray: ${Array.isArray([1, 3, 4])}`
);
console.debug(
  `Aplicando el metodo estatico isArray: ${Array.isArray(
    "Ejemplo con isArray"
  )}`
);
console.debug(
  `Aplicando el metodo estatico isArray: ${Array.isArray({ key: "value" })}`
);

//-----------------------------------------------------------------------------------
console.debug(
  "----------------------------------------------------------------------"
);

//-----------------------------------------------------------------------------------
// The Array.of() method creates a new Array instance from a variable number of arguments, regardless of number or type of the arguments.
//-----------------------------------------------------------------------------------
console.debug("Of method");
const resultArrayOfOne = Array.of("Metodo Array.of()");
console.debug(resultArrayOfOne);
const resultArrayOfTwo = Array.of({ key: "value" });
console.debug(resultArrayOfTwo);
const resultArrayOfThree = Array.of(3, 5, 1, 6, 4, 8);
console.debug(resultArrayOfThree);

//-----------------------------------------------------------------------------------
console.debug(
  "----------------------------------------------------------------------"
);

//-----------------------------------------------------------------------------------
// The findLast() method returns the value of the last element in an array that satisfies the provided testing function. If no elements satisfy the testing function, undefined is returned.
//-----------------------------------------------------------------------------------
console.debug("findLast method");
const animalsKingsI = [
  { name: "Simba", specie: "Lion", quantity: 1 },
  { name: "Michi", specie: "Cat", quantity: 4 },
  { name: "Petra", specie: "Cow", quantity: 3 },
  { name: "Firulais", specie: "Dog", quantity: 2 },
  { name: "Pelusa", specie: "Cat", quantity: 3 },
  { name: "Pepe", specie: "Dog", quantity: 1 },
];

const resultAnimals = animalsKingsI.findLast(
  (animal) => animal.specie === "Dog"
);
console.debug({ resultAnimals });
//-----------------------------------------------------------------------------------
console.debug(
  "----------------------------------------------------------------------"
);

//-----------------------------------------------------------------------------------
// The findLastIndex() method returns the index of the last element in an array that satisfies the provided testing function. If no elements satisfy the testing function, -1 is returned. 
//-----------------------------------------------------------------------------------
console.debug("findLastIndex method");

const animalsKingsII = [
    { name: "Simba", specie: "Lion", quantity: 1 },
    { name: "Michi", specie: "Cat", quantity: 4 },
    { name: "Petra", specie: "Cow", quantity: 3 },
    { name: "Firulais", specie: "Dog", quantity: 2 },
    { name: "Pelusa", specie: "Cat", quantity: 3 },
    { name: "Pepe", specie: "Dog", quantity: 1 },
  ];

const resultFindAnimal = animalsKingsII.findLastIndex(
  (animal) => animal.specie === "Dog"
);
console.debug({ resultFindAnimal });
//-----------------------------------------------------------------------------------
console.debug(
  "----------------------------------------------------------------------"
);
//-----------------------------------------------------------------------------------
// The toSorted() method returns a new array created by sorting the elements of an array in place. The toSorted() method of Array instances is the copying version of the sort() method. It returns a new array with the elements sorted in ascending order.   
//-----------------------------------------------------------------------------------

const arrayOne = [7,2,1,8,77,9,0,-6,4,-3];
const sortedArrayOne = arrayOne.toSorted();
const sortedArrayTwo = arrayOne.toSorted((a,b) => a - b);
console.debug({sortedArrayOne});
console.debug({sortedArrayTwo});

//-----------------------------------------------------------------------------------
console.debug(
  "----------------------------------------------------------------------"
);
//-----------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------
// The toSpliced() method of Array instances is the copying version of the splice() method. It returns a new array with some elements removed and/or replaced at a given index. With this method you can insert, remove and/or replace elements in an array. 
//-----------------------------------------------------------------------------------

const arrayToSplice = ["January", "March", "April", "May", "August", "September", "October"];
// Inserting and element
const resultOneToSpliced = arrayToSplice.toSpliced(1,0,"February");
console.debug({resultOneToSpliced});
// Deleted element
const resultTwoToSpliced = arrayToSplice.toSpliced(1,1);
console.debug({resultTwoToSpliced});
// Replacing elements
const resultThreeToSpliced = arrayToSplice.toSpliced(1,1,"February");
console.debug({resultThreeToSpliced});
const arrayToSpliceTwo = [1,2,3,4];
const splicedArr = arrayToSpliceTwo.toSpliced(1, 2, 5, 6);
console.debug({splicedArr});
//-----------------------------------------------------------------------------------
console.debug(
  "----------------------------------------------------------------------"
);
//-----------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------
// The toReversed() method of Array instances is the copying counterpart of the reverse() method. It returns a new array with the elements in reversed order. 
//-----------------------------------------------------------------------------------
const arrToReversed = [1,2,3,4,5,6,7,8,9];
const reversedArr = arrToReversed.toReversed();
console.debug({reversedArr});
//-----------------------------------------------------------------------------------
console.debug(
  "----------------------------------------------------------------------"
);
//-----------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------
// The with() method of Array instances is the copying version of using the bracket notation to change the value of a given index. It returns a new array with the element at the given index replaced with the given value.
//-----------------------------------------------------------------------------------
const arrWith = [1,2,3,4,5,6,7];
const newArrWith = arrWith.with(1,10);
console.debug({newArrWith});
//-----------------------------------------------------------------------------------
console.debug(
  "----------------------------------------------------------------------"
);
//-----------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------
// The with() method of Array instances is the copying version of using the bracket notation to change the value of a given index. It returns a new array with the element at the given index replaced with the given value.
//-----------------------------------------------------------------------------------