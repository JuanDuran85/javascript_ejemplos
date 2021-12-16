/* Generar una función que reciba dos números y dentro de
ella se debe definir una función que realice la suma de
ambos números. */

const numeros = (n1,n2) => {
    const suma = () => n1 + n2;
    return suma();
}

console.log(numeros(4,5));


const numerosDos = (n1,n2) => {
    return {
        suma: () => n1 + n2,
    }
}

console.log(numerosDos(67,3).suma());