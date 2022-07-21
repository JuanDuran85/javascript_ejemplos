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
// Using spread operator in the argument of a function
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