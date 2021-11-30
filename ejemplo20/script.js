/* Ttrabajando con POO */

let carro = new Object();
console.log(typeof carro);
console.log(carro);
carro.marca = "Ford";
console.log(carro);
console.log(carro.marca);
carro.MarCa = "Fiat";
console.log(carro);
console.log(carro.marca);

let avion = {};
console.log(typeof avion);
console.log(avion);
avion.marca = "Airbus";
console.log(avion);
console.log(avion.marca);


let rectangulo = new Object();
rectangulo.largo = 4;
rectangulo.ancho = 3;
console.log(rectangulo); 

/* var  notebook  =  new  Object();
notebook.make  =  'Dell';
notebook.processor = 'I7';
 */

let notebook = {
    make: 'Dell',
    processor: 'I7'
};

notebook.processor = 'I9';
notebook['make'] = 'HP';
console.log(notebook);

/* aplicando metodos a los objetos */
let vaca = new Object();

vaca.sonido = function() {
    console.log("muuuu");
};

console.log(vaca);
console.log(vaca.sonido())
console.log("ERRRR");

/* Ejercicio propuesto
var gato = new Object();
gato.sonido = function (){
  console.log("miau");
};
gato.sonido(); */

let gato = {
    nombre: "Lucifer",
    raza: "Gato X",
    sonido: function() {
        console.log("miau"); 
    },
};
console.log(gato);
gato.sonido();
console.log(gato.nombre);


/* 
Utilizando la sintaxis new Object, crea el 
objeto  estudiante  con  las  propiedades 
nombre y edad, siendo los valores “Juan” y 
“35”  respectivamente  para  cada 
propiedad.

Utilizando la sintaxis new Object crea el objeto con el nombre de estudiante, agregando el 
método hablar que muestre en pantalla "Estoy aprendiendo objetos con JS" 
*/

let estudiante = new Object();
estudiante.nombre = "Juan";
estudiante.edad = 35;
estudiante.hablar = function() {
    console.log("Estoy aprendiendo objetos con JS");
};
console.log(estudiante);
estudiante.hablar();

/* trabajando con el operador this */

let nombre = "Juan";

let persona = new Object();
persona.nombre = "Camila";
persona.edad = 30;
persona.mensaje = function() {
    console.log(`Hola, mi nombre es: ${this.nombre} y la edad es: ${this.edad}`);
}

console.log(persona);
persona.mensaje();

/* ---------------------------- */
var notebook2 = new Object();
notebook2.marca = "Dell";
notebook2.obtener_informacion = function(){
     console.log("Computador marca " + this.marca);
}
notebook2.obtener_informacion();

/* funcion constructora para POO en ES5 */

function Estudiante(x,y){
    this.nombre = x;
    this.apellido = y;
    this.mensaje = function(){
        console.log(`Hola, mi nombre es: ${this.nombre} y el apellido es: ${this.apellido}`);
    }
}

let estudiante1 = new Estudiante("Juan","Duran");
console.log(estudiante1);
let estudiante2 = new Estudiante("Camila","Perez");
console.log(estudiante2);
let estudiante3 = new Estudiante("Carla","Gomez");
console.log(estudiante3);
estudiante2.mensaje();
estudiante1.mensaje();
estudiante3.mensaje();


/* agregando metodos mediante prototipos (prototype) */

function Usuario(nombreUsuario,apellidoUsuario) {
    this.nombre = nombreUsuario;
    this.apellido = apellidoUsuario;
    this.mensaje = function() {
        console.log(`El apellido es: ${this.apellido}`);
    }
}

let usuario1 = new Usuario("Juan","Duran");
let usuario2 = new Usuario("Camila","Perez");

Usuario.prototype.saludos = function() {
    console.log(`Hola, mi nombre es: ${this.nombre}`);
}

let usuario3 = new Usuario("Carlos","Gomez");

usuario1.saludos();
usuario1.mensaje();
usuario2.saludos();
usuario2.mensaje();
usuario3.saludos();
usuario3.mensaje();
//-----------------------------

function Jugador(nombre){
    this.nombre = nombre;
    this.puntos = 0;
}

Jugador.prototype.agregarPuntos = function(){
    this.puntos += 100;
}

var jugador1 = new Jugador('Francisca');
var jugador2 = new Jugador('Camilo');

jugador1.agregarPuntos();
jugador1.agregarPuntos();
jugador1.agregarPuntos();
jugador1.agregarPuntos();
jugador2.agregarPuntos();
console.log(jugador1);
console.log(jugador2);

/* Crear un programa de arquitectura que permita crear cuadrados para dibujar las bases de una 
casa, por ende, necesitaríamos al menos saber el valor de uno de los lados del cuadrado. Necesitamos saber cuánto espacio ocupará nuestra casa y cuánto material necesitamos para 
construirla. */

function Cuadrado(lado){
    this.lado = lado;
}

Cuadrado.prototype.area = function(){
    return this.lado * this.lado;
}

Cuadrado.prototype.perimetro = function(){
    return this.lado * 4;
}

let casa1 = new Cuadrado(10);
let casa2 = new Cuadrado(20);
console.log(casa1.area());
console.log(casa1.perimetro());
console.log(casa2.area());
console.log(casa2.perimetro());

/* encapsulamiento con ES5 */

function Estudiante(nombreEstudiante){
    this.nombre = nombreEstudiante;
    Object.defineProperty(this, 'nombre', {
        value: nombreEstudiante
    })
}

let estudiante4 = new Estudiante("Juan");
console.log(estudiante4);
estudiante4.nombre = "Camila";
console.log(estudiante4);

/* trabajando con get y set en un objeto */

function Vehiculo(marca){
    let _marca = marca;

    Object.defineProperty(this,'marca',{
        get: function(){
            return _marca;
        }        
    });

    Object.defineProperty(this, 'setMarca', {
        set: function(marca){
            _marca = marca;
        }
    })
}

let vehiculo1 = new Vehiculo("Toyota");
console.log(vehiculo1.marca);
let vehiculo2 = new Vehiculo("Fiat");
console.log(vehiculo2.marca);
vehiculo1.setMarca = "Ford";
console.log(vehiculo1.marca);



/* Trabajando con UML y Cardinalidad */

function Persona(nombre, mascota){
    this.nombre = nombre;
    this.mascota = mascota;
}

function Mascota(nombre){
    this.nombre = nombre;
}

let mascota1 = new Mascota("Pepe");
let persona1 = new Persona("Juan", mascota1);

console.log(persona1);
console.log(persona1.mascota.nombre);

/* uml cardinalidad n */

function Persona(nombre, redSocial){
    this.nombre = nombre;
    this.redSocial = redSocial || [];
}

function RedSocial(nombre, id){
    this.nombre = nombre;
    this.id = id;
}

let red1 = new RedSocial("Facebook", "123456789");
let red2 = new RedSocial("Twitter", "987654321");
let red3 = new RedSocial("Instagram", "123456789");

let persona1 = new Persona("Juan", [red1, red2, red3]);
console.log(persona1);

