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
    name: "Nikola",
    lastName: "Tesla",
    occupation: "Engineer",
};

console.log(
"-----------------------------------------------------------------------------------------"
);
// ----------------------------------------------------------------------------------------
// The Object.assign() method copies all enumerable own properties from one or more source objects to a target object. It returns the modified target object. Object.assign(target, source)
// ----------------------------------------------------------------------------------------
console.log("assign Method");
const objectOne = {
name: "Juan",
age: 30,
occupation: "Developer",
country: "Mexico",
};
const objectTwo = {
name: "Pedro",
age: 25,
occupation: "Developer",
};
console.log({ objectOne, objectTwo });
const resultAssingObject = Object.assign(objectOne, objectTwo);
console.log({ resultAssingObject });
// Igualmente se puede utilizar destructuracion para obtener los valores de dos objetos en un solo objeto
const resultDestructuringAssingObject = { ...objectOne, ...objectTwo };
console.log({ resultDestructuringAssingObject });
// ----------------------------------------------------------------------------------------
console.log(
"-----------------------------------------------------------------------------------------"
);

/* ----------------------------------------------------------------------------------------  */

console.log(
"-----------------------------------------------------------------------------------------"
);
// ----------------------------------------------------------------------------------------
//  The Object.create() method creates a new object, using an existing object as the prototype of the newly created object.
// ----------------------------------------------------------------------------------------
console.log("create Method");
const personOne = {
active: false,
showData: function () {
console.log(
    `El nombre es: ${this.nombre} y se encuentra ${
    this.active ? "activo" : "inactivo"
    }`
);
},
};

console.log(personOne);

const newObject = Object.create(personOne);
newObject.nombre = "Juan";
newObject.active = true;
newObject.showData();
console.log(newObject);
// ----------------------------------------------------------------------------------------
console.log(
"-----------------------------------------------------------------------------------------"
);

/* ----------------------------------------------------------------------------------------  */

console.log(
"-----------------------------------------------------------------------------------------"
);
// ----------------------------------------------------------------------------------------
//  The Object.defineProperties() method defines new or modifies existing properties directly on an object, returning the object.
// ----------------------------------------------------------------------------------------
console.log("defineProperties Method");
const newObjectTwo = {};
Object.defineProperties(newObjectTwo, {
propertyOne: {
value: "Property One Value",
writable: true,
enumerable: true,
configurable: true,
description: "This is a property",
},
propertyTwo: {
value: "Property Two Value",
writable: false,
enumerable: false,
configurable: false,
description: "This is a property",
},
propertyThree: {},
});

console.log({ newObjectTwo });
console.log(newObjectTwo.propertyOne);
console.log(newObjectTwo.propertyTwo);
console.log(newObjectTwo.propertyThree);
// ----------------------------------------------------------------------------------------
console.log(
"-----------------------------------------------------------------------------------------"
);

/* ----------------------------------------------------------------------------------------  */

console.log(
"-----------------------------------------------------------------------------------------"
);
// ----------------------------------------------------------------------------------------
//  The static method Object.defineProperty() defines a new property directly on an object, or modifies an existing property on an object, and returns the object.
// ----------------------------------------------------------------------------------------
console.log("defineProperty Method");
const newObjectThree = {};
Object.defineProperty(newObjectThree, "nombre", {
value: "Juan",
writable: false,
enumerable: true,
configurable: true,
description: "This is a property name - not writable",
});
Object.defineProperty(newObjectThree, "edad", {
value: "30",
writable: true,
enumerable: true,
configurable: true,
description: "This is a property age",
});
console.log({ newObjectThree });

newObjectThree.nombre = "Pedro"; // no permite modificar
newObjectThree.edad = "25";
// ----------------------------------------------------------------------------------------
console.log(
"-----------------------------------------------------------------------------------------"
);

/* ----------------------------------------------------------------------------------------  */

