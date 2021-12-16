/* Crear una clase para cada nivel en conjunto con
sus atributos y métodos, siendo la clase padre o
superior “Animal”, mientras que las otras clases
van a ir heredando de la clase padre los
atributos y métodos disponibles. */

document.querySelector('form').addEventListener('submit',(e)=>{
    e.preventDefault();
    
    let muestra = document.querySelector('#muestra');
    muestra.innerHTML = "";
    let name = document.querySelector('#animal').value;
    let food = document.querySelector('#herbivoro').value;
    let lengthRun = document.querySelector('#fitofago').value;

    let deer = new Fitofago(name,food,lengthRun);

    muestra.innerHTML = `
    <div class="card text-white bg-danger my-5 mx-auto">
        <div class="card-header">Resultado</div>
            <div class="card-body">
                <h5 class="card-title">Informacion Generada</h5>
                <p class="card-text">${deer.infoFitofago()}</p>
            </div>
        </div>
    </div>
    `;
});


class Animal {
    constructor(name){
        this._name = name;
    }

    get Name(){
        return this._name;
    }

    set Name(nameNew) {
        this._name = nameNew;
    }
}

class Herbivoro extends Animal {
    constructor(name, food){
        super(name);
        this._food = food;
    }

    get Food(){
        return this._food;
    }

    set Food(newFood){
        this._food = newFood;
    }

}

class Fitofago extends Herbivoro {
    constructor(name, food, length){
        super(name, food,);
        this._length = length || "3000";
    }

    get Length(){
        return this._length;
    }

    set Length(newLength){
        this._length = newLength;
    }

    infoFitofago(){
        return `Name: ${this.Name}, Food type: ${this.Food}, Length: ${this.Length}`;
    }
}
