/*  si estamos en un video juego, el
cual será nuestra superclase, donde existen dos
subclases como tanques y aviones, ambos
objetos pueden tener propiedades y métodos
con el mismo nombre, como se muestra a en el
diagrama de clases: */

// clase padre - game
class Game {
    constructor(weight) {
        this.weight = weight;
    }

    stop() {
        return `El juego se encuentra detenido momentáneamente...`;
    }
}

// clase hija - tank
class Tank extends Game {
    constructor(weight, bullet){
        super(weight);
        this.bullet = bullet;
    }

    stop() {
        return `El Tanque se encuentra detenido...`;
    }
}

// clase hija - plane
class Plane extends Game {
    constructor(weight, bullet){
        super(weight);
        this.bullet = bullet;
    }

    stop() {
        return `El Avión apagó los motores...`;
    }
}

let juego1 = new Game(100);
console.log(juego1);
console.log(juego1.stop());

let tanque1 = new Tank(153, '12mm');
console.log(tanque1);
console.log(tanque1.stop());

let avion1 = new Plane(325, '40mm');
console.log(avion1);
console.log(avion1.stop());

console.log(juego1.stop());