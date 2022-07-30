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
// El metodo estatico keys() permite obtener las claves, es decir, nombres de las propiedades de un objeto y a su vez almacenarlas en un arreglo.
// ----------------------------------------------------------------------------------------
const keysResult = Object.keys(userObjeto);
console.log(keysResult);
//-----------------------------------------------------------------------------------------

console.log('-----------------------------------------------------------------------------------------');

// ----------------------------------------------------------------------------------------
// El metodo estatico values, almacena los valores de las propiedades de un objeto en forma de arreglo
// ----------------------------------------------------------------------------------------
const valuesResult = Object.values(userObjeto);
console.log(valuesResult);
//-----------------------------------------------------------------------------------------

console.log('-----------------------------------------------------------------------------------------');

// ----------------------------------------------------------------------------------------
// El metodo estatico fromEntries, transforma un arreglo de entradas en un objeto 
// ----------------------------------------------------------------------------------------
const fromEntriesResult = Object.fromEntries(entriesResult);
console.log(fromEntriesResult);

const matrixArrysPerson = [
    ['name','Juan'],
    ['apellido','Perez'],
    ['edad',23],
    ['ciudad','Bogota']
];
const objWithFromEntries = Object.fromEntries(matrixArrysPerson);
console.log({objWithFromEntries});
//-----------------------------------------------------------------------------------------

console.log('-----------------------------------------------------------------------------------------');

// ----------------------------------------------------------------------------------------
// El metodo call() llama a una funcion con un valor dado this y con argumentos provistos individualmente.
// ----------------------------------------------------------------------------------------
const empleadoUno = {
    nombre: 'Juan',
    apellido: 'Perez',
};

const empleadoDos = {
    nombre: 'Pedro',
    apellido: 'Gonzalez',
};


function invitarEmpleados(saludo1, saludo2){
    console.log(`${saludo1} ${this.nombre} ${this.apellido} ${saludo2}`);
}

invitarEmpleados.call(empleadoUno, 'Hola','Saludos...');
invitarEmpleados.call(empleadoDos, 'Hola','Saludos');
//-----------------------------------------------------------------------------------------

console.log('-----------------------------------------------------------------------------------------');

// ----------------------------------------------------------------------------------------
// El metodo apply() invoca una determinada funcion asignado explicitamente el objeto this y un arreglo como parametros (argumentos) oara dicho funcion.
// ----------------------------------------------------------------------------------------

invitarEmpleados.apply(empleadoUno, ['Hola','Saludos...']);
invitarEmpleados.apply(empleadoDos, ['Hola','Saludos']);
//-----------------------------------------------------------------------------------------

console.log('-----------------------------------------------------------------------------------------');

// ----------------------------------------------------------------------------------------
// El metodo bind() crea una nueva funcion, que cuando es llamada, asigna a su operador this el valor entregado, con una secuencia de argumentos dados prediciendo a cualquiera entregados cuando la funcion es llamada. El valor de this es ignorado cuando la funcion es llamada con el operador new. Bind crea una funcion que tendra this establecido en el primer parametro pasado a bind()
// ----------------------------------------------------------------------------------------

const invitarEmpleadoUno = invitarEmpleados.bind(empleadoUno);
const invitarEmpleadoDos = invitarEmpleados.bind(empleadoDos);

invitarEmpleadoUno('Hola','Saludos...')
invitarEmpleadoDos('Hola','Saludos')
//-----------------------------------------------------------------------------------------

console.log('-----------------------------------------------------------------------------------------');

// ----------------------------------------------------------------------------------------
// Dos maneras de eliminar propiedades de un objeto
// ----------------------------------------------------------------------------------------

const objetoDos = {
    x: 45,
    y: 72,
    z: 68,
    p: 34
};

const objetoTres = {
    x: 45,
    y: 72,
    z: 68,
    p: 34
};

// Opcion 1 - Larga - :
delete objetoDos.x;
delete objetoDos.y;
console.log(objetoDos);

// Opcion 2 - Corta - :
const {x, y, ...newObj } = objetoTres;
console.log(newObj)
//-----------------------------------------------------------------------------------------

console.log('-----------------------------------------------------------------------------------------');

// ----------------------------------------------------------------------------------------
// Dos maneras de eliminar propiedades de un objeto
// ----------------------------------------------------------------------------------------

const school = {
    nombre: 'Juan',
    edad: 36,
    asignacion: 'Developer'
};

const { nombre, edad } = school;
console.log(nombre, edad);
//-----------------------------------------------------------------------------------------

