/**
 * Patron Observador: es un patrón de diseño de comportamiento que te permite definir un mecanismo de suscripción para notificar a varios objetos sobre cualquier evento que le suceda al objeto que están observando. Esta herramienta ofrece la posibilidad de definir una dependencia uno a uno entre dos o más objetos para transmitir todos los cambios de un objeto concreto de la forma más sencilla y rápida posible. Para conseguirlo, puede registrarse en un objeto (observado) cualquier otro objeto, que funcionará como observador. El primer objeto, también llamado sujeto, informa a los observadores registrados cada vez que es modificado.
 *
 * Observer Pattern: is a behavioral design pattern that lets you define a subscription mechanism to notify multiple objects about any events that happen to the object they’re observing. The Observer pattern suggests that you add a subscription mechanism to the publisher class so individual objects can subscribe to or unsubscribe from a stream of events coming from that publisher.
 */

//------------------------------------------------------------------------------------------

class Subject {
  //se inicializan los observadores
  constructor() {
    this.observers = new Array();
  }

  subscribe(observer) {
    this.observers.push(observer);
  }

  unSubribe(observer) {
    this.observers = this.observers.filter((obs) => obs !== observer);
  }

  notify(data) {
    this.observers.forEach((observer) => observer.refresh(data));
  }
}

class Observer {
  constructor(functionX) {
    this.functionX = functionX;
  }

  refresh(data) {
    this.functionX(data);
  }
}

const subjectOne = new Subject();
const observerOne = new Observer((dataIn) =>
  console.log(`Observador uno: ${dataIn}`)
);
const observerTwo = new Observer((dataIn) => {
  div1.innerHTML = `${dataIn}`;
});
const observerThree = new Observer((dataIn) => {
    div2.innerHTML = `${dataIn.split("").reverse().join("")}`;
})


subjectOne.subscribe(observerOne);
subjectOne.subscribe(observerTwo);
subjectOne.subscribe(observerThree);

console.log(subjectOne);
console.log(observerOne);
console.log(observerTwo);
console.log(observerThree);

function change() {
  subjectOne.notify(myText.value);
}
