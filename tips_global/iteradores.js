/*

    Ejemplos, trucos y tips para trabajar con iteradores en JavaScript

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
// 
// ----------------------------------------------------------------------------------------
console.log("");

//-----------------------------------------------------------------------------------------
console.log('-----------------------------------------------------------------------------------------');