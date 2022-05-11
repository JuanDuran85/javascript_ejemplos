/*

Ejemplos, trucos y tips para trabajar con objetos en JavaScript

*/


// ----------------------------------------------------------------------------------------
// Object.hasOwn: comprueba si un objeto tiene una propiedad, es decir, si una propiedad es propia
// ----------------------------------------------------------------------------------------
const objetoUno = {
    id: 2,
    name: 'Juan'
}

console.log(Object.hasOwn(objetoUno,'id')); // retorna true, porque el objeto tiene la propiedad id
console.log(Object.hasOwn(objetoUno,'name')); // retorna true, porque el objeto tiene la propiedad name
console.log(Object.hasOwn(objetoUno,'toString')); // retorna false, porque el objeto no tiene la propiedad toString

// ----------------------------------------------------------------------------------------


console.log('-----------------------------------------------------------------------------------------');

// ----------------------------------------------------------------------------------------
// Con el metodo estatico "entries" se puede devolver un arreglo de entradas, esto es, un arreglo con cada par clave-valor del objeto
// ----------------------------------------------------------------------------------------

const userObjeto = {
    name: "Juan",
    role: "Developer",
    techs: ["JavaScript", "NestJS", "NodeJS", "Python"]
}

const entriesResult = Object.entries(userObjeto);
console.log(entriesResult);

//-----------------------------------------------------------------------------------------


console.log('-----------------------------------------------------------------------------------------');

// ----------------------------------------------------------------------------------------
// 
// ----------------------------------------------------------------------------------------



//-----------------------------------------------------------------------------------------

console.log('-----------------------------------------------------------------------------------------');

// ----------------------------------------------------------------------------------------
// 
// ----------------------------------------------------------------------------------------



//-----------------------------------------------------------------------------------------