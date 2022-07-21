/*

    Metodos de Objectos literales en JavaScript

    The Object type represents one of JavaScript's data types. It is used to store various keyed collections and more complex entities. Objects can be created using the Object() constructor or the object initializer / literal syntax.

        - Object.assign()
        - Object.create()
        - Object.defineProperties()
        - Object.defineProperty()
        - Object.entries()
        - Object.freeze()
        - Object.fromEntries()
        - Object.getOwnPropertyDescriptor()
        - Object.getOwnPropertyDescriptors()
        - Object.getOwnPropertyNames()
        - Object.getOwnPropertySymbols()
        - Object.getPrototypeOf()
        - Objecte.hasOwn()
        - Objecte.hasOwnProperty()
        - Object.is()
        - Object.isExtensible()
        - Object.isFrozen()
        - Object.prototype.isPrototypeOf()
        - Object.isSealed()
        - Object.keys()
        - Object.preventExtensions()
        - Object.propertyIsEnumerable()
        - Object.seal()
        - Object.setPrototypeOf()
        - Object.toLocaleString()
        - Object.toString()
        - Object.prototype.valuesOf()
        - Object.values()

*/


const newUser = {
    name: 'Nikola',
    lastName: 'Tesla',
    occupation: 'Engineer',
};

// ----------------------------------------------------------------------------------------
// The Object.assign() method copies all enumerable own properties from one or more source objects to a target object. It returns the modified target object. Object.assign(target, source)
// ----------------------------------------------------------------------------------------
console.log("assign Method");
const objectOne = {
    name: "Juan", 
    age: 30,
    occupation: "Developer",
    country: "Mexico"
};
const objectTwo = {
    name: "Pedro",
    age: 25,
    occupation: "Developer"
};
console.log({objectOne,objectTwo});
const resultAssingObject = Object.assign(objectOne, objectTwo);
console.log({resultAssingObject});
// Igualmente se puede utilizar destructuracion para obtener los valores de dos objetos en un solo objeto
const resultDestructuringAssingObject = {...objectOne, ...objectTwo};
console.log({resultDestructuringAssingObject});
// ----------------------------------------------------------------------------------------
console.log('-----------------------------------------------------------------------------------------');


// ----------------------------------------------------------------------------------------
//  The Object.create() method creates a new object, using an existing object as the prototype of the newly created object. 
// ----------------------------------------------------------------------------------------
console.log("create Method");
const personOne = {
    active: false,
    showData: function() {
        console.log(`El nombre es: ${this.nombre} y se encuentra ${this.active ? 'activo' : 'inactivo'}`);
    }
};

console.log(personOne);

const newObject = Object.create(personOne);
newObject.nombre = 'Juan';
newObject.active = true;
newObject.showData();
console.log(newObject);
// ----------------------------------------------------------------------------------------
console.log('-----------------------------------------------------------------------------------------');


// ----------------------------------------------------------------------------------------
//  The Object.defineProperties() method defines new or modifies existing properties directly on an object, returning the object. 
// ----------------------------------------------------------------------------------------
console.log("defineProperties Method");



// ----------------------------------------------------------------------------------------
console.log('-----------------------------------------------------------------------------------------');


// ----------------------------------------------------------------------------------------
// The Object.keys() method returns an array of a given object's own enumerable property names, iterated in the same order that a normal loop would. 
// ----------------------------------------------------------------------------------------
console.log("keys Method");
console.log({ newUser });
console.log(`Keys only: ${Object.keys(newUser)}`);

// ----------------------------------------------------------------------------------------
console.log('-----------------------------------------------------------------------------------------');

// ----------------------------------------------------------------------------------------
//  The Object.values() method returns an array of a given object's own enumerable property values, in the same order as that provided by a for...in loop. (The only difference is that a for...in loop enumerates properties in the prototype chain as well.) 
// ----------------------------------------------------------------------------------------
console.log("values Method");
console.log({ newUser });
console.log(`Values only: ${Object.values(newUser)}`);

// ----------------------------------------------------------------------------------------
console.log('-----------------------------------------------------------------------------------------');

// ----------------------------------------------------------------------------------------
//   The Object.entries() method returns an array of a given object's own enumerable string-keyed property [key, value] pairs. This is the same as iterating with a for...in loop, except that a for...in loop enumerates properties in the prototype chain as well. The order of the array returned by Object.entries() is the same as that provided by a for...in loop. If there is a need for different ordering, then the array should be sorted first, like Object.entries(obj).sort((a, b) => b[0].localeCompare(a[0]));. 
// ----------------------------------------------------------------------------------------
console.log("entries Method");
console.log({ newUser });
console.log(`Entries only: ${Object.entries(newUser)}`);
console.log("Usando For...of");
for (const [key,value] of Object.entries(newUser)) {
    console.log(`${key}: ${value}`);
}
// ----------------------------------------------------------------------------------------
console.log('-----------------------------------------------------------------------------------------');




// ----------------------------------------------------------------------------------------
console.log('-----------------------------------------------------------------------------------------');

// ----------------------------------------------------------------------------------------
//  
// ----------------------------------------------------------------------------------------
console.log(" Method");


// ----------------------------------------------------------------------------------------
console.log('-----------------------------------------------------------------------------------------');

// ----------------------------------------------------------------------------------------
//  
// ----------------------------------------------------------------------------------------
console.log(" Method");


// ----------------------------------------------------------------------------------------
console.log('-----------------------------------------------------------------------------------------');

// ----------------------------------------------------------------------------------------
//  
// ----------------------------------------------------------------------------------------
console.log(" Method");


// ----------------------------------------------------------------------------------------
console.log('-----------------------------------------------------------------------------------------');

// ----------------------------------------------------------------------------------------
//  
// ----------------------------------------------------------------------------------------
console.log(" Method");


// ----------------------------------------------------------------------------------------
console.log('-----------------------------------------------------------------------------------------');

// ----------------------------------------------------------------------------------------
//  
// ----------------------------------------------------------------------------------------
console.log(" Method");


// ----------------------------------------------------------------------------------------
console.log('-----------------------------------------------------------------------------------------');

// ----------------------------------------------------------------------------------------
//  
// ----------------------------------------------------------------------------------------
console.log(" Method");


// ----------------------------------------------------------------------------------------
console.log('-----------------------------------------------------------------------------------------');