/* Desarrollar  un  programa  en  JavaScript  que  calcule  la 
suma  de  tres  números  enteros  e  indique  el  resultado 
directamente en la función, es decir, sin retorno de valor 
alguno. */

const resultado = sumaValores(-5,6,8);
console.log(`El resultado de la suma de los tres numeros es: ${resultado}`);

function sumaValores(n3,n1,n2){
    //const result = n1 + n2 + n3;
    //console.log(`El resultado de la suma de los tres numeros es: ${result}`);
    return n1 + n2 + n3;
}

console.log(`El nuevo resultado es: ${sumaValores(4,7,2)}`);


/* Realizar  un  programa  en  JavaScript  que  calcule  el 
volumen de un cilindro mediante una función. A dicha 
función se le deberán pasar los valores del radio y la 
altura.  Luego,  debe  mostrar  el  resultado  del  volumen 
dentro de la misma función sin retornar ningún tipo de 
valor.  (Ayuda:  volumen  de  un  cilindro  es: 
PI*radio2*altura). */

function volumenCilindro(radio, altura){
    return `El volumen para el radio: ${radio} y la altura ${altura} es: ${Math.ceil(Math.PI*Math.pow(radio,2)*altura)}`;
}

const resultado2 = volumenCilindro(2,5);
console.log(resultado2);

/* trabajando con funciones anonimas */
/* Solicitar al usuario que ingrese dos números enteros, y 
dentro de una función anónima se realice la división de 
ambos números, retornando y mostrando, en el mismo 
llamado de la función, el resultado como una variable.  */

const divisionEntera = function (num1,num2){
    return num1/num2;
}

console.log(divisionEntera(10,2));

/* Recursividad con funciones */
// factorial de un numero entero

function factorialDeX(x){
    if(x > 1){
        return x * factorialDeX(x-1);
    } else {
        return x;
    }
}

console.log(factorialDeX(4));