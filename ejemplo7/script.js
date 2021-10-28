/* Utilizando funciones de manera basica */

restaValoresNuevos();
saludar();

function saludar(){
    document.write("Imprimiendo desde la funcion...");
}

var num1 = 5;
var num2 = 10;

function sumaNumeros(){
    console.log(num1 + num2);
    console.log(num1);
    console.log(num2);
}

sumaNumeros();

function restaValoresNuevos(){
    var num_1 = 20;
    var num_2 = 10;
    console.log("resta: ", num_1 - num_2);
}

/* argumentos y parametros */
function multiplicarValores(valor1, valor2){
    console.log(`La multiplicacion es: ${valor1*valor2}`);
}

multiplicarValores(3,5);

/* retorno de una funcion */
function dividirNumeros(valorX, valorY){
    var division = valorX / valorY;
    return division;
}

var resultado;
console.log("La division es: ");
console.log(dividirNumeros(200,10));
resultado = dividirNumeros(30,10);
console.log(`El resultado de la division es: ${resultado}`);
resultado = dividirNumeros(20,13);
console.log(`El resultado de la division es: ${resultado}`);
resultado = dividirNumeros(200,14);
console.log(`El resultado de la division es: ${resultado}`);
resultado = dividirNumeros(2,15);
console.log(`El resultado de la division es: ${resultado}`);
resultado = dividirNumeros(-20,16);
console.log(`El resultado de la division es: ${resultado}`);