console.log(
"-----------------------------------------------------------------------------------------"
);
// ----------------------------------------------------------------------------------------
//   The Object.entries() method returns an array of a given object's own enumerable string-keyed property [key, value] pairs. This is the same as iterating with a for...in loop, except that a for...in loop enumerates properties in the prototype chain as well. The order of the array returned by Object.entries() is the same as that provided by a for...in loop. If there is a need for different ordering, then the array should be sorted first, like Object.entries(obj).sort((a, b) => b[0].localeCompare(a[0]));.
// ----------------------------------------------------------------------------------------
console.log("entries Method");
console.log({ newUser });
console.log(`Entries only: ${Object.entries(newUser)}`);
console.log("Usando For...of");
for (const [key, value] of Object.entries(newUser)) {
console.log(`${key}: ${value}`);
}
// ----------------------------------------------------------------------------------------
console.log(
"-----------------------------------------------------------------------------------------"
);

/* ----------------------------------------------------------------------------------------  */

console.log(
"-----------------------------------------------------------------------------------------"
);
// ----------------------------------------------------------------------------------------
//  The Object.freeze() method freezes an object. A frozen object can no longer be changed; freezing an object prevents new properties from being added to it, existing properties from being removed, prevents changing the enumerability, configurability, or writability of existing properties, and prevents the values of existing properties from being changed. In addition, freezing an object also prevents its prototype from being changed. freeze() returns the same object that was passed in.
// ----------------------------------------------------------------------------------------
console.log("freeze Method");
const newObjectToFreeze = {
valor: 456,
detalle: "This is a property",
};

Object.freeze(newObjectToFreeze);
console.log({ newObjectToFreeze });
newObjectToFreeze.valor = -1;
console.log({ newObjectToFreeze });
// ----------------------------------------------------------------------------------------
console.log(
"-----------------------------------------------------------------------------------------"
);

/* ----------------------------------------------------------------------------------------  */

console.log(
"-----------------------------------------------------------------------------------------"
);
// ----------------------------------------------------------------------------------------
//  The Object.fromEntries() method transforms a list of key-value pairs into an object.
// ----------------------------------------------------------------------------------------
console.log("fromEntries Method");
// with Map
const newMapToConvert = new Map([
["name", "Juan"],
["age", 30],
]);
const newObjectFromMap = Object.fromEntries(newMapToConvert);
console.log({ newMapToConvert });
console.log({ newObjectFromMap });

// with Array Object
const newArraytoConvert = [
["name", "Juan"],
["age", 30],
];
const newObjectFromArray = Object.fromEntries(newArraytoConvert);
console.log({ newArraytoConvert });
console.log({ newObjectFromArray });

// Wit literal Object using entries and map
const newObjectToConvert = {
num1: 3,
num2: 5,
num3: 7,
};
const newObjectFromLiteralObject = Object.fromEntries(
Object.entries(newObjectToConvert).map(([key, value]) => [key, value * 4])
);
console.log({ newObjectToConvert });
console.log({ newObjectFromLiteralObject });

// ----------------------------------------------------------------------------------------
console.log(
"-----------------------------------------------------------------------------------------"
);

/* ----------------------------------------------------------------------------------------  */

console.log(
"-----------------------------------------------------------------------------------------"
);
// ----------------------------------------------------------------------------------------
// The Object.getOwnPropertyDescriptor() method returns an object describing the configuration of a specific property on a given object (that is, one directly present on an object and not in the object's prototype chain). The object returned is mutable but mutating it has no effect on the original property's configuration. 
// ----------------------------------------------------------------------------------------
console.log("getOwnPropertyDescriptor Method");
const newObjectToDescribe = {
    name: "Juan",
    lastName: "Perez",
    age: 37,
    showData: function () {
        console.log(`${this.name} - ${this.age}`);
    },
    get fullName() {
        return `${this.name} ${this.lastName}`;
    }
};

console.log({ newObjectToDescribe });
let objectDescriptor = Object.getOwnPropertyDescriptor(newObjectToDescribe, "name");
console.log({ objectDescriptor });
objectDescriptor = Object.getOwnPropertyDescriptor(newObjectToDescribe, "showData");
console.log({ objectDescriptor });
objectDescriptor = Object.getOwnPropertyDescriptor(newObjectToDescribe, "fullName");
console.log({ objectDescriptor });
// ----------------------------------------------------------------------------------------
console.log(
"-----------------------------------------------------------------------------------------"
);

