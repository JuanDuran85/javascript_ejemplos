/* Patrones funcionales:  */

// patron por composicion de funciones

/* Funcion para encontrar niños menores a 12 años y solo mostrar el primero.
Este codigo sera llevado a uno nuevo para dejar lo imperativo mediante composicion de funciones, permitiendo desacoplar el codigo para que sea reutilizable

const users = [
    {name: 'John', age: 20, lastname: 'Doe'},
    {name: 'Anna', age: 12, lastname: 'Smith'},
    {name: 'Peter', age: 42, lastname: 'Jones'},
    {name: 'Maria', age: 63, lastname: 'Miller'},
    {name: 'Susan', age: 4, lastname: 'Brown'},
];

const getChildren = data => {
    const children = data.filter(user => user.age < 12);
    const firstChild = children[0];
    const child = {
        fullName: `${firstChild.name} ${firstChild.lastname}`,
        age: firstChild.age
    }

    return `${child.fullName} is ${child.age} years old`;
}

*/

const users = [
  { name: "John", age: 20, lastname: "Doe" },
  { name: "Anna", age: 12, lastname: "Smith" },
  { name: "Peter", age: 42, lastname: "Jones" },
  { name: "Maria", age: 63, lastname: "Miller" },
  { name: "Susan", age: 4, lastname: "Brown" },
];

// funcion para rastreo de pasos
const trace = (x) => (y) => console.log(x, y);

const pipe =
  (...functions) =>
  (data) =>
    functions.reduce((value, funct) => funct(value), data);

// funcion para filtrar datos sin importar la condicion
const filterData = (predicate) => (data) => data.filter(predicate);

// funcion para obtener el primer elemento de un array
const firstElementInArray = (data) => data[0];

// funcion para formatear
const formatChildren = (data) => ({
  fullName: `${data.name} ${data.lastname}`,
  age: data.age,
});

const childNameLastName = (data) => `${data.fullName} is ${data.age} years old`;

const getChildren = (data) =>
  childNameLastName(
    formatChildren(firstElementInArray(data.filter((user) => user.age < 12)))
  );

const getChildrenTwo = pipe(
  filterData((user) => user.age < 12),
  firstElementInArray,
  formatChildren,
  childNameLastName
);

console.info(getChildren(users));
console.info(getChildrenTwo(users));

/* Composicion sobre herencia */

const dormirFunction = () => console.log(`ZZZzzzz...`);
const saludarFunction = (name) => console.log(`Hola! ${name}`);
const despedirFunction = (name) => console.log(`Adios! ${name}`);

class Persona {
  constructor(name) {
    this.name = name;
  }

  saludar() {
    saludarFunction(this.name);
  }
  despedir() {
    despedirFunction(this.name);
  }
  dormir() {
    dormirFunction();
  }
}

class Robot {
  constructor(name) {
    this.name = name;
  }

  saludar() {
    saludarFunction(this.name);
  }
  despedir() {
    despedirFunction(this.name);
  }
}

const persona = new Persona("Juan");
const robot = new Robot("R2D2");
console.log(persona);
console.log(robot);
persona.despedir();
robot.despedir();