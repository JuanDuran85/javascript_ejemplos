/* Closures */

/* Declarar un función denominada global y dentro de ella mostrar el valor de una variable
declarada fuera de la función. */

let a = 1;

function global() {
  let b = 3;
  console.log("llamado a-1: ", a);
  console.log("llamado b-1: ", b);

  function local() {
    console.log("llamado a-2: ", a);
    console.log("llamado b-2: ", b);
  }

  local();
}

global();
console.log("llamado a-3: ", a);
/* console.log("llamado b-3: ",b); */

/* Closure con ES6 */

const local = () => {
  const variableA = 2;
  console.log(`variableA ${variableA}`);
};

local();
console.log(`variableA ${variableA}`);

const variableB = 2;
const local2 = () => {
  console.log(`variableB ${variableB}`);
};

local2();
console.log(`variableB ${variableB}`);

/* Pasar de ES5 a ES6 */

function crearFuncion() {
  var texto = "Variable dentro de funcion";
  function closure() {
    console.log(texto);
  }
  return closure;
}
var miFuncion = crearFuncion();
miFuncion();

const crearFuncion = () => {
    const texto = "Variable dentro de funcion";
    return () => console.log(texto);
}

miFuncion = crearFuncion();
miFuncion();
console.log(miFuncion)
console.log(crearFuncion)