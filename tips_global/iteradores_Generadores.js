/*

    Ejemplos, trucos y tips para trabajar con iteradores y generadores en JavaScript

*/

console.log('-----------------------------------------------------------------------------------------');

// ----------------------------------------------------------------------------------------
// Para poder iterar un objeto (por ejemplo) con for...of, debemos crear nuestro propio iterador.
// ----------------------------------------------------------------------------------------
console.log("Añadir un iterador a un objeto JS");
const develop = {
    name: "Juan",
    skills: ["Python","TypeScript","JavaScript"],
};

// se crea un iterador del tipo Symbol que es una propiedad de la clase Symbol
develop[Symbol.iterator] = function() {
    let i = 0;
    return {
        // next indica el valor a retornar en cada ciclo y si se debe seguir iterando el objeto
        next: () => ({
            value: this.skills[i++],
            done: i > this.skills.length
        })
    }
};

// ahora se aplica el for..of
for (const skill of develop) {
    console.log(skill);
}
// ----------------------------------------------------------------------------------------

console.log('-----------------------------------------------------------------------------------------');

// ----------------------------------------------------------------------------------------
// Se puede utilizar el operador Spread para generar un array con todos los elementos de uan funcion generadora.
// ----------------------------------------------------------------------------------------
console.log("Generadores con Spread");
function* generateFunction() {
    yield "J";
    yield "a";
    yield "v";
    yield "a";
    yield "S";
    yield "c";
    yield "r";
    yield "i";
    yield "p";
    yield "t";
}

// Se puede utilizar igualmente un ciclo for...of para obtener los valores de un generador
for (const item of generateFunction()) {
    console.log(item);
}

// Se puede utilizar el spread operator para generar un arreglo con cada uno de los elementos de la funcion generadora
console.log([...generateFunction()]);

// o aplicar directamente el spread operator a la funcion generadora antes del llamado y retornar un string
console.log(...generateFunction());
//-----------------------------------------------------------------------------------------

console.log('-----------------------------------------------------------------------------------------');