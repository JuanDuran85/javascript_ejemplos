import Circulo from './Circulo';
console.log(Circulo);

class Usuario {
    constructor(nombre, edad){
        this.nombre = nombre;
        this.edad = edad;
    }

    saludar(){
        console.log(`Mensaje desde ${this.edad}`);
    }
}

let usuario1 = new Usuario("Juan",36);
console.log(usuario1);
console.log(usuario1.nombre);
usuario1.saludar();

class Rectangulo {
    constructor(x,y){
        this._base = x;
        this.altura = y;
    }

    get base(){
        return this._base;
    }

    calcularArea(){
        return this.base * this.altura;
    }

    calcularPerimetro(){
        return (2 * this.base) + (2 * this.altura);
    }
}

let circulo1 = new Circulo(1);
console.log(circulo1.radio);
console.log(`Area circulo1: ${circulo1.calcularArea()}`);
console.log(`Area circulo1: ${circulo1.calcularPerimetro()}`);
circulo1.radio = 5;
console.log(circulo1.radio);
console.log(`Area circulo1: ${circulo1.calcularArea()}`);
console.log(`Area circulo1: ${circulo1.calcularPerimetro()}`);