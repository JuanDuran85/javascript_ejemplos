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
        - toJSON()
        - entries()
        - keys()
        - values()
        - flat()
        - flatMap()

*/

const arrayGlobal = ['JavaScript','Python'];
console.log(arrayGlobal);

// ----------------------------------------------------------------------------------------
// The push() method adds one or more elements to the end of an array and returns the new length of the array.
// ----------------------------------------------------------------------------------------
console.log("Push Method");
arrayGlobal.push('C++','C#','Java','PHP','JS','Python');
console.log(arrayGlobal);

// ----------------------------------------------------------------------------------------
console.log('-----------------------------------------------------------------------------------------');

// ----------------------------------------------------------------------------------------
// The pop() method removes the last element from an array and returns that element. This method changes the length of the array. 
// ----------------------------------------------------------------------------------------
console.log("Pop Method");
arrayGlobal.pop();
console.log(arrayGlobal);       

// ----------------------------------------------------------------------------------------
console.log('-----------------------------------------------------------------------------------------');

// ----------------------------------------------------------------------------------------
// The shift() method removes the first element from an array and returns that removed element. This method changes the length of the array. 
// ----------------------------------------------------------------------------------------
console.log("Shift Method");
arrayGlobal.shift();
console.log(arrayGlobal);       

// ----------------------------------------------------------------------------------------
console.log('-----------------------------------------------------------------------------------------');

// ----------------------------------------------------------------------------------------
// The unshift() method adds one or more elements to the beginning of an array and returns the new length of the array.
// ----------------------------------------------------------------------------------------
console.log("Unshift Method");
arrayGlobal.unshift("JavaScript");
console.log(arrayGlobal);       

// ----------------------------------------------------------------------------------------
console.log('-----------------------------------------------------------------------------------------');

// ----------------------------------------------------------------------------------------
// The splice() method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place. array.splice(start[, deleteCount[, item1[, item2[, ...]]]])
// ----------------------------------------------------------------------------------------
console.log("Splice Method");
arrayGlobal.splice(0,0,"JS"); // Inserta un elemento en la posicion 0
console.log(arrayGlobal); 
arrayGlobal.splice(2,1); // Elimina un elemento en la posicion 2
console.log(arrayGlobal);       

// ----------------------------------------------------------------------------------------
console.log('-----------------------------------------------------------------------------------------');

// ----------------------------------------------------------------------------------------
// El método slice() devuelve una copia de una parte del array dentro de un nuevo array empezando por inicio hasta fin (fin no incluido). El array original no se modificará. arr.slice([inicio [, fin]])
// ----------------------------------------------------------------------------------------
console.log("Slice Method");
let resultSlice = arrayGlobal.slice(1,3);
console.log(resultSlice);       

// ----------------------------------------------------------------------------------------
console.log('-----------------------------------------------------------------------------------------');

// ----------------------------------------------------------------------------------------
// El método indexOf() retorna el primer índice en el que se puede encontrar un elemento dado en el array, ó retorna -1 si el elemento no esta presente. Si retorna -1 el elemento no fue encontrado
// ----------------------------------------------------------------------------------------
console.log("indexOf Method");
let resultIndexOf = arrayGlobal.indexOf("JS");
console.log(resultIndexOf);
resultIndexOf = arrayGlobal.indexOf("PHP");
console.log(resultIndexOf);     

// ----------------------------------------------------------------------------------------
console.log('-----------------------------------------------------------------------------------------');

// ----------------------------------------------------------------------------------------
// El método lastIndexOf() devuelve el último índice en el que un cierto elemento puede encontrarse en el arreglo, ó -1 si el elemento no se encontrara. El arreglo es recorrido en sentido contrario, empezando por el índice fromIndex.
// ----------------------------------------------------------------------------------------
console.log("lastIndexOf Method");
let resultLastIndexOf = arrayGlobal.lastIndexOf("JavaScript");
console.log(resultLastIndexOf);
resultLastIndexOf = arrayGlobal.lastIndexOf("JS");
console.log(resultLastIndexOf);     

// ----------------------------------------------------------------------------------------
console.log('-----------------------------------------------------------------------------------------');

// ----------------------------------------------------------------------------------------
// El método forEach() ejecuta la función indicada una vez por cada elemento del array.
// ----------------------------------------------------------------------------------------
console.log("forEach Method");
arrayGlobal.forEach(element => console.log(element));

