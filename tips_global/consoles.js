/*

Ejemplos, trucos y tips para trabajar con console en JavaScript
    - console.time
    - console.timeEnd
    - console.group
    - console.groupEnd
    - console.log
    - console.error
    - console.warn
    - console.info
    - console.table
    - console.clear
    - console.trace
    - console.dir
    - console.dirxml
    - console.profile
    - console.profileEnd
    - console.count
    - console.assert
    - console.countReset
    - console.groupCollapsed

*/


console.log('-----------------------------------------------------------------------------------------');

// ----------------------------------------------------------------------------------------
// console.time: genera un temporizador que nos permite medir el tiempo de ejecucion de de los procesos en JS.
// ----------------------------------------------------------------------------------------

console.time('----------Time suma------');
let numbers = [4,5,6,3,4,1,2,8,5,4,3,8,9,7,6,5,4,3,2,1,0];
let result = 0;
numbers.forEach(num => result += num);
console.log({result});
console.timeEnd('----------Time suma------');


//-----------------------------------------------------------------------------------------

console.log('-----------------------------------------------------------------------------------------');