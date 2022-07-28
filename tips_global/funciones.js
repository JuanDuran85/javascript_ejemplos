/*

Ejemplos, trucos y tips para trabajar con distintas funciones en JavaScript o ejemplos que utilicen funciones para generar una solucion.

*/

// ----------------------------------------------------------------------------------------
//  JavaScript functions in 4 ways
// ----------------------------------------------------------------------------------------

// Opcion 1 - Default function declaration
function rectangleDefault(w,h){
    return w*h;
}

// Opcion 2 - Function expression
const rectangleExpression = function(w,h){
    return w*h;
}

// Opcion 3 - Arrow function Expression
const rectangleArrow = (w,h) => {
    return w*h;
}

// Opcion 4 - Concise Function Arrow Expression
const rectangleArrowConcise = (w,h) => w*h;

// ----------------------------------------------------------------------------------------


console.log('-----------------------------------------------------------------------------------------');

// ----------------------------------------------------------------------------------------
//  Reversing a String with function - Example One using split and reverse
// ----------------------------------------------------------------------------------------

function reverseString(inputString) {
    return inputString.split("").reverse().join("");
}

console.log(reverseString("Ejemplo de string"));

// ----------------------------------------------------------------------------------------


console.log('-----------------------------------------------------------------------------------------');

// ----------------------------------------------------------------------------------------
// Reversing a String with function - Example two using spred and reverse
// ----------------------------------------------------------------------------------------

function reverseStringTwo(inputString) {
    return [...inputString].reverse().join(""); 
}

console.log(reverseStringTwo("Ejemplo de string"));
//-----------------------------------------------------------------------------------------

console.log('-----------------------------------------------------------------------------------------');

// ----------------------------------------------------------------------------------------
// Capitalize first letter of a string in a function
// ----------------------------------------------------------------------------------------

function capitalizeFirstLetter(inputString) {
    return inputString.charAt(0).toUpperCase() + inputString.slice(1); 
}

console.log(capitalizeFirstLetter("ejemplo de string a capitalizar en la primera letra"));
//-----------------------------------------------------------------------------------------

console.log('-----------------------------------------------------------------------------------------');

// ----------------------------------------------------------------------------------------
// Using rest operator in the argument of a function. When using rest arguments, you are collapsing all remaining arguments of a function into one array. Rest parameters have to be at the last argument. This is because it collects all remaining/excess arguments into an array.
// ----------------------------------------------------------------------------------------

function eatFood(...fruits) {
    const [first, second] = fruits;
    console.log(`First fruit: ${first}`);
    console.log(`Second fruit: ${second}`);
}

eatFood("Apple", "Orange");
//-----------------------------------------------------------------------------------------

console.log('-----------------------------------------------------------------------------------------');

// ----------------------------------------------------------------------------------------
// Usando funciones del tipo flecha como "Helpers" para retornar un valor en especifico con reduce
// ----------------------------------------------------------------------------------------

const getAccByPropHelper = (prop, arrayTotal = [], ) => arrayTotal.reduce((acc,item) => acc + item[prop], 0);

const imputacionesFacturas = [
    {id: '233322', cantidad: 4},
    {id: '233323', cantidad: 6},
    {id: '233324', cantidad: 2},
    {id: '233325', cantidad: 9}
];

const factura = {
    id: '565433',
    productos: [
        {descripcion: 'Producto 1', base: 343},
        {descripcion: 'Producto 2', base: 67},
    ]
};

const sumatoriaImputaciones = getAccByPropHelper('cantidad',imputacionesFacturas);
console.log({sumatoriaImputaciones});
const sumatoriaProductos = getAccByPropHelper('base',factura.productos);
console.log({sumatoriaProductos});
//-----------------------------------------------------------------------------------------

console.log('-----------------------------------------------------------------------------------------');

// ----------------------------------------------------------------------------------------
// Usando Closures: Una funcion closure envuelve (close over) una funcion exterior, manteniendo el acceso a su ambito, aun ejecutandose desde otro contexto. Por lo que se puede retornar la referencia de una funcion interna y utilizarla en otro contexto.
// ----------------------------------------------------------------------------------------

function exteriorFunction(nombre) {
    const nombreUser = nombre;

    function internaFunction(){
        console.log(`Hola ${nombreUser}`);
    }

    return internaFunction;
}

const closureFunctions = exteriorFunction("Maria");
closureFunctions();
//-----------------------------------------------------------------------------------------

console.log('-----------------------------------------------------------------------------------------');

// ----------------------------------------------------------------------------------------
// Para saber cuantos parametros recibe una funcion, se puede utilizar el length, pero si la funcion posee parametros del tipo rest, el length no lo totaliza.
// ----------------------------------------------------------------------------------------
const functionBasic = (param1, param2, param3) => param1 + param2 + param3;
console.log(`La cantidad de parametros que recibe la funcion es: ${functionBasic.length}`);

const functionWithRest = (param1, param2, ...rest) => param1 + param2 + rest.reduce((acc,item) => acc + item, 0);
console.log(`La cantidad de parametros que recibe la funcion es: ${functionWithRest.length}`);
//-----------------------------------------------------------------------------------------

console.log('-----------------------------------------------------------------------------------------');

// ----------------------------------------------------------------------------------------
// En las funciones, como en la de tipo flecha, podemos pasar los argumentos como un objeto, lo cual, permite un codigo mas descriptivo.
// ----------------------------------------------------------------------------------------
const createUserFinal = ({userName, isAdmin, mail}) => console.log(`Usuario creado con: ${userName} ${isAdmin} ${mail}`);

createUserFinal({userName: "Maria", isAdmin: true, mail: "maria@correo.com"});
//-----------------------------------------------------------------------------------------

console.log('-----------------------------------------------------------------------------------------');

// ----------------------------------------------------------------------------------------
// 
// ----------------------------------------------------------------------------------------


//-----------------------------------------------------------------------------------------