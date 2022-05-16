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
console.log("Push Method")
arrayGlobal.push('C++','C#','Java');
console.log(arrayGlobal);

// ----------------------------------------------------------------------------------------
console.log('-----------------------------------------------------------------------------------------');

// ----------------------------------------------------------------------------------------
// The pop() method removes the last element from an array and returns that element. This method changes the length of the array. 
// ----------------------------------------------------------------------------------------
console.log("Pop Method")
arrayGlobal.pop();
console.log(arrayGlobal);       

// ----------------------------------------------------------------------------------------
console.log('-----------------------------------------------------------------------------------------');

// ----------------------------------------------------------------------------------------
// The shift() method removes the first element from an array and returns that removed element. This method changes the length of the array. 
// ----------------------------------------------------------------------------------------
console.log("Shift Method")
arrayGlobal.shift();
console.log(arrayGlobal);       

// ----------------------------------------------------------------------------------------
console.log('-----------------------------------------------------------------------------------------');

// ----------------------------------------------------------------------------------------
// The unshift() method adds one or more elements to the beginning of an array and returns the new length of the array.
// ----------------------------------------------------------------------------------------
console.log("Unshift Method")
arrayGlobal.unshift("JavaScript");
console.log(arrayGlobal);       

// ----------------------------------------------------------------------------------------
console.log('-----------------------------------------------------------------------------------------');

// ----------------------------------------------------------------------------------------
// The splice() method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.
// ----------------------------------------------------------------------------------------
console.log("Unshift Method")
arrayGlobal.splice(0,1,"JS");
console.log(arrayGlobal);       

// ----------------------------------------------------------------------------------------
console.log('-----------------------------------------------------------------------------------------');