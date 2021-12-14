/* clases y herencia  con ES5 */

/* let persona_uno = {
    nombre: "Juan",
    saludar: function () {
      console.log(`Hola, soy ${this.nombre}`);
    },
  };
  
  console.log(persona_uno);
  
  let persona_dos = Object.create(persona_uno);
  console.log(persona_dos); */

  /* ----------------------------------------------------------------------------- */


  /* Crear una clase padre o principal, mediante una
función constructora con el nombre de
“FiguraGeometrica”, la cual recibe como parámetros
los valores de un lado de la figura.
Además, se solicita crear una clase denominada
“Polígono”, pero que herede las propiedades de la
clase padre. Además, la clase Polígono debe poseer
un método propio que permita calcular el área de la
figura geométrica con las propiedades inicializadas
en la clase padre */

// clase padre con funcion constructora para ES5

/* function FiguraGeometrica(lado) {
    this.lado = lado;
}

// funcion construtora hija
function Poligono(lado){
    FiguraGeometrica.call(this, lado); // super
}
Poligono.prototype = Object.create(FiguraGeometrica.prototype); //extends

Poligono.prototype.calcularArea = function(){
    return this.lado * this.lado;
} */


class FiguraGeometrica {
    constructor( lado ){
        this.lado = lado;
    }
}

class Poligono extends FiguraGeometrica {
    constructor(lado){
        super(lado);
    }
    calcularArea(){
        return this.lado * this.lado;
    }
}


let poligonoUno = new Poligono(3);
console.log(poligonoUno)
console.log(poligonoUno.calcularArea())

