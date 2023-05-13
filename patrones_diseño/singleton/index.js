/**
 *
 * Patron de Diseño - Singleton (Singleton Pattern)
 *
 * Que solamente existe un objeto de la clase
 * Singleton design pattern exposes a single instance that can be used by multiple components
 * It is a pattern that restricts the class to create only one instance.
 * They can be accessed globally and acts as a single access point for accessing the global state.
 */

class Singleton {
  constructor() {
    // evaluando elemento estatico (instancia)
    if (Singleton.instance) return Singleton.instance;
    Singleton.instance = this;
  }

  static getInstance() {
    return Singleton.instance;
  }
}

const singleton = new Singleton();
const singleton2 = new Singleton();
const singleton3 = Singleton.getInstance();
console.log(singleton === singleton2);
console.log(singleton2 === singleton3);
console.log(singleton3 === singleton);

// ---------------------------------------------------------------------------------
class WeekDaysClass {
  daysEs = [
    "Lunes",
    "Martes",
    "Miercoles",
    "Jueves",
    "Viernes",
    "Sabado",
    "Domingo",
  ];
  daysEn = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  constructor(lang) {
    this.lang = lang;

    if (WeekDaysClass.instance) return WeekDaysClass.instance;
    WeekDaysClass.instance = this;
  }

  getDays() {
    return this.lang === "es" ? this.daysEs : this.daysEn;
  }
}

const weekDaysObject = new WeekDaysClass('en');
const newWeekDaysObject = new WeekDaysClass('es');
console.log(weekDaysObject.getDays());
console.log(newWeekDaysObject.getDays());

// ---------------------------------------------------------------------------------

let instance;
let globalState = {
    color: ""
};

class StateUtility {
    constructor(){
        if(instance) throw new Error("New instance cannot be created!!");
        instance = this;
    }

    getPropertyByName(propertyName){
        return globalState[propertyName];
    }

    setPropertyValue(propertyName, propertyValue){
        globalState[propertyName] = propertyValue;
    }
}


const stateUtilityInstance = Object.freeze(new StateUtility());
console.log(stateUtilityInstance);
stateUtilityInstance.setPropertyValue("leng", "JS");
stateUtilityInstance.setPropertyValue("color", "Blue");
console.log(stateUtilityInstance.getPropertyByName("leng"));
console.log(stateUtilityInstance.getPropertyByName("color"));