/* ----------------------------------------------------------------------------------------  */

console.log(
"-----------------------------------------------------------------------------------------"
);
// ----------------------------------------------------------------------------------------
// The Object.getOwnPropertyDescriptors() method returns all own property descriptors of a given object. 
// ----------------------------------------------------------------------------------------
console.log("getOwnPropertyDescriptors Method");
const objectToGerDescriptors = {
    name: "Juan",
    lastName: "Perez",
    age: 37,
    showData: function () {
        console.log(`${this.name} - ${this.age}`);
    },
    get fullName() {
        return `${this.name} ${this.lastName}`;
    }
};
console.log({ objectToGerDescriptors });
const objectDescriptors = Object.getOwnPropertyDescriptors(objectToGerDescriptors);
console.log({ objectDescriptors });
// ----------------------------------------------------------------------------------------
console.log(
"-----------------------------------------------------------------------------------------"
);

/* ----------------------------------------------------------------------------------------  */

console.log(
"-----------------------------------------------------------------------------------------"
);
// ----------------------------------------------------------------------------------------
// The Object.getOwnPropertyNames() method returns an array of all properties (including non-enumerable properties except for those which use Symbol) found directly in a given object.
// ----------------------------------------------------------------------------------------
console.log("getOwnPropertyNames Method");
const objectToGetPropertyNames = {
    name: "Juan",
    lastName: "Perez",
    age: 37,
    showData: function () {
        console.log(`${this.name} - ${this.age}`);
    },
    get fullName() {
        return `${this.name} ${this.lastName}`;
    }
};
console.log({ objectToGetPropertyNames });
const objectPropertyNames = Object.getOwnPropertyNames(objectToGetPropertyNames);
console.log({ objectPropertyNames });
// ----------------------------------------------------------------------------------------
console.log(
"-----------------------------------------------------------------------------------------"
);

/* ----------------------------------------------------------------------------------------  */










console.log(
"-----------------------------------------------------------------------------------------"
);
// ----------------------------------------------------------------------------------------
// The Object.keys() method returns an array of a given object's own enumerable property names, iterated in the same order that a normal loop would.
// ----------------------------------------------------------------------------------------
console.log("keys Method");
console.log({ newUser });
console.log(`Keys only: ${Object.keys(newUser)}`);
// ----------------------------------------------------------------------------------------
console.log(
"-----------------------------------------------------------------------------------------"
);

/* ----------------------------------------------------------------------------------------  */

console.log(
"-----------------------------------------------------------------------------------------"
);
// ----------------------------------------------------------------------------------------
//  The Object.values() method returns an array of a given object's own enumerable property values, in the same order as that provided by a for...in loop. (The only difference is that a for...in loop enumerates properties in the prototype chain as well.)
// ----------------------------------------------------------------------------------------
console.log("values Method");
console.log({ newUser });
console.log(`Values only: ${Object.values(newUser)}`);
// ----------------------------------------------------------------------------------------
console.log(
"-----------------------------------------------------------------------------------------"
);

/* ----------------------------------------------------------------------------------------  */

console.log(
"-----------------------------------------------------------------------------------------"
);
// ----------------------------------------------------------------------------------------
//
// ----------------------------------------------------------------------------------------
console.log(" Method");
// ----------------------------------------------------------------------------------------
console.log(
"-----------------------------------------------------------------------------------------"
);

/* ----------------------------------------------------------------------------------------  */

console.log(
"-----------------------------------------------------------------------------------------"
);
// ----------------------------------------------------------------------------------------
//
// ----------------------------------------------------------------------------------------
console.log(" Method");
// ----------------------------------------------------------------------------------------
console.log(
"-----------------------------------------------------------------------------------------"
);

/* ----------------------------------------------------------------------------------------  */




