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