/*

Ejemplos, trucos y tips para trabajar con tipos de datos primitivos en JavaScript

*/

// ----------------------------------------------------------------------------------------
// Quick float to integer conversion. if you want to convert a float to an integer, you can use Math.floor, Math.ceil, or Math.round. But, there is also a faster way to truncate a float to an integer using '|', the bitwise OR operator. For example:
// ----------------------------------------------------------------------------------------
console.debug(23.534545 | 0); // 23
console.debug(23.0233 | 0); // 23
console.debug(-27.9001 | 0); // -27
console.debug(27.99992 | 0); // 27

// ----------------------------------------------------------------------------------------

console.debug(
  "-----------------------------------------------------------------------------------------"
);

// ----------------------------------------------------------------------------------------
// Convertir un numero a hexadecimal o binario / Convert Number to Hex or Binary
// ----------------------------------------------------------------------------------------
const numberToConvert = 36;
console.debug({ numberToConvert });
console.debug(numberToConvert.toString(2)); // 1100011
console.debug(numberToConvert.toString(16)); // 43

// ----------------------------------------------------------------------------------------

console.debug(
  "-----------------------------------------------------------------------------------------"
);

// ----------------------------------------------------------------------------------------
// Existen dos posibles maneras de redondear un numero hacia abajo, la primera es usando Math.round, utilizando el operador ~~, el cual es una operacion bitwise OR.
// ----------------------------------------------------------------------------------------

// Opcion 1: Math.floor (long)
const numeroUno = Math.floor(6.8);
console.debug(numeroUno); // 6

//Opcion 2: ~~ (short)
const numeroDos = ~~6.8;
console.debug(numeroDos); // 6

// ----------------------------------------------------------------------------------------

console.debug(
  "-----------------------------------------------------------------------------------------"
);

// ----------------------------------------------------------------------------------------
// Se pueden declarar varias variables al mismo tiempo utilizando arreglo
// ----------------------------------------------------------------------------------------

let [a, b, c] = [1, 2, 3];
console.debug(a, b, c); // 1 2 3

// ----------------------------------------------------------------------------------------

console.debug(
  "-----------------------------------------------------------------------------------------"
);

// ----------------------------------------------------------------------------------------
// Se puede convertir un dato tipo number a tipo string, utilizando la clase String
// ----------------------------------------------------------------------------------------
console.debug(`Type of ${100}: ${typeof 100}`); // Type of 100: number
console.debug(`Type of ${String(100)}: ${typeof String(100)}`); // Type of 100: string
// ----------------------------------------------------------------------------------------

console.debug(
  "-----------------------------------------------------------------------------------------"
);

// ----------------------------------------------------------------------------------------
// Se puede convertir un dato tipo string solo con numeros al tipo number, utilizando el operador de suma '+'
// ----------------------------------------------------------------------------------------
const quantity = +"10";
const price = +"57.877";
console.debug(`Type of ${quantity}: ${typeof quantity}`); // Type of 10: number
console.debug(`Type of ${price}: ${typeof price}`); // Type of 57.877: number
// ----------------------------------------------------------------------------------------

console.debug(
  "-----------------------------------------------------------------------------------------"
);

// ----------------------------------------------------------------------------------------
// Se puede verificar si existe algun tipo de dato en una variable mediante la clase Boolean o con el operador !!. Ojo: Retorna true cuando es un arreglo u objeto vacio.
// ----------------------------------------------------------------------------------------

const inputOne = 100;

// Opcion 1 de verificacion:
const outputOne = Boolean(inputOne);
console.debug(outputOne); // true

// Opcion 2 de varificacion:
const outputTwo = !!inputOne;
console.debug(outputTwo); // true

// ----------------------------------------------------------------------------------------

console.debug(
  "-----------------------------------------------------------------------------------------"
);

