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

*/

const arrayGlobal = ["JavaScript", "Python"];
console.log(arrayGlobal);

// ----------------------------------------------------------------------------------------
// The push() method adds one or more elements to the end of an array and returns the new length of the array.
// ----------------------------------------------------------------------------------------
console.log("Push Method");
arrayGlobal.push("C++", "C#", "Java", "PHP", "JS", "Python");
console.log(arrayGlobal);

// ----------------------------------------------------------------------------------------
console.log(
  "-----------------------------------------------------------------------------------------"
);

// ----------------------------------------------------------------------------------------
// The pop() method removes the last element from an array and returns that element. This method changes the length of the array.
// ----------------------------------------------------------------------------------------
console.log("Pop Method");
arrayGlobal.pop();
console.log(arrayGlobal);

// ----------------------------------------------------------------------------------------
console.log(
  "-----------------------------------------------------------------------------------------"
);

// ----------------------------------------------------------------------------------------
// The shift() method removes the first element from an array and returns that removed element. This method changes the length of the array.
// ----------------------------------------------------------------------------------------
console.log("Shift Method");
arrayGlobal.shift();
console.log(arrayGlobal);

// ----------------------------------------------------------------------------------------
console.log(
  "-----------------------------------------------------------------------------------------"
);

// ----------------------------------------------------------------------------------------
// The unshift() method adds one or more elements to the beginning of an array and returns the new length of the array.
// ----------------------------------------------------------------------------------------
console.log("Unshift Method");
arrayGlobal.unshift("JavaScript");
console.log(arrayGlobal);

// ----------------------------------------------------------------------------------------
console.log(
  "-----------------------------------------------------------------------------------------"
);

// ----------------------------------------------------------------------------------------
// The splice() method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place. array.splice(start[, deleteCount[, item1[, item2[, ...]]]])
// ----------------------------------------------------------------------------------------
console.log("Splice Method");
arrayGlobal.splice(0, 0, "JS"); // Inserta un elemento en la posicion 0
console.log(arrayGlobal);
arrayGlobal.splice(2, 1); // Elimina un elemento en la posicion 2
console.log(arrayGlobal);

// ----------------------------------------------------------------------------------------
console.log(
  "-----------------------------------------------------------------------------------------"
);

// ----------------------------------------------------------------------------------------
// El método slice() devuelve una copia de una parte del array dentro de un nuevo array empezando por inicio hasta fin (fin no incluido). El array original no se modificará. arr.slice([inicio [, fin]])
// ----------------------------------------------------------------------------------------
console.log("Slice Method");
const resultSlice = arrayGlobal.slice(1, 3);
console.log({resultSlice});
const arrayToSlice = [4,2,65,3,1,6,9];
console.log({arrayToSlice});
const resultSliceLastTerm = arrayToSlice.slice(-1);
console.log({resultSliceLastTerm});
// ----------------------------------------------------------------------------------------
console.log(
  "-----------------------------------------------------------------------------------------"
);

// ----------------------------------------------------------------------------------------
// El método indexOf() retorna el primer índice en el que se puede encontrar un elemento dado en el array, ó retorna -1 si el elemento no esta presente. Si retorna -1 el elemento no fue encontrado
// ----------------------------------------------------------------------------------------
console.log("indexOf Method");
let resultIndexOf = arrayGlobal.indexOf("JS");
console.log(resultIndexOf);
resultIndexOf = arrayGlobal.indexOf("PHP");
console.log(resultIndexOf);

// ----------------------------------------------------------------------------------------
console.log(
  "-----------------------------------------------------------------------------------------"
);

// ----------------------------------------------------------------------------------------
// El método lastIndexOf() devuelve el último índice en el que un cierto elemento puede encontrarse en el arreglo, ó -1 si el elemento no se encontrara. El arreglo es recorrido en sentido contrario, empezando por el índice fromIndex.
// ----------------------------------------------------------------------------------------
console.log("lastIndexOf Method");
let resultLastIndexOf = arrayGlobal.lastIndexOf("JavaScript");
console.log(resultLastIndexOf);
resultLastIndexOf = arrayGlobal.lastIndexOf("JS");
console.log(resultLastIndexOf);

