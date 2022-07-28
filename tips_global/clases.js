/*

Ejemplos, trucos y tips para trabajar con clases en JavaScript

*/


// ----------------------------------------------------------------------------------------
// Propiedades y metodos privados
// ----------------------------------------------------------------------------------------

class Persona{
    #id; // propiedad privada
    nombre;
    edad;

    constructor(id, nombre, edad ){
        this.#id = id;
        this.nombre = nombre;
        this.edad = edad;
    }

    #validar() { // metodo privado
        if(this.#id < 0 || this.edad <= 0) throw new Error('El id debe ser mayor que 0');
        console.log('Validado');
        return true;
    }

    mostrar(){
        if (this.#validar()) return `${this.#id} - ${this.nombre} - ${this.edad}`;
    }
}

const persona = new Persona(1, 'Juan', 30);
console.log(persona)
persona.id = -1; // no se puede cambiar el id, lo que hace JS es crear un nuevo atributo en al clase
console.log(persona.id);
console.log(persona.mostrar());
console.log(persona)
//-----------------------------------------------------------------------------------------

console.log('-----------------------------------------------------------------------------------------');

// ----------------------------------------------------------------------------------------
// Creating a static method in a class, to do not extend the built-in methods, create your own utilities instead.
// ----------------------------------------------------------------------------------------
console.log("Static method")
class ArrayUtils {
    static average(listArray){
        return listArray.reduce((acumulator, element) => acumulator + element) / listArray.length;
    }
}

const listArrayToCalcule = [20,12,15,9,20,17];
console.log({listArrayToCalcule});
const averageTotal = ArrayUtils.average(listArrayToCalcule);
console.log({averageTotal});
//-----------------------------------------------------------------------------------------

console.log('-----------------------------------------------------------------------------------------');

// ----------------------------------------------------------------------------------------
// 
// ----------------------------------------------------------------------------------------



//-----------------------------------------------------------------------------------------

console.log('-----------------------------------------------------------------------------------------');

// ----------------------------------------------------------------------------------------
// 
// ----------------------------------------------------------------------------------------



//-----------------------------------------------------------------------------------------