// ----------------------------------------------------------------------------------------
// Se puede invertir o pasar un valor de una variable a otra utilizado arreglos
// ----------------------------------------------------------------------------------------
let variableUno = "JavaScript";
let variableDos = "Python";

console.debug({ variableUno });
console.debug({ variableDos });

[variableUno, variableDos] = [variableDos, variableUno];

console.debug({ variableUno });
console.debug({ variableDos });

// ----------------------------------------------------------------------------------------

console.debug(
  "-----------------------------------------------------------------------------------------"
);

// ----------------------------------------------------------------------------------------
// Existen dos maneras de elevar un nuevo a un valor x. La primera puede ser utilizando la libreria Math con el metodo pow, la segunda puede ser la utilizacion del operador **.
// ----------------------------------------------------------------------------------------

//opcion 1: Math.pow (long)
console.debug(Math.pow(2, 3)); // 8

//opcion 2: ** (short)
console.debug(2 ** 3); // 8
// ----------------------------------------------------------------------------------------

console.debug(
  "-----------------------------------------------------------------------------------------"
);

// ----------------------------------------------------------------------------------------
// Existen dos maneras de repetir un string n cantidad de veces, la primera es las larga y se debe utilizar un ciclo for. la segunda es usando el metodo reapeat de los string.
// ----------------------------------------------------------------------------------------

//opcion 1: Ya no se debe usar
let stringUno = "";
for (let i = 0; i < 5; i++) {
  stringUno += "Texto X ";
}
console.debug(stringUno); // Texto X Texto X Texto X Texto X

//opcion 2: la ideal usando repeat
const stringDos = "Texto Y ".repeat(5);
console.debug(stringDos); // Texto Y Texto Y Texto Y Texto Y
// ----------------------------------------------------------------------------------------

console.debug(
  "-----------------------------------------------------------------------------------------"
);

// ----------------------------------------------------------------------------------------
// Existen distintas maneras de comprobar si las propiedades de un objeto poseen valores, una de ellas es ir comprobando si existe la propiedad, y si existe, comprobar si tiene valor. La otra es usando el operador ?.
// ----------------------------------------------------------------------------------------

const area = {
  dimension: {
    width: 10,
  },
};

const product = {
  type: {
    name: "Computer",
  },
};

//opcion 1: Ya no se debe usar
const width = area && area.dimension && area.dimension.width;
console.debug(width); // 10

//opcion 2: la ideal y se debe usar en al actualidad
const widthTwo = area?.dimension?.width;
console.debug(widthTwo); // 10
const nameNew = product?.type?.subname;
console.debug(nameNew); // undefined

// ----------------------------------------------------------------------------------------

console.debug(
  "-----------------------------------------------------------------------------------------"
);

// ----------------------------------------------------------------------------------------
// debugical OR assignment (||=): The debugical OR assignment (x ||= y) operator only assigns if x is falsy.
// ----------------------------------------------------------------------------------------
// The debugical OR operator short-circuits: the second operand is only evaluated if the first operand doesn't already determine the result.

const objectOne = {
  tiempo: 0,
  texto: "",
};

objectOne.tiempo ||= 340;
objectOne.texto ||= "No tiene texto";
objectOne.lugar ||= "No tiene lugar";
console.debug(objectOne); // { tiempo: 340, texto: "No tiene texto", lugar: "No tiene lugar" }
//-----------------------------------------------------------------------------------------

console.debug(
  "-----------------------------------------------------------------------------------------"
);

// ----------------------------------------------------------------------------------------
// The debugical nullish assignment (x ??= y) operator only assigns if x is nullish (null or undefined). This works only with null and undefined values.
// ----------------------------------------------------------------------------------------
const objetoTwo = {
  tiempo: 0,
  texto: "",
};

objetoTwo.tiempo ??= 30;
objetoTwo.texto ??= "No tiene texto";
objetoTwo.lugar ??= "No tiene lugar";
console.debug(objetoTwo); // { tiempo: 0, texto: '', lugar: 'No tiene lugar' }

