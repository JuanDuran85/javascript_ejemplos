/* Funciones arrow o flechas */

/* let miFuncion = () => {
    console.log("mensaje desde la funcion flecha");
};

console.log(miFuncion);
miFuncion();

let potenciaNumero = numero => numero ** 2;
console.log(potenciaNumero(2));

let sumaNumeros = (numero1, numero2) => numero1 + numero2;
console.log(sumaNumeros(12, 3));

let promedioNumeros = (num1 = 5,num2 = 5,num3 = 5) => {
    let sumaParaPromedio = (num1,num2,num3);
    return sumaParaPromedio / 3;
}
console.log(promedioNumeros());

const usuario = {
    nombre: "Juan",
    mensaje: () => `El nombre del usuario es ${usuario.nombre}`
}
console.log(usuario.mensaje()); */

let boton = document.querySelector('#sumar');

boton.addEventListener('click', () => {
    let num1 = parseInt(document.getElementById('num1').value) || undefined;
    let num2 = parseInt(document.getElementById('num2').value) || undefined;
    let num3 = parseInt(document.getElementById('num3').value) || undefined;

    let suma = sumaNumeros(num1,num2,num3);

    document.getElementById("resultado").innerHTML = suma;

});


function sumaNumeros(n1 = 0, n2 = 0, n3 = 0) {
    return (n1 + n2 + n3);
}

/* hoisting */
let foo = {} 
foo.a = 2; 
foo.b = 3;
let roo = foo.a;
console.log(roo)
function sumar (a, b) { return a + b; }
sumar(foo.a, roo);
roo = foo.b;
console.log(roo);
