/* Trabajando con herencia en ES6 */

/* Crear una clase padre con el nombre de “Vehículo” en
conjunto con los atributos “marca”, “color”, “matrícula”,
además de las tres clases hijas “coche”, “moto” y “bus”,
heredando los atributos de la clase vehículo. Finalmente,
instanciar cada una de las clases hijas y mostrar una de
las propiedades para cada una de ellas. */

// Clase padre
class Vehiculo {
    constructor(marca, color, matricula){
        this.marca = marca;
        this.color = color;
        this.matricula = matricula;
    }

    acelerar(velocidad){
        return `El vehiculo tiene una velocidad actual de: ${velocidad}`
    }
}

let vehiculoUno = new Vehiculo("Toyota","negro","XDF-456");
console.log(vehiculoUno);
console.log(vehiculoUno.acelerar("100Km"));

// Clases hijas que hereda de la clase padre Vehiculo

class Coche extends Vehiculo {
    constructor(marca, color, matricula, puertas){
        super(marca, color, matricula);
        this.puertas = puertas;
    }
}

let cocheUno = new Coche("Ford","Verde","SDE-464", 4);
console.log(cocheUno);
console.log(cocheUno.acelerar("50,5Km/H"))

class Bus extends Vehiculo {
    constructor(marca, color, matricula){
        super(marca, color, matricula)
    }
}

let busUno = new Bus("Mercedez Bent","Amarillo","FGRF-45FTG");
console.log(busUno);

/* Una institución de educación solicita que se cree un sistema para centralizar la información
del personal que trabaja en ella, como es el caso del personal administrativo, docente y
obrero */

// clase padre
class Personal {
    constructor(nombre, departamento, tipo, activo){
        this.nombre = nombre;
        this.departamento = departamento;
        this.tipo = tipo;
        this.activo = activo;
    }
}

// clases hijas
class Administrativo extends Personal {
    constructor(nombre, departamento, tipo, activo){
        super(nombre, departamento, tipo, activo)
    }
}

class Docente extends Personal {
    constructor(nombre, departamento, tipo, activo){
        super(nombre, departamento, tipo, activo)
    }
}

class Obrero extends Personal {}

// creando instancias de las clases padres e hijas
let personalUno = new Personal("Diamond","Markets","Administrator",true);
let administrativoUno = new Administrativo("Providenci","Implementation","Producer",false);
let docenteUno = new Docente("Maeve","Configuration","Consultant",true);
let obreroUno = new Obrero("Carroll","Branding","Coordinator",false);

console.log(personalUno);
console.log(administrativoUno);
console.log(docenteUno);
console.log(obreroUno);


console.log("--------------------------------------------------");