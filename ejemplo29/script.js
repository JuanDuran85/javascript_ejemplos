/* Implementar una aplicación que muestre películas y series bajo demanda, llamada “MyApp”. Partir
con un modelo de herencia simple, como se muestra en la imagen. En el modelo, en primer lugar
tendremos una clase denominada “Película”, la cual define el nombre de las películas, de esta clase
heredarán las clases “Largometrajes” y “Cortometrajes”, cada una de estas tienen como atributo
los tiempos de duración de cada una (“runtime”), siendo un método que permite obtener o
modificar el valor, mediante “get” y “set” */

// clase padre pelicula
class Pelicula {
  constructor(name) {
    this._name = name;
  }

  get name() {
    return this._name;
  }
}

// clase hija largometraje
class Largometrajes extends Pelicula {
  constructor(name, runTime) {
    super(name);
    this._runTime = runTime;
  }

  get runTime() {
    return this._runTime;
  }

  set runTime(newRunTime) {
    this._runTime = newRunTime;
  }
}

// clase hija cortometraje
class Cortometrajes extends Pelicula {
  constructor(name, runTime) {
    super(name);
    this._runTime = runTime;
  }

  get runTime() {
    return this._runTime;
  }

  set runTime(newRunTime) {
    this._runTime = newRunTime;
  }
}

// clase independiente
class MyApp {
  play(pelicula) {
    return `la película ${pelicula.name} se está
        reproduciendo...tiene una duración de ${pelicula.runTime || 0} ${pelicula.runTime ? 'minutos' : "No tiene tiempo la pelicula"
    } `;
  }
}

/*     ------------------------------------------------

*****Operador Ternario******
 (operacion booleana por evaluar) ? (valor si es verdadero) : (valor si es falso);

if(operacion booleana por evaluar){
    valor si es verdadero
} else {
    valor si es falso
}
------------------------------------------------ */
// instanciar clases

let peliculaUno = new Pelicula("ABC");

let largoUno = new Largometrajes("ABC", 120);

let cortoUno = new Cortometrajes("ABCDER", 60);

let app1 = new MyApp();

document.querySelector('#seleccion').addEventListener('change', (e) => {
    e.preventDefault();
    let valor = document.querySelector('#seleccion').value;

    if (valor == 'cortometraje') {
       resultado.innerHTML = app1.play(cortoUno)
    } else if (valor == 'largometraje') {
        resultado.innerHTML = app1.play(largoUno)
    } else {
        resultado.innerHTML = "";
    }
})