//-----------------------------------------------------------------------------------------

console.debug(
  "-----------------------------------------------------------------------------------------"
);

// ----------------------------------------------------------------------------------------
// Se puede utilizar el operador ?? (Nullish coalescing operator (??)*) para comprobar si una variable existe o no y mandar a ejecutar una funcion cualquiera.
// *The nullish coalescing operator (??) is a debugical operator that returns its right-hand side operand when its left-hand side operand is null or undefined, and otherwise returns its left-hand side operand.
// ----------------------------------------------------------------------------------------
console.debug("Using the nullish coalescing operator (??)");

const valorAVerificar1 = [undefined, null, 0, false, "", NaN, true, [], {}];

function ejecutada(valorIN) {
  console.debug(`Ejecutada la funcion porque el valor es: ${valorIN}`);
}

//Si se desea evaluar distintos valores a parte de null o undefined, se puede utilizar if/else.

for (const valor of valorAVerificar1) {
  if (valor) {
    ejecutada(valor);
  } else {
    console.debug(
      `No se ejecuta la funcion porque el valor es ${JSON.stringify(valor)}`
    );
  }
}

// Hoy en dia se puede utilizar el operador ?? para verificar si existe una variable, es decir, si la variable es null o undefined, ejecuta la funcion.
console.debug("\n Operador ?? \n");

for (const valor of valorAVerificar1) {
  console.debug(valor);
  valor ?? ejecutada(valor);
}

// The nullish coalescing operator (??) assign a default value if the left-hand or variable is null or undefined (not set).
const priceArticule = 0;
let priceArticuleTwo;
const defaultPriceOne = priceArticule ?? 120;
const defaultPriceTwo = priceArticuleTwo ?? 647;
console.debug({ defaultPriceOne });
console.debug({ defaultPriceTwo });
//-----------------------------------------------------------------------------------------

console.debug(
  "-----------------------------------------------------------------------------------------"
);

// ----------------------------------------------------------------------------------------
// Hoy en dia se puede utilizar el operador || para verificar si la variable tiene un valor no permitido (false, null, undefined, 0, "", NaN) y asi mandar a ejecutar la funcion. Esto mientras no se niegue la variable en la comparacion.
// ----------------------------------------------------------------------------------------

console.debug("\n Operador || \n");

for (const valor of valorAVerificar1) {
  console.debug(valor);
  valor || ejecutada(valor);
}
//-----------------------------------------------------------------------------------------

console.debug(
  "-----------------------------------------------------------------------------------------"
);

// ----------------------------------------------------------------------------------------
// Assigning default value: The OR '||' short circuit operator evaluates an expresion from left to right until it finds a truthy value else it returns the last operand value.
// ----------------------------------------------------------------------------------------

console.debug("\n || operator \n");
for (const valor of valorAVerificar1) {
  console.debug(valor);
  const arrayInit = valor || [];
  console.debug({ arrayInit });
}
//-----------------------------------------------------------------------------------------

console.debug(
  "-----------------------------------------------------------------------------------------"
);

// ----------------------------------------------------------------------------------------
// Hoy en dia se puede utilizar el operador && para verificar si la variable tiene un valor permitido (true) y asi mandar a ejecutar la funcion. Esto mientras no se niegue la variable en la comparacion.
// ----------------------------------------------------------------------------------------

console.debug("\n Operador && \n");

for (const valor of valorAVerificar1) {
  console.debug(valor);
  valor && ejecutada(valor);
}
//-----------------------------------------------------------------------------------------

console.debug(
  "-----------------------------------------------------------------------------------------"
);

// ----------------------------------------------------------------------------------------
// The debugical AND assignment (x &&= y) operator only assigns if x is truthy.
// ----------------------------------------------------------------------------------------