// ----------------------------------------------------------------------------------------
console.log(
  "-----------------------------------------------------------------------------------------"
);

// ----------------------------------------------------------------------------------------
// El método forEach() ejecuta la función indicada una vez por cada elemento del array.
// ----------------------------------------------------------------------------------------
console.log("forEach Method");
arrayGlobal.forEach((element) => console.log(element));

// ----------------------------------------------------------------------------------------
console.log(
  "-----------------------------------------------------------------------------------------"
);

// ----------------------------------------------------------------------------------------
// El método map() crea un nuevo array con los resultados de la llamada a la función indicada aplicados a cada uno de sus elementos.
// ----------------------------------------------------------------------------------------
console.log("map Method");
const resultMap = arrayGlobal.map((element) => element.toLowerCase());
console.log(resultMap);

// ----------------------------------------------------------------------------------------
console.log(
  "-----------------------------------------------------------------------------------------"
);

// ----------------------------------------------------------------------------------------
// El método filter() crea un nuevo array con todos los elementos que cumplan la condición implementada por la función dada.
// ----------------------------------------------------------------------------------------
console.log("filter Method");
const resultFilter = arrayGlobal.filter((element) => element.length > 5);
console.log(resultFilter);

const elementosToDeleteWithFilter = [
  "C++",
  "C#",
  "Java",
  "PHP",
  "JS",
  "Python",
];
console.log({ elementosToDeleteWithFilter });
const resultFilter2 = elementosToDeleteWithFilter.filter(
  (_, index) => index !== 3
);
console.log({ resultFilter2 });

// ----------------------------------------------------------------------------------------
console.log(
  "-----------------------------------------------------------------------------------------"
);

// ----------------------------------------------------------------------------------------
// El método reduce() ejecuta una función reductora sobre cada elemento de un array, devolviendo como resultado un único valor.
// ----------------------------------------------------------------------------------------
console.log("Reduce Method");
const resultReduce = arrayGlobal.reduce(
  (pre, current) => `${pre} ${current}`,
  "-"
);
console.log(resultReduce);

// ----------------------------------------------------------------------------------------
console.log(
  "-----------------------------------------------------------------------------------------"
);

// ----------------------------------------------------------------------------------------
// El método reduceRight() ejecuta una función reductora sobre cada elemento de un array, devolviendo como resultado un único valor. El array se reduce de derecha a izquierda.
// ----------------------------------------------------------------------------------------
console.log("reduceRight Method");
const resultReduceRight = arrayGlobal.reduceRight(
  (pre, current) => `${pre} ${current}`,
  "-"
);
console.log(resultReduceRight);

// ----------------------------------------------------------------------------------------
console.log(
  "-----------------------------------------------------------------------------------------"
);

// ----------------------------------------------------------------------------------------
// El metodo every(): determina si todos los elementos en el array satisfacen una condición.
// ----------------------------------------------------------------------------------------
console.log("Every Method");
const resultEvery = arrayGlobal.every((element) => element.length > 4);
console.log(resultEvery);

// ----------------------------------------------------------------------------------------
console.log(
  "-----------------------------------------------------------------------------------------"
);

// ----------------------------------------------------------------------------------------
// El método some() comprueba si al menos un elemento del array cumple con la condición implementada por la función proporcionada. Por lo que se puede usar para comprobar si existe alguna ocurrencia de un elemento en el array.
// ----------------------------------------------------------------------------------------
console.log("Some Method");
const resultSome = arrayGlobal.some((element) => element.length > 4);
console.log(resultSome);

const userInSystem = [
  {name: "Juan",isActive: false},
  {name: "Pedro",isActive: false},
  {name: "Maria",isActive: true},
];
const hasActiveUsers = userInSystem.some((user) => user.isActive);
console.log({hasActiveUsers});