// ----------------------------------------------------------------------------------------
console.log('-----------------------------------------------------------------------------------------');

// ----------------------------------------------------------------------------------------
// El método map() crea un nuevo array con los resultados de la llamada a la función indicada aplicados a cada uno de sus elementos.
// ----------------------------------------------------------------------------------------
console.log("map Method");
let resultMap = arrayGlobal.map(element => element.toLowerCase());
console.log(resultMap);

// ----------------------------------------------------------------------------------------
console.log('-----------------------------------------------------------------------------------------');

// ----------------------------------------------------------------------------------------
// El método filter() crea un nuevo array con todos los elementos que cumplan la condición implementada por la función dada.
// ----------------------------------------------------------------------------------------
console.log("filter Method");
let resultFilter = arrayGlobal.filter(element => element.length > 5);
console.log(resultFilter);

// ----------------------------------------------------------------------------------------
console.log('-----------------------------------------------------------------------------------------');

// ----------------------------------------------------------------------------------------
// El método reduce() ejecuta una función reductora sobre cada elemento de un array, devolviendo como resultado un único valor.
// ----------------------------------------------------------------------------------------
console.log("Reduce Method");
let resultReduce = arrayGlobal.reduce((pre,current)=> `${pre} ${current}`, '-')
console.log(resultReduce);

// ----------------------------------------------------------------------------------------
console.log('-----------------------------------------------------------------------------------------');

// ----------------------------------------------------------------------------------------
// El método reduceRight() ejecuta una función reductora sobre cada elemento de un array, devolviendo como resultado un único valor. El array se reduce de derecha a izquierda.
// ----------------------------------------------------------------------------------------
console.log("reduceRight Method");
let resultReduceRight = arrayGlobal.reduceRight((pre,current)=> `${pre} ${current}`, '-')
console.log(resultReduceRight);

// ----------------------------------------------------------------------------------------
console.log('-----------------------------------------------------------------------------------------');

// ----------------------------------------------------------------------------------------
// El metodo every(): determina si todos los elementos en el array satisfacen una condición.
// ----------------------------------------------------------------------------------------
console.log("Every Method");
let resultEvery = arrayGlobal.every(element => element.length > 4);
console.log(resultEvery);

// ----------------------------------------------------------------------------------------
console.log('-----------------------------------------------------------------------------------------');

// ----------------------------------------------------------------------------------------
// El método some() comprueba si al menos un elemento del array cumple con la condición implementada por la función proporcionada.
// ----------------------------------------------------------------------------------------
console.log("Some Method");
let resultSome = arrayGlobal.some(element => element.length > 4);
console.log(resultSome);

// ----------------------------------------------------------------------------------------
console.log('-----------------------------------------------------------------------------------------');

// ----------------------------------------------------------------------------------------
// El método find() devuelve el valor del primer elemento del array que cumple la función de prueba proporcionada.
// ----------------------------------------------------------------------------------------
console.log("Find Method");
let resultFind = arrayGlobal.find(element => element.length > 4);
console.log(resultFind);

// ----------------------------------------------------------------------------------------
console.log('-----------------------------------------------------------------------------------------');

// ----------------------------------------------------------------------------------------
// El método findIndex() devuelve el índice del primer elemento de un array que cumpla con la función de prueba proporcionada. En caso contrario devuelve -1.
// ----------------------------------------------------------------------------------------
console.log("findIndex Method");
let resultFindIndex = arrayGlobal.findIndex(element => element.length > 4);
console.log(resultFindIndex);

// ----------------------------------------------------------------------------------------
console.log('-----------------------------------------------------------------------------------------');

// ----------------------------------------------------------------------------------------
// The fill() method changes all elements in an array to a static value, from a start index (default 0) to an end index (default array.length). It returns the modified array. 
// ----------------------------------------------------------------------------------------
console.log("Fill Method");
let resultFill = arrayGlobal.fill("JS",1,2);
console.log(resultFill);

// ----------------------------------------------------------------------------------------
console.log('-----------------------------------------------------------------------------------------');

// ----------------------------------------------------------------------------------------
// The copyWithin() method shallow copies part of an array to another location in the same array and returns it without modifying its length. 
// ----------------------------------------------------------------------------------------
console.log("CopyWithin Method");
let resultCopyWithin = arrayGlobal.copyWithin(1,2);
console.log(resultCopyWithin);

// ----------------------------------------------------------------------------------------
console.log('-----------------------------------------------------------------------------------------');