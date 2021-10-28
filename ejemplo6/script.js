/* utilizando for */

for (var i = 0; i < 10; i++) {
    document.write(`<h6>Ejemplo ${i+1}</h6>`);
}

for (var j = 1; j <= 10; j++) {
    document.write(`<h6>Nuevo Ejemplo ${j}</h6>`);
}

var numero = parseInt(prompt("Ingrese un numero: ", 1));

var total_productos = 0;

for (var k = 1; k <= numero; k++) {
    var pvp = parseInt(prompt(`Ingrese el costo del producto N°${k}: `, 0));
    total_productos += pvp; // total_productos = total_productos + pvp
    document.write(`<h6>Numero del usuario: ${numero}. Cuenta: ${k}</h6>`);
}

document.write(`<h2>Total costo de productos: ${total_productos}</h2>`)

/* ciclo while */

var cuenta = 1;
while (cuenta <= numero) {
    document.write(`<h6>Numero del usuario: ${numero}. Cuenta con while: ${cuenta}</h6>`);
    cuenta++;
}

/* ciclo do-while */
var valor = 1;
do {
    document.write(`<h6>Numero del usuario: ${numero}. Cuenta con do-while: ${valor}</h6>`);
    valor++
} while (valor <= numero);