// ----------------------------------------------------------------------------------------
console.log(
  "-----------------------------------------------------------------------------------------"
);

// ----------------------------------------------------------------------------------------
// El método find() devuelve el valor del primer elemento del array que cumple la función de prueba proporcionada.
// ----------------------------------------------------------------------------------------
console.log("Find Method");
const resultFind = arrayGlobal.find((element) => element.length > 4);
console.log(resultFind);

// ----------------------------------------------------------------------------------------
console.log(
  "-----------------------------------------------------------------------------------------"
);

// ----------------------------------------------------------------------------------------
// El método findIndex() devuelve el índice del primer elemento de un array que cumpla con la función de prueba proporcionada. En caso contrario devuelve -1.
// ----------------------------------------------------------------------------------------
console.log("findIndex Method");
const resultFindIndex = arrayGlobal.findIndex((element) => element.length > 4);
console.log(resultFindIndex);

// ----------------------------------------------------------------------------------------
console.log(
  "-----------------------------------------------------------------------------------------"
);

// ----------------------------------------------------------------------------------------
// The fill() method changes all elements in an array to a static value, from a start index (default 0) to an end index (default array.length). It returns the modified array.
// ----------------------------------------------------------------------------------------
console.log("Fill Method");
const resultFill = arrayGlobal.fill("JS", 1, 2);
console.log(resultFill);

// ----------------------------------------------------------------------------------------
console.log(
  "-----------------------------------------------------------------------------------------"
);

// ----------------------------------------------------------------------------------------
// The copyWithin() method shallow copies part of an array to another location in the same array and returns it without modifying its length.
// ----------------------------------------------------------------------------------------
console.log("CopyWithin Method");
const resultCopyWithin = arrayGlobal.copyWithin(1, 2);
console.log(resultCopyWithin);

// ----------------------------------------------------------------------------------------
console.log(
  "-----------------------------------------------------------------------------------------"
);

// ----------------------------------------------------------------------------------------
// The sort() method sorts the elements of an array in place and returns the sorted array. The default sort order is ascending, built upon converting the elements into strings, then comparing their sequences of UTF-16 code units values.
// ----------------------------------------------------------------------------------------
console.log("Sort Method");
const arrayToSortOne = [8, 4, 2, 1, 0, 6, -7, 5, 3, 9];
let resultSort = arrayToSortOne.sort();
const arrayToSortTwo = [81, 41, 21, 1, 0, 64, -7, 5, 3, 9, 29, 56, 6, 30, 2, 7];
resultSort = arrayToSortTwo.sort();
console.log(resultSort);
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
console.log(resultSort);
resultSort = arrayToSortTwo.sort((a, b) => a - b); // sort ascending order. if yo use b - a, it will sort descending order.
console.log(resultSort);
const arrayWithObjectToSort = [
  { name: "Fernando", age: 20 },
  { name: "Jose", age: 27 },
  { name: "Petra", age: 38 },
  { name: "Maria", age: 18 },
];
resultSort = arrayWithObjectToSort.sort((a, b) => a.age - b.age);
console.log(resultSort);
// ----------------------------------------------------------------------------------------
console.log(
  "-----------------------------------------------------------------------------------------"
);

// ----------------------------------------------------------------------------------------
// The reverse() method reverses an array in place. The first array element becomes the last, and the last array element becomes the first.
// ----------------------------------------------------------------------------------------
console.log("Reverse Method");
const arrayToReverseOne = [8, 4, 2, 1, 0, 6, -7, 5, 3, 9];
console.log(arrayToReverseOne.reverse());
const arrayToReverseTwo = [
  "JavaScript",
  "Python",
  "C++",
  "C",
  "PHP",
  "Java",
  "Go",
];
console.log(arrayToReverseTwo.reverse());
// ----------------------------------------------------------------------------------------
console.log(
  "-----------------------------------------------------------------------------------------"
);

