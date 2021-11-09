/* Usando funciones ciclos y varibales con let, var y const */
var resultado = 0;
var resultado = "cosas...";

function resta(n1,n2){
    resultado = n1 - n2;
    var valor = 234;
    return `la resta es: ${resultado}`;
}

for (let i = 0; i < 20; i++) {
    let x = Math.floor(Math.random() * (100 - 1)) + i;
    console.log(i);
}

const valorResta = resta(5,2);
console.log(valorResta);
console.log(resultado);
console.log(valor);


/* funciones flechas */

let promedioNumeros = (n1,n2,n3) => {
    return (n1 + n2 + n3) / 3;
}

let divideEntreTres = n1 => (n1/3);

let saludo = () => "hola mundo";

console.log(promedioNumeros(1,2,3));
console.log(divideEntreTres(34));
console.log(saludo());



