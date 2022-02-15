/* 

  Patron Comando
  Entrega una interfaz unificada para que se puedan ejecutar los metodos de algun objeto.
  En lugar de llamar a un metodo del objeto, se llama a la interfaz del comando.

*/

const Commander = (() => {
  const directive = {
    comprar: (x) => {
      console.log(`Comprando ${x}`);
    },
    vender: (x) => {
      console.log(`Vendiendo ${x}`);
    },
  };

  return {
    run: (command, data) => {
      if (directive[command]) {
        directive[command](data);
      } else {
        console.log(`No se encontro el comando ${command}`);
      }
    },
  };
})();

Commander.run("comprar", "producto");
Commander.run("alquilar", "producto");

/* 
  
    Cadena de responsabilidad: se base en encapsular un dato e ir agregando metodos para alterar el valor que contine 
  
*/

class Suma {
  constructor(v = 0) {
    this.valor = v;
  }

  sumar(v) {
    this.valor += v;
    // al retornar this se puede empezar a encadenar el metodo una y otra vez
    return this;
  }
}

const nuevaSuma = new Suma(1);
console.log(nuevaSuma);
console.log(nuevaSuma.valor);
console.log(nuevaSuma.sumar(1).sumar(1).sumar(1));


/* 

  Patron iterador: mediante una funcion, objeto o clase podremos acceder a los metodos next y value y saber si se ha terminado de iterar una coleccion 

*/

function* iterador(col) {
  let nextIndex = 0;

  while (nextIndex < col.length) {
    yield col[nextIndex++];
  }
}

const arreglo = [1,2,3,4,5];
const generador = iterador(arreglo);
console.log(generador.next());
console.log(generador.next());
console.log(generador.next());
console.log(generador.next());
console.log(generador.next());
console.log(generador.next());