// ----------------------------------------------------------------------------------------
// The join() method creates and returns a new string by concatenating all of the elements in an array (or an array-like object), separated by commas or a specified separator string. If the array has only one item, then that item will be returned without using the separator.
// ----------------------------------------------------------------------------------------
console.log("Join Method");
const arrayToJoinOne = ["Nuevo", "mensaje", "desde", "Array"];
const resultArrayToJoin = arrayToJoinOne.join(" ");
console.log(resultArrayToJoin);

// ----------------------------------------------------------------------------------------
console.log(
  "-----------------------------------------------------------------------------------------"
);

// ----------------------------------------------------------------------------------------
// The toString() method returns a string representing the specified array and its elements.
// ----------------------------------------------------------------------------------------
console.log("toString Method");
const arrayToString = ["JavaScript", "Python", "C++", "C", "PHP", "Java", "Go"];
const resultArrayToString = arrayToString.toString();
console.log(resultArrayToString);

// ----------------------------------------------------------------------------------------
console.log(
  "-----------------------------------------------------------------------------------------"
);

// ----------------------------------------------------------------------------------------
// The toLocaleString() method returns a string representing the elements of the array. The elements are converted to Strings using their toLocaleString methods and these Strings are separated by a locale-specific String (such as a comma ",").
// ----------------------------------------------------------------------------------------
console.log("toLocaleString Method");
const arrayToLocaleString = [new Date(), "JS", 1];
const resultArrayToLocalString = arrayToLocaleString.toLocaleString();
console.log(resultArrayToLocalString);

// ----------------------------------------------------------------------------------------
console.log(
  "-----------------------------------------------------------------------------------------"
);

// ----------------------------------------------------------------------------------------
// The entries() method returns a new Array Iterator object that contains the key/value pairs for each index in the array.
// ----------------------------------------------------------------------------------------
console.log("Entries Method");
const arrayToEntries = [1, 2, "f", "r", null];
const resultArrayToEntries = arrayToEntries.entries(); // return a Object [Array Iterator] {}
console.log(resultArrayToEntries);
console.log(resultArrayToEntries.next());
console.log(resultArrayToEntries.next().value);
console.log(resultArrayToEntries.next().value);

// Usando for of para sacar los valores
for (const allElements of arrayToEntries.entries()) {
  console.log(allElements);
}
for (const [keyElement, valueElement] of arrayToEntries.entries()) {
  console.log({ keyElement });
  console.log({ valueElement });
}

// ----------------------------------------------------------------------------------------
console.log(
  "-----------------------------------------------------------------------------------------"
);

// ----------------------------------------------------------------------------------------
// The keys() method returns a new Array Iterator object that contains the keys for each index in the array.
// ----------------------------------------------------------------------------------------
console.log("keys Method");
const arrayToKeys = [1, 2, "f", "r", null];
const resultArrayToKeys = arrayToKeys.keys();
console.log(resultArrayToKeys);
console.log(resultArrayToKeys.next());
console.log(resultArrayToKeys.next().value);
console.log(resultArrayToKeys.next().value);

// usando for - of
for (const values of arrayToKeys.keys()) {
  console.log(values);
}

// ----------------------------------------------------------------------------------------
console.log(
  "-----------------------------------------------------------------------------------------"
);

// ----------------------------------------------------------------------------------------
// The values() method returns a new array iterator object that contains the values for each index in the array.
// ----------------------------------------------------------------------------------------
console.log("values Method");
const arrayToValues = [1, 2, "f", "r", null];
const resultArrayToValues = arrayToValues.values();
console.log(resultArrayToValues);
console.log(resultArrayToValues.next());
console.log(resultArrayToValues.next().value);
console.log(resultArrayToValues.next().value);

// usando for - of
for (const values of arrayToValues.values()) {
  console.log(values);
}

// ----------------------------------------------------------------------------------------
console.log(
  "-----------------------------------------------------------------------------------------"
);

