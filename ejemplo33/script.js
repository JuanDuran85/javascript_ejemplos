// Funciones autoejecutables o IIFE

/* En este caso utilizaremos la sintaxis de ES5,
dentro de la función declarar una variable para
mostrarla dentro y fuera de la IIFE ¿Cuál sería el
resultado? */

(function () {
  console.log(`Este es el resultado`);
  let variable = "Mensaje de la varibale dentro de la IIFE";
  console.log(variable);
  return `mensaje de retorno`;
})();

let lenguaje = "Ruby";
(function () {
  let lenguaje = "JavaScript";
  console.log(`${lenguaje} es un lenguaje de programación`);
})();
console.log(lenguaje);

/* ES6 con IIFE */

const myFuncion = (()=>{
    let resultado = 335;
    return () => `El resultado es ${resultado}`;
})();

console.log(myFuncion());

let x = 34;
let y = 50;

const myFuncion2 = ((x,y)=>{
    console.log(x);
    console.log(y)
    let resultado = 335;
    let resultado2 = "ABCD";

    const funcionInterna = () => `El valor total es ${resultado + resultado2}`;

    const funcionInterna2 = (n3) => {
        console.log(`El valor es ${n3}`);
        let resultado3 = resultado + (Math.floor(Math.random()*n3))+100;
        return `El nuevo valor es ${resultado3}`;
    }

    return {
        valorUno: () => `El resultado es ${resultado}`,
        valorDos: `El resultado es ${resultado2}`,
        valorTres: 'Valor por defecto',
        valorResultado: resultado,
        funciones: funcionInterna,
        funciones2: funcionInterna2
    };
})(x,y);

console.log(myFuncion2);
console.log(myFuncion2.valorDos);
console.log(myFuncion2.valorUno());
console.log(myFuncion2.funciones());
console.log(myFuncion2.funciones2(1222));

