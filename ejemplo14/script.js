let peliculas = ["shaft", "it 2", "rambo"];
console.log(typeof peliculas);
console.log(peliculas);
console.log(peliculas[0]);
console.log(peliculas[1]);
console.log(peliculas[2]);
console.log(`Largo del arreglo: ${peliculas.length}`);

/* agregar nuevos elementos mediante indice */
peliculas[3] = "Toy Story";
peliculas[0] = "El Padrino";
peliculas[9] = "El Padrino 2";
console.log(peliculas);
console.log(`Largo del arreglo: ${peliculas.length}`);

/* borrando arreglo */
peliculas = [];
console.log(peliculas);
console.log(`Largo del arreglo: ${peliculas.length}`);

/* Arreglos dentro de arreglos (matriz) */

let matriz3x3 = [[3,1,2],[0,5,-6],[0,1,4]];
console.log(matriz3x3);
console.log(matriz3x3[1]);
console.log(matriz3x3[0][0]);