console.log('-----------------------------------------------------------------------------------------');

// ----------------------------------------------------------------------------------------
// Object Destructuring: is a new way to extract elements from an object
// ----------------------------------------------------------------------------------------

const carOne = {
    name: "BMW",
    colour: "White"
};

// Before ES6 vertion
const name = carOne.name;
const colour = carOne.colour;

// Using object destructuring
const { name: carName, colour: carColour } = carOne;
console.log(carName, carColour);
//-----------------------------------------------------------------------------------------

console.log('-----------------------------------------------------------------------------------------');

// ----------------------------------------------------------------------------------------
// Spread Operator para eliminar props. Con el "three-dot-notation" creas un nuevo objeto.
// ----------------------------------------------------------------------------------------

const personrRandom = {
    name: "Juan",
    age: 23,
    job: "Developer"
};

// usando la notacion "three-dot-notation" (...) se puede crear un nuevo objeto sin job por ejemplo
const { job, ...newPerson } = personrRandom;
console.log({newPerson, job, personrRandom});
//-----------------------------------------------------------------------------------------

console.log('-----------------------------------------------------------------------------------------');

// ----------------------------------------------------------------------------------------
// Getters y Setters en Objetos JS: Las propiedades get y set permiten acceder a un objeto de forma controlada, transformando los valores a retornar o llevar un historial de accesos, por ejemplo.
// ----------------------------------------------------------------------------------------
const userOne = {
    name: "Juan",
    age: 23,
    job: "Developer",
    get fullName(){
        return `${this.name} ${this.age}`;
    },
    set newName(newValue){
        this.name = newValue;
    }
};

console.log({userOne});
console.log(userOne.fullName);
userOne.newName = "Pedro";
console.log({userOne});
console.log(userOne.fullName);
//-----------------------------------------------------------------------------------------

console.log('-----------------------------------------------------------------------------------------');

// ----------------------------------------------------------------------------------------
// Se pueden utilizar los objetos como Switches de opciones para evitar el uso de if-else o switch, en conjunto con el operando OR para mostrar un valor por defecto, simplificando el codigo por uno mas legible y ordenado.
// ----------------------------------------------------------------------------------------
console.log('Usando objetos como contenedores de opciones');
const funtionalSwitch = {
    "case-1": "This is case 1",
    "case-2": "This one case 2 condition",
    "case-3": "This is case 3",
    "case-4": "This is one more case",
};

const caseOpcion = "case-4";
const finalResult = funtionalSwitch[caseOpcion] || "No se encontro la opcion";
console.log({finalResult});
//-----------------------------------------------------------------------------------------

console.log('-----------------------------------------------------------------------------------------');

// ----------------------------------------------------------------------------------------
// Para comprobar que una propiedad en un objeto existe, se puede utilizar una expresion logica preguntando ppor cada propiedad del objeto, y si alguna de ellas es verdadera, se retorna true. O se puede usar el encadenamiento opcional (?.) para comprobar si una propiedad existe.
// El encandenamiento opcional (?.) es una forma segura de acceder a las propiedades de los objetos anidados, retornando undefined en el caso de no existir.
// ----------------------------------------------------------------------------------------
console.log('Encadenamiento condicional');
const userFinalObject = {
    name: "Juan",
    age: 23,
    job: "Developer",
    location: {
        city: "Bogota",
    }
};


try {
    console.log(userFinalObject.location.street.name);
} catch (error) {
    console.error("ERROR: Al intentar preguntar por una propiedad que no existe, se produce un error");
}

// una opcion podria ser preguntar por cada propiedad de forma logica en un condicional
console.log(userFinalObject.location && userFinalObject.location.street && userFinalObject.location.street.name);

// o se puede usar el encadenamiento opcional (?.) para comprobar si una propiedad existe
console.log(userFinalObject.location?.street?.name);
//-----------------------------------------------------------------------------------------

console.log('-----------------------------------------------------------------------------------------');

// ----------------------------------------------------------------------------------------
// The Javascript delete operator removes a property from an object; if no more references to the same property are held, it is evnetually released automatically. now, you can use the "in" operator to returns true if the property exists in the object.
// ----------------------------------------------------------------------------------------
console.log('delete operator');
const adminUser = {
    name: "Juan",
    age: 23,
    job: "Developer",
};
console.log({adminUser});
console.log(`Existe la propiedad age en el objeto: ${"age" in adminUser}`);
console.log(`Propiedad a borrar --> age, cuyo valor es: ${adminUser.age}`);
delete adminUser.age;
console.log(`Propiedad borrada --> age, cuyo nuevo valor es: ${adminUser.age}`);
console.log(`Existe la propiedad age en el objeto: ${"age" in adminUser}`);
console.log({adminUser});
//-----------------------------------------------------------------------------------------