// ----------------------------------------------------------------------------------------
// The flat() method creates a new array with all sub-array elements concatenated into it recursively up to the specified depth. Calling flat on an array with the argument Infinity leads to the array being flattened until there is only one layer left.
// ----------------------------------------------------------------------------------------
console.log("flat Method");
const arrayToFlat = ["a", 1, [3, "b"], ["x", "y",["casa"],[2, ["nuevo",3],4, 5, "c"]]];
const resultArrayToFlatOne = arrayToFlat.flat();
console.log({resultArrayToFlatOne});
const resultArrayToFlatTwo = arrayToFlat.flat(2);
console.log({resultArrayToFlatTwo});
const flattenFunction = (...args) => args.flat(Infinity);
const resultWithFlatInfinity = flattenFunction(arrayToFlat)
console.log({resultWithFlatInfinity});

// ----------------------------------------------------------------------------------------
console.log(
  "-----------------------------------------------------------------------------------------"
);

// ----------------------------------------------------------------------------------------
// The flatMap() method returns a new array formed by applying a given callback function to each element of the array, and then flattening the result by one level
// ----------------------------------------------------------------------------------------
console.log("flatMap Method");
const arrayToFlatMap = [1, 2, 3, [4, 5, 6], 7, [8, [9, 10]]];
let resultArrayToFlatMap = arrayToFlatMap.flatMap((x) => x * 2); //only one level is flattened
console.log(resultArrayToFlatMap);
const arrayToFlatMapTwo = ["Mensaje separado", "con comas por", "los espacios"];
resultArrayToFlatMap = arrayToFlatMapTwo.flatMap((text) => text.split(" "));
console.log(resultArrayToFlatMap);

// ----------------------------------------------------------------------------------------
console.log(
  "-----------------------------------------------------------------------------------------"
);

// ----------------------------------------------------------------------------------------
// The at() method takes an integer value and returns the item at that index, allowing for positive and negative integers. Negative integers count back from the last item in the array.
// ----------------------------------------------------------------------------------------
console.log("At Method");
const arrayToAt = [1, 2, 3, [4, 5, 6], 7, [8, [9, 10]]];
let resultArrayToAt = arrayToAt.at(0);
console.log(resultArrayToAt);
const arrayToAtTwo = ["Mensaje separado", "con comas por", "los espacios"];
resultArrayToAt = arrayToAtTwo.at(-1);
console.log(resultArrayToAt);

// ----------------------------------------------------------------------------------------
console.log(
  "-----------------------------------------------------------------------------------------"
);

//-----------------------------------------------------------------------------------
// The concat() method is used to merge two or more arrays. This method does not change the existing arrays, but instead returns a new array.
//-----------------------------------------------------------------------------------
console.log("Concat method");
const textoToConcatOne = ["Aplicando el"];
const textoToConcatTwo = ["Metodo concat"];
console.log(
  `Textos originales: 1. ${textoToConcatOne} - 2. ${textoToConcatTwo}`
);
console.log(`Aplicando concat: ${textoToConcatOne.concat(textoToConcatTwo)}`);
//-----------------------------------------------------------------------------------
console.log(
  "----------------------------------------------------------------------"
);

//-----------------------------------------------------------------------------------
// The Array.from() static method creates a new, shallow-copied Array instance from an iterable or array-like object.
//-----------------------------------------------------------------------------------
console.log("From method");
const texToFrom = "Aplicando el Metodo estatico from";
console.log(`Textos original ${texToFrom}`);
console.log(`Aplicando Array.from: ${Array.from(texToFrom)}`);
const texToFromWithSet = ["AA", "BB", "AA", "CC", "DD", "AA", "CC"];
const resultArrayFromSet = Array.from(new Set(texToFromWithSet)); // Array.from can be used to create a new array from an iterable object with Set or Map.
console.log(`Aplicando Array.from: ${resultArrayFromSet}`);
const resultArrayWithMap = Array.from(
  new Map([
    ["a", 1],
    ["b", 2],
    ["c", 3],
  ])
);
console.log(`Aplicando Array.from: ${resultArrayWithMap}`);
const resultArrayFromWithFunction = Array.from(
  new Set([1, 3, 5, 2, 1, 4, 2, 3, 1, 5, 6]),
  (x) => x ** 2
);
console.log(`Aplicando Array.from: ${resultArrayFromWithFunction}`);
//-----------------------------------------------------------------------------------
console.log(
  "----------------------------------------------------------------------"
);