// Before you can use if/else to assign a value to a variable, you must first check if the variable has a value.
let xOneValue = "Valor permitido";
console.debug({ xOneValue });
const newValueAssignment = "Nuevo valor asignado";
if (xOneValue) {
  xOneValue = newValueAssignment;
}
console.debug({ xOneValue });

// After you can use the debugical AND assignment
let xOneValueNew = "Valor Permitido";
let otherValue = null;
const newValueAssignmentTwo = "Nuevo valor asignado";
console.debug({ xOneValueNew });
console.debug({ otherValue });
xOneValueNew &&= newValueAssignmentTwo;
console.debug({ xOneValueNew });
otherValue &&= newValueAssignmentTwo;
console.debug({ otherValue });

// ----------------------------------------------------------------------------------------

console.debug(
  "-----------------------------------------------------------------------------------------"
);

// ----------------------------------------------------------------------------------------
// Array to Object conversion [] => {} in two diferent ways.
// ----------------------------------------------------------------------------------------

console.debug("1. Clasical Method - Amateur");
const arrayToConvert = ["Javascript", "Java", "Python", "C++"];
const objectConverted = {};

for (let index = 0; index < arrayToConvert.length; index++) {
  if (arrayToConvert[index] !== undefined) {
    objectConverted[index] = arrayToConvert[index];
  }
}

console.debug({ objectConverted });
console.debug("-----------------------------");
console.debug("2. New Method - Pro");
const newObjectConverted = { ...arrayToConvert };
console.debug({ newObjectConverted });

//-----------------------------------------------------------------------------------------

console.debug(
  "-----------------------------------------------------------------------------------------"
);
//-----------------------------------------------------------------------------------------
console.debug(
  "-----------------------------------------------------------------------------------------"
);

// ----------------------------------------------------------------------------------------
// If you need to calculate the total in an array with JS
// ----------------------------------------------------------------------------------------
const arrayWithValuesToAmount = [3, 6, 7, 13, 5, 9];
console.debug({ arrayWithValuesToAmount });

console.debug("1. Using for...of loop");
let totalAmountOne = 0;
for (const result of arrayWithValuesToAmount) {
  totalAmountOne += result;
}
console.debug({ totalAmountOne });

console.debug("-----------------------------");
console.debug("2. Using forEach");
let totalAmountTwo = 0;
arrayWithValuesToAmount.forEach((result) => (totalAmountTwo += result));
console.debug({ totalAmountTwo });

console.debug("-----------------------------");
console.debug("2. Using reduce");
const totalAmountThree = arrayWithValuesToAmount.reduce(
  (previousValue, currentValue) => previousValue + currentValue
);
console.debug({ totalAmountThree });

//-----------------------------------------------------------------------------------------

console.debug(
  "-----------------------------------------------------------------------------------------"
);
//-----------------------------------------------------------------------------------------
console.debug(
  "-----------------------------------------------------------------------------------------"
);

// ----------------------------------------------------------------------------------------
// Convert to Boolean: Besides the regular boolean values true and false, JavaScript also treats all other values as either "truthy" or "falsy"
// ----------------------------------------------------------------------------------------
const isTrueValue = !0;
const isFalseValue = !1;
const alsoFalseValue = !!0;

console.debug({ isTrueValue });
console.debug(typeof isTrueValue);
console.debug({ isFalseValue });
console.debug(typeof isFalseValue);
console.debug({ alsoFalseValue });
console.debug(typeof alsoFalseValue);
//-----------------------------------------------------------------------------------------

console.debug(
  "-----------------------------------------------------------------------------------------"
);
//-----------------------------------------------------------------------------------------
console.debug(
  "-----------------------------------------------------------------------------------------"
);