console.log('-----------------------------------------------------------------------------------------');

// ----------------------------------------------------------------------------------------
// Check if a key exists in an object with the in operator or the has method or hasOwnproperty.
// ----------------------------------------------------------------------------------------
console.log('Method 1 - In operator');
const product = {
    name: "PC",
    price: 1040,
}
console.log({product});
console.log(`name es una propiedad del objeto: ${"name" in product}`);
console.log(`price es una propiedad del objeto: ${"price" in product}`);
console.log(`year es una propiedad del objeto: ${"year" in product}`);

console.log("Method 2 - has method");
console.log(`name existe en producto: ${Reflect.has(product, "name")}`);
console.log(`year existe en producto: ${Reflect.has(product, "year")}`);

console.log("Method 3 - hasOwnProperty method");
console.log(`name existe en producto: ${product.hasOwnProperty("name")}`);
console.log(`year existe en producto: ${product.hasOwnProperty("year")}`);
//-----------------------------------------------------------------------------------------

console.log('-----------------------------------------------------------------------------------------');

// ----------------------------------------------------------------------------------------
// Destructuracion Dinamica: ¿como desestructuramos un objeto si no sabemos por adelantado sus propiedades? Podemos usar [backet notation] para compopnerlas de forma dinamica.
// ----------------------------------------------------------------------------------------
console.log('Destructuracion Dinamica');
const usuarioTwo = {
    nombreTwo: "Juan",
};
console.log({usuarioTwo});
const propiedad = 'nombreTwo'; // es el identificador de la propiedad a que quiero acceder
const { [propiedad]: valor } = usuarioTwo;
console.log({valor}); // valor es la variable que contendra el valor de la propiedad
//-----------------------------------------------------------------------------------------

console.log('-----------------------------------------------------------------------------------------');

// ----------------------------------------------------------------------------------------
// Deep copy an object with JSON.parse and JSON.stringify: You can deep copy any object by converting it to a string and back to an object.
// ----------------------------------------------------------------------------------------
console.log('JSON parse to deep copy');

const objectToCopy = {
    name: "Juan",
    age: 23,
    job: "Developer",
    location: {
        city: "Bogota",
    },
    admin: true
}
console.log({objectToCopy});
const deepCopy = (objectIn) => JSON.parse(JSON.stringify(objectIn));
const copy = deepCopy(objectToCopy);
console.log({copy});
//-----------------------------------------------------------------------------------------

console.log('-----------------------------------------------------------------------------------------');

// ----------------------------------------------------------------------------------------
// Use Object.entries with forEach to access both key and value
// ----------------------------------------------------------------------------------------
console.log('Object entries');

const objectToEntryAll = {
    name: "Juan",
    age: 23,
    job: "Developer",
    location: {
        city: "Bogota",
    },
    admin: true
};

Object.entries(objectToEntryAll).forEach(([key, value]) => console.log(`${key}: ${value}`));
//-----------------------------------------------------------------------------------------

console.log('-----------------------------------------------------------------------------------------');

// ----------------------------------------------------------------------------------------
// Se puede agregar una propiedad dinamica a un objeto mediante el uso de corchetes
// ----------------------------------------------------------------------------------------
console.log('Agregando propiedad dinamica');
const dynamicProperty = "pais";
const userAdmin = {
    name: "Juan",
    age: 23,
    job: "Developer",
    [dynamicProperty]: "Venezuela",
};
console.log({userAdmin});
//-----------------------------------------------------------------------------------------

console.log('-----------------------------------------------------------------------------------------');

// ----------------------------------------------------------------------------------------
// 
// ----------------------------------------------------------------------------------------
console.log('');

//-----------------------------------------------------------------------------------------

console.log('-----------------------------------------------------------------------------------------');

// ----------------------------------------------------------------------------------------
// 
// ----------------------------------------------------------------------------------------
console.log('');

//-----------------------------------------------------------------------------------------

console.log('-----------------------------------------------------------------------------------------');

// ----------------------------------------------------------------------------------------
// 
// ----------------------------------------------------------------------------------------
console.log('');

//-----------------------------------------------------------------------------------------