//-----------------------------------------------------------------------------------
// The includes() method determines whether an array includes a certain value among its entries, returning true or false as appropriate.
//-----------------------------------------------------------------------------------
console.log("Includes method");
const textToIncludes = ["Casa", "Carro", "Perro"];
console.log(`Texto original: ${textToIncludes}`);
console.log(`Texto a buscar 'JS': ${textToIncludes.includes("JS")}`);
console.log(`Texto a buscar 'Carro': ${textToIncludes.includes("Carro")}`);
//-----------------------------------------------------------------------------------
console.log(
  "----------------------------------------------------------------------"
);

//-----------------------------------------------------------------------------------
// The Array.isArray() method determines whether the passed value is an Array.
//-----------------------------------------------------------------------------------
console.log("IsArray method");
console.log(
  `Aplicando el metodo estatico isArray: ${Array.isArray([1, 3, 4])}`
);
console.log(
  `Aplicando el metodo estatico isArray: ${Array.isArray(
    "Ejemplo con isArray"
  )}`
);
console.log(
  `Aplicando el metodo estatico isArray: ${Array.isArray({ key: "value" })}`
);

//-----------------------------------------------------------------------------------
console.log(
  "----------------------------------------------------------------------"
);

//-----------------------------------------------------------------------------------
// The Array.of() method creates a new Array instance from a variable number of arguments, regardless of number or type of the arguments.
//-----------------------------------------------------------------------------------
console.log("Of method");
const resultArrayOfOne = Array.of("Metodo Array.of()");
console.log(resultArrayOfOne);
const resultArrayOfTwo = Array.of({ key: "value" });
console.log(resultArrayOfTwo);
const resultArrayOfThree = Array.of(3, 5, 1, 6, 4, 8);
console.log(resultArrayOfThree);

//-----------------------------------------------------------------------------------
console.log(
  "----------------------------------------------------------------------"
);

//-----------------------------------------------------------------------------------
// The findLast() method returns the value of the last element in an array that satisfies the provided testing function. If no elements satisfy the testing function, undefined is returned.
//-----------------------------------------------------------------------------------
console.log("findLast method");
const animalsKingsI = [
  { name: "Simba", specie: "Lion", quantity: 1 },
  { name: "Michi", specie: "Cat", quantity: 4 },
  { name: "Petra", specie: "Cow", quantity: 3 },
  { name: "Firulais", specie: "Dog", quantity: 2 },
  { name: "Pelusa", specie: "Cat", quantity: 3 },
  { name: "Pepe", specie: "Dog", quantity: 1 },
];

const resultAnimals = animalsKings.findLast((animal) => animal.specie === "Dog");
console.log({ resultAnimals });
//-----------------------------------------------------------------------------------
console.log(
  "----------------------------------------------------------------------"
);

//-----------------------------------------------------------------------------------
// The findLastIndex() method returns the index of the last element in an array that satisfies the provided testing function. If no elements satisfy the testing function, -1 is returned. 
//-----------------------------------------------------------------------------------
console.log("findLastIndex method");

const animalsKingsII = [
    { name: "Simba", specie: "Lion", quantity: 1 },
    { name: "Michi", specie: "Cat", quantity: 4 },
    { name: "Petra", specie: "Cow", quantity: 3 },
    { name: "Firulais", specie: "Dog", quantity: 2 },
    { name: "Pelusa", specie: "Cat", quantity: 3 },
    { name: "Pepe", specie: "Dog", quantity: 1 },
  ];

const resultFindAnimal = animalsKings.findLastIndex((animal) => animal.specie === "Dog");
console.log({ resultFindAnimal });
//-----------------------------------------------------------------------------------
console.log(
  "----------------------------------------------------------------------"
);
