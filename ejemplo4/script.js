
var edad = parseInt(prompt("¿Cuántos años tienes?",0));

if (edad >= 0) {
    console.log("Permitido")

    if (edad >= 18) {
        document.write("<h1>Bienvenido. Eres mayor de edad</h1>");
    } else {
        document.write("<h1>Lo siento. Eres menor de edad</h1>");
    }

} else {
    alert("El numero debe ser mayor o igual que cero");
}


var nombre = prompt("Ingrese el nombre", "Juan");
var apellido = prompt("Ingrese el apellido", "Apellido");

/* no se debe hacer, pára ello se usa operadores logicos */
if (nombre === "Juan") {
    if (apellido === "Duran") {
        if (edad >= 18) {
            console.log("cumplio todo")
        } else {
            console.log("no cumplio nada")
        }
    } else {
        console.log("no cumplio el apellido")
    }
} else {
    console.log("no cumplio el nombre")
}

if (nombre === "Juan" && apellido === "Duran" && edad >= 18) {
    document.write(`Bienvenido: ${nombre} ${apellido} \n`);
} else {
    document.write(`No es bienvenido. Eres otra persona \n`);
}

if (nombre === "Juan" || apellido === "Duran") {
    document.write(`\n Bienvenido: ${nombre} ${apellido}`);
} else {
    document.write(`Alguno de los dos valores no es permitido`);
}
