/* Trabajando con ciclos y arreglos */

let peliculas = ["Batman", "Spiderman", "Superman", "Aquaman"];

/* for (let i = 0; i < peliculas.length; i++) {
    console.log(peliculas[i]);
} */

for (const pelicula of peliculas) {
    console.log(pelicula);
}

let edades = [49, 51, 21, 18, 15];
for (const edad of edades) {
    console.log(`La edad es: ${edad}`);
}

/* Objetos literales en JS */
let personas = {
    nombre: "Juan",
    apellido: "Perez",
    edad: 21,
    soltero: true,
    hijos: 0,
    propiedades: ["casa","carro"],
    /* metodo de un objeto */
    saludar: function() {
        console.log("hola....");
        return `hola desde el return ${this.nombre} ${this.apellido}...`
    },
    nombreCompleto: ()=>{
        return `El nombre es: ${this.nombre}`;
    }
};
console.log(personas);
console.log(personas.apellido);
console.log(personas["edad"]);
personas.apellido = "Díaz";
console.log(personas.apellido);
personas["hijos"] = 2;
console.log(personas["hijos"]);
console.log(personas);
personas.nacionalidad = "Chilena";
console.log(personas);
console.log(personas.saludar());
console.log(personas.nombreCompleto());

/* for in para objetos */

console.log("---------resultado del for...in")
for (const key in personas) {
    console.log(`${key} : ${personas[key]}`)
}

const arregloPropiedades = Object.keys(personas);
console.log(arregloPropiedades);
const arregloValores = Object.values(personas);
console.log(arregloValores);
const arregloCompleto = Object.entries(personas);
console.log(arregloCompleto);

