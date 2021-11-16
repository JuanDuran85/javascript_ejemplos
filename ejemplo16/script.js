/* Trabajando con objetos del tipo Set */

let objetoSet = new Set("aaaaa bbbb cccc dddd");
console.log(objetoSet);

let arregloVariable = [3,5,7,3,5,2,2,3,5];

let arregloUnico = new Set(arregloVariable);
arregloUnico.add(3);
arregloUnico.add(4);
arregloUnico.add(5);
arregloUnico.add(6);
arregloUnico.delete(5);
console.log(arregloUnico);
console.log(arregloUnico.size);
console.log(arregloUnico.has(5));
console.log(arregloUnico.has(3));

/* ForEach a un Set */

arregloUnico.forEach(element => {
    console.log(element);
});

for (const iterator of arregloUnico) {
    console.log(iterator);
}

let peliculas = ["Batman", "Spiderman", "Superman", "Aquaman"];

peliculas.forEach(pelicula => {
    console.log(pelicula);
});

let personas = [
    {
        nombre: "Juan",
        edad: 49,
        ciudad: "Santiago"
    },
    {
        nombre: "Humberto",
        edad: 35,
        ciudad: "Talca"
    },
    {
        nombre: "Natalia",
        edad: 28,
        ciudad: "Concepcion"
    },

]

for (const persona of personas) {
    console.log(persona.nombre);
}

personas.forEach(persona => {
    console.log(persona.nombre);
});