// ----------------------------------------------------------------------------------------
// Convertir un decimal a entero: Hay varias maneras de devolver la parte entera de un numero decimal pero tambien puedes usar el operador bitwise. Otra manera es usando el bitwise OR operador y adjuntando el 0.
// El operador Bitwise solo operan sobre enteros por lo que covierten cualquier numero en un entero de 32 bits.
// ----------------------------------------------------------------------------------------
const numberOne = 146.764;
const numberTwo = ~~numberOne;
console.debug({ numberOne });
console.debug({ numberTwo });

const strNumber = "684.607";
const onlyNumber = ~~strNumber;
console.debug({ strNumber });
console.debug({ onlyNumber });

const numberConverter = 4732.794 | 0;
console.debug({ numberConverter });

const strNumberConverter = "67011.494" | 0;
console.debug({ strNumberConverter });

const comparation = ~~7.89 === 7;
console.debug({ comparation });

//-----------------------------------------------------------------------------------------

console.debug(
  "-----------------------------------------------------------------------------------------"
);
//-----------------------------------------------------------------------------------------
console.debug(
  "-----------------------------------------------------------------------------------------"
);

// ----------------------------------------------------------------------------------------
// Se puede usar el operador AND debugico para evitar el uso de sentencias if innecesarias, permitiendo comprbar una condicion primeramente para poder ejecutar por ejemplo una funcion
// ----------------------------------------------------------------------------------------
const getAuth = () => true;

const startSession = () => console.debug("Inicio de sesion correcto");

getAuth() && startSession();
//-----------------------------------------------------------------------------------------

console.debug(
  "-----------------------------------------------------------------------------------------"
);
//-----------------------------------------------------------------------------------------
console.debug(
  "-----------------------------------------------------------------------------------------"
);

// ----------------------------------------------------------------------------------------
// Separador numerico: Se puede utilizar el simbolo "_" como separador numerico, lo que facilita contar el numero de ceros en una cifra cualquiera, agrupando por miles. Pero imprimiendo el numero correctamente.
// Igualmente se puede usar el separador numerico "_" para agrupar numeros enteros hexadecimales por byte, guardando el numero hexadecimal(base 16) como decimal(base 10).
// ----------------------------------------------------------------------------------------
const numeroMillones = 100_000_000;
console.debug({ numeroMillones });
const hexadecimalNumber = 0x0a_0a;
console.debug({ hexadecimalNumber });
//-----------------------------------------------------------------------------------------

console.debug(
  "-----------------------------------------------------------------------------------------"
);
//-----------------------------------------------------------------------------------------
console.debug(
  "-----------------------------------------------------------------------------------------"
);

// ----------------------------------------------------------------------------------------
// debugical Assignment Operators: ||= , &&= and ??=
// ----------------------------------------------------------------------------------------
console.debug("Operator ||= \n");
// In tje example. the ||= operator will check if the songsCount is false (0), if false, the songsCount will be set to the new value indicated.
const myListOfMusic = {
  songsCount: 0,
  author: null,
  year: undefined,
  format: false,
  songs: [],
  awards: 12,
};
myListOfMusic.songsCount ||= 100;
myListOfMusic.author ||= "Juan";
myListOfMusic.year ||= 2020;
myListOfMusic.format ||= "MP3";
myListOfMusic.awards ||= 30;
console.debug({ myListOfMusic });

console.debug("Operator ??= \n");
// In the example, the ??= operator will check if the lastname is null or undefined... if true, the lastname will not be set.
const userDetails = {
  firstName: "Juan",
  age: 20,
  city: null,
  country: undefined,
  type: false,
  permissions: 0,
};
userDetails.lastname ??= "Perez";
userDetails.firstName ??= "Pedro";
userDetails.age ??= 30;
userDetails.city ??= "Caracas";
userDetails.country ??= "Venezuela";
userDetails.type ??= "Admin";
userDetails.permissions ??= 10;
console.debug({ userDetails });

