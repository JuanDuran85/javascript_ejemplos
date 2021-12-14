/* Realizar un programa para un taller de
reparación de motores, donde necesitan
clasificar los motores en eléctricos, de explosión
o a vapor.
La empresa solicita crear el programa solo para
los motores del tipo eléctrico, los cuales se
clasifican dependiendo del tipo de corriente
eléctrica que requieran para su funcionamiento,
siendo esta Corriente Continua (CC) o Corriente
Alterna (AC). */

class Motores {
    constructor(serial, fabricante){
        this.serial = serial;
        this.fabricante = fabricante;
    }

    datosMotor(){
        return `El serial es: ${this.serial} y el fabricante es: ${this.fabricante}`;
    }
}

class Electricos extends Motores {
    constructor(serial, fabricante, potencia, corriente){
        super(serial, fabricante);
        this.potencia = potencia;
        this.corriente = corriente;
    }

    tipoCorriente(){
        return `El tipo de corriente es: ${this.corriente}`
    }
}

class CorrienteContinua extends Electricos {
    constructor(serial, fabricante, potencia, corriente, voltaje, tipo){
        super(serial, fabricante, potencia, corriente);
        this.voltaje = voltaje;
        this.tipo = tipo;
    }
}

class CorrienteAlterna extends Electricos {
    constructor(serial, fabricante, potencia, corriente, fases, frecuencia){
        super(serial, fabricante, potencia, corriente);
        this.fases = fases;
        this.frecuencia = frecuencia;
    }
}

let corrienteContinuaUno = new CorrienteContinua("FJKFH3545","GL","500w","5Amp","24V","Induccion");
console.log(corrienteContinuaUno);
console.log(corrienteContinuaUno.datosMotor());
console.log(corrienteContinuaUno.tipoCorriente());