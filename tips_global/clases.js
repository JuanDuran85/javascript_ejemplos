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

    getBasicData() {
        return Persona.#getData(this.nombre, this.edad);
    }

    static #getData(nomStatic,edadStatic) { // metodo static privado
        return `Los datos son: ${nomStatic ? nomStatic : 'No definido'} - ${edadStatic ? edadStatic : 'No definido'}`;
    }
}

const persona = Object.freeze(new Persona(1, 'Juan', 30));
console.log(persona)
persona.id = -1; // no se puede cambiar el id, lo que hace JS es crear un nuevo atributo en al clase
console.log(persona.id);
console.log(persona.mostrar());
console.log(persona.getBasicData());
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
// Comprobando que un metodo es instancia de la clase con instanceof
// ----------------------------------------------------------------------------------------
console.log("Implementando instanceof");
class Animal{
    getName(){
        return 'Animal';
    }
}

class Person {
    getName(){
        return 'Person';
    }
}

const callPersonName = (person) => {
    const isPerson = person instanceof Person;
    console.log(`${person.getName()} es instancia de persona: ${isPerson}`);
}

const personInstance = new Person();
const animalInstance = new Animal();

callPersonName(personInstance);
callPersonName(animalInstance);
//-----------------------------------------------------------------------------------------

console.log('-----------------------------------------------------------------------------------------');

// ----------------------------------------------------------------------------------------
// Private class methods and accesors. The private attributes can be vreated by prepending '#' before attribute. The private methods can be created by prepending '#' before method name. The private methods can be accessed by using '#' before the method. 
// ----------------------------------------------------------------------------------------
console.log("Private class methods and accesors");
class Developer {
    #uniqueStr;
    
    #generateApiKey(){
        this.#uniqueStr = "The Key to use...";
    }

    getApiKey(){
        this.#generateApiKey();
        return this.#uniqueStr;
    }
}

const developer = new Developer();
const developerApiKey = developer.getApiKey();
console.log({developerApiKey});

//-----------------------------------------------------------------------------------------


console.log('-----------------------------------------------------------------------------------------');

// ----------------------------------------------------------------------------------------
// Implement a builder with method chaining. Method chaining is implemented by returning this in each method of the builder.
// ----------------------------------------------------------------------------------------
console.log("method chaining");

class Builder {
  #principalList = [];

  add(value) {
    this.#principalList.push(value);
    return this;
  }

  remove(value) {
    this.#principalList = this.#principalList.filter(
      (currenValue) => currenValue !== value
    );
    return this;
  }

  log() {
    console.log(this.#principalList);
    return this;
  }
}

const builderInstance = new Builder();

builderInstance.add(23).log().add(7).log().remove(7).log();

//-----------------------------------------------------------------------------------------

console.log('-----------------------------------------------------------------------------------------');

// ----------------------------------------------------------------------------------------
// Lazy-loading property pattern in javascript with class.
// ----------------------------------------------------------------------------------------
console.log("Lazy-loading property pattern");

const expensiveOperation = stringIn => stringIn === '' ? '' : expensiveOperation(stringIn.substring(1)) + stringIn.charAt(0); 

class MyClass {
    get data(){
        const actualData = expensiveOperation("texto caulquiera...");
        Object.defineProperty(this, 'data', {
            value: actualData,
            writable: false,
            configurable: false,
            enumerable: false
        });
        return actualData;
    }
}

const newObjectOne = new MyClass();

console.time("Primer llamado");
console.log(newObjectOne.data);
console.timeEnd("Primer llamado");

console.time("Segundo llamado");
console.log(newObjectOne.data);
console.timeEnd("Segundo llamado");

//-----------------------------------------------------------------------------------------

// ----------------------------------------------------------------------------------------
// 
// ----------------------------------------------------------------------------------------

//-----------------------------------------------------------------------------------------