console.debug("Operator &&= \n");
// In the example, the &&= operator will check if the filesCount is true, if true, the filesCount will be set to the new value indicated.
const myFiles = {
  filesCount: 100,
  files: [],
  url: null,
  path: "No asignado",
  os: undefined,
  size: false,
};
myFiles.filesCount &&= 200;
myFiles.url &&= "https://www.js.com";
myFiles.path &&= "C:\\Users\\Pedro\\Desktop\\";
myFiles.os &&= "Linux";
myFiles.size &&= "2GB";
console.debug({ myFiles });
//-----------------------------------------------------------------------------------------

console.debug(
  "-----------------------------------------------------------------------------------------"
);
//-----------------------------------------------------------------------------------------
console.debug(
  "-----------------------------------------------------------------------------------------"
);

// ----------------------------------------------------------------------------------------
// Se puede remover el ultimo digito de un numero entero de diversas maneras implementando arreglos por ejemplo. Pero existe una manera mas eficiente de eliminar el ultimo digito de un numero entero.
// ----------------------------------------------------------------------------------------
console.debug("Remove last digits \n");
// forma larga
const numero = 123456;
const numeroFinal = numero.toString().split("");
delete numeroFinal[numeroFinal.length - 1];
const resultFinal = Number(numeroFinal.join(""));
console.debug({ resultFinal });
console.debug(typeof resultFinal);

// forma corta
const resultNumberShort = (numero / 10) | 0;
console.debug({ resultNumberShort });
console.debug(typeof resultNumberShort);
//-----------------------------------------------------------------------------------------

console.debug(
  "-----------------------------------------------------------------------------------------"
);
//-----------------------------------------------------------------------------------------
console.debug(
  "-----------------------------------------------------------------------------------------"
);

// ----------------------------------------------------------------------------------------
// The stringify method takes two optional parameters: a replacer function, which you can use to filter the JSON that is displayed, and a space value. The space value takes an integer for the number of spaces you want or a string (such as '\t' to insert tabs), and it can make it a lot easier to read fetched JSON data.
// ----------------------------------------------------------------------------------------
console.debug("Format JSON code");
const objectToJson = {
  name: "Juan",
  age: 20,
  city: "Caracas",
  country: "Venezuela",
  type: "Admin",
};
console.debug(JSON.stringify(objectToJson, null, "\t"));
//-----------------------------------------------------------------------------------------

console.debug(
  "-----------------------------------------------------------------------------------------"
);
//-----------------------------------------------------------------------------------------
console.debug(
  "-----------------------------------------------------------------------------------------"
);

// ----------------------------------------------------------------------------------------
// Creando Enum con JavaScript Vanilla y la utilizacion de objetos literales
// ----------------------------------------------------------------------------------------
console.debug("Enum en JavaScript");
const Status = Object.freeze({
  OPEN: 1,
  CLOSE: 2,
  PENDING: 3,
  UNKNOWN: 4,
});

const statusSystem = Status.UNKNOWN;
console.debug({ statusSystem });

//-----------------------------------------------------------------------------------------

console.debug(
  "-----------------------------------------------------------------------------------------"
);
//-----------------------------------------------------------------------------------------
console.debug(
  "-----------------------------------------------------------------------------------------"
);

// ----------------------------------------------------------------------------------------
// How do you check Nullish values? The modern and most effective way is doing it using Nullish Coalescing Operator ??
// ----------------------------------------------------------------------------------------
console.debug("Nullish Check");

// Traditional way / Trick to Avoid
const inputTwo = null;

const functionToDo = () => console.debug("Function to Do Check");

if (inputTwo === null || inputTwo === undefined) {
  functionToDo();
}
console.debug({ inputTwo });

// Modern and more effective way using Nullish Coalescing Operator??
inputTwo ?? functionToDo();
console.debug({ inputTwo });

//-----------------------------------------------------------------------------------------

console.debug(
  "-----------------------------------------------------------------------------------------"
);
//-----------------------------------------------------------------------------------------
console.debug(
  "-----------------------------------------------------------------------------------------"
);
