let arreglo = [1,32,4,6,87,8];
let personas = [
    { name: "Juan", age: 20 },
    { name: "Pedro", age: 30 },
    { name: "Maria", age: 40 },
    { name: "Carlos", age: 50 },
];
let nombres = ["Juan","Pedro","Maria"];
let largoArreglos = 0;

/* Metodo que permite agregar un nuevo elemento al final del arreglo - push*/
largoArreglos = arreglo.push(9,30,[-56,7,8]);
console.log(arreglo);
console.log(`Largo del arreglo nuevo: ${largoArreglos}`);
let nuevaPersona = { name: "Kamila", age: 60 };
personas.push(nuevaPersona);
personas.push({ name: "Constanza", age: 28 });
personas.push({ name: "Pedro", age: 48 },{ name: "Carmen", age: 58 });
console.log(personas);
/* Metodo que permite eliminar el ultimo elemento de arreglo - pop*/
largoArreglos = personas.pop();
console.log(personas);
console.log(`Valor del nombre: ${largoArreglos.name}, valor de la edad: ${largoArreglos.age}`);
//-----------------------
largoArreglos = nombres.pop();
console.log(nombres);
console.log(`Valor despues de hacer pop ${largoArreglos}`);
/* Metodo que permite eliminar el primer elemento de un arreglo - shift*/
largoArreglos = personas.shift();
console.log(personas);
console.log(`Valor despues de hacer shift ${largoArreglos.name}`);
/* Metodo que permite agregar un nuevo elemento al inicio del arreglo - unshift*/
largoArreglos = personas.unshift({ name: "Pablo", age: 33 });
console.log(personas);
console.log(`Valor despues de hacer unshift ${largoArreglos}`);
/* Transformar una cadena en arreglo */
let texto = "Desarrollo FrontEnd con VueJS";
let texto2 = texto.split(" ");
console.log(typeof texto);
console.log(texto);
console.log(typeof texto2);
console.log(texto2);
let texto3 = "Nevera, cocina, mesas de comedor, son cosas para la casa";
texto3 = texto3.split(",");
console.log(texto3);
/* Transformar de un arreglo a un string o cadeba de texto */
let arregloTextos = ["Hola","Mundo","Como","Estas"];
arregloTextos = arregloTextos.join();
console.log(typeof arregloTextos);
console.log(arregloTextos);
/* Metodo para procesar un arreglo y crear uno nuevo */
let arregloNumeros = [1,2,3,4,5,6,7,8,9,10];
let potenciaNumeros = arregloNumeros.map(function(numero){
    return numero**2;
});
console.log(potenciaNumeros);
let raizCuadrada = arregloNumeros.map(numero => Math.sqrt(numero));
console.log(raizCuadrada);
console.log(arregloNumeros);

let personasDos = [
    { name: "Juan", age: 20 },
    { name: "Pedro", age: 30 },
    { name: "Maria", age: 40 },
    { name: "Carlos", age: 50 },
];
let personasEdad = personasDos.map(persona => persona.age);


/* Aplicando el metodo Reduce a un arreglo */
let arregloNumerosDos = [1,2,3,4,5,6,7,8,9,10];
let sumaArregloFinal = arregloNumerosDos.reduce(function(acumulador,valorActual,index,arregloReduce){
    console.log(`Acumulador antes: ${acumulador}`);
    let resultado = acumulador + valorActual;
    console.log(`Acumulador despues: ${acumulador}`);
    console.log(`Valor actual: ${valorActual}`);
    console.log(`Indice: ${index}`);
    console.log(`Arreglo: ${arregloReduce}`);
    return resultado;
},100);
console.log(sumaArregloFinal);

console.log(personasEdad);
let sumaEdades = personasEdad.reduce((acumulador,edad) => acumulador+edad); 
console.log(sumaEdades);

/* Ejemplo usando Map y Reduce */
let experiencias = [
    {
       titulo: "Practica",
       anos: 1,
    },
    {
       titulo: "Programador Junior",
       anos: 2,
    },
    {
       titulo: "Programador Senior",
       anos: 4,
    },
    {
       titulo: "Jefe de proyecto",
       anos: 5,
    }
];

let experienciasIndividual = experiencias.map(year => year.anos);
let experienciaTotal = experienciasIndividual.reduce((acumulador,year) => acumulador+year);
console.log(experienciaTotal);

/* Aplicando metodo filter a arreglos */
let clientes = [
    {nombre: 'Juan', edad: 28},
    {nombre: 'Carlos', edad: 17},
    {nombre: 'Karla', edad: 27},
];

let mayoresEdad = clientes.filter(function(cliente){
    return cliente.edad >= 18;
});
console.log(mayoresEdad);

let numerosEnteros = [4,6,3,2,7,87,4,2,5,87,4];
let numerosPares = numerosEnteros.filter(numero => numero%2 === 0);
console.log(numerosPares);

let pokemones = [
    {nombre: 'Pikachu', level: 28},
    {nombre: 'Charmander', level: 22},
    {nombre: 'Dito', level: 37},
];

let level = pokemones.filter(pokemon => pokemon.level > 30);
console.log(level);

/* Aplicando concat para unir arreglos */
let arregloUno = [1,2,3,4,5];
let arregloDos = [6,7,8,9,10];
let arregloAux = [56,7,3,78];
let arregloTres = arregloUno.concat(arregloDos, arregloAux);
console.log(arregloTres);

/* Aplicando el metodo sort para ordenar valores dentro del arreglo */
let listaAux =["Pepe",5,2,"Diego","1"];
console.log(listaAux.sort());
let numerosAux = [85,87,90,99,92,93,9,8];
console.log(numerosAux.sort());
console.log(numerosAux.sort((a,b) => a-b));

/* Reverse a un arreglo */
console.log(listaAux.reverse());
console.log(listaAux);
let numerosAux2 = [85,87,90,99,92,93,9,8];
console.log(numerosAux2);
console.log(numerosAux2.reverse());
console.log(numerosAux2);

/* forEach en arreglos */
let pokemones2 = [
    {nombre: 'Pikachu', level: 28},
    {nombre: 'Charmander', level: 22},
    {nombre: 'Dito', level: 37},
];

pokemones2.forEach(pokemon => console.log(pokemon.nombre));

/* aplicando find a un arreglo  */

let encontrado = pokemones2.find(pokemon => pokemon.level > 20);
console.log(encontrado);
/* aplicando findIndex a un arreglo */
let indiceEncontrado = pokemones2.findIndex(pokemon => pokemon.level > 20);
/* Aplicando some a un arreglo */
console.log(indiceEncontrado);
let DitoEncontrado = pokemones2.some(pokemon => pokemon.nombre === 'Dito');
console.log(DitoEncontrado);

/* Splice para eliminar, sustituir o agregar elementos a un arreglo */
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(1,0,"Kiwi","Uva");
console.log(fruits);
/* slice retorna los elementos seleccionado en un rango de un arreglo en uno nuevo */
let nuevasFrutas = fruits.slice(1,4);
console.log(nuevasFrutas);
