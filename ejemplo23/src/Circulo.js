export default class Circulo {
    constructor(r){
        this._radio = r;
    }

    get radio(){
        return this._radio;
    }

    set radio(nuevoRadio){
        this._radio = nuevoRadio;
    }

    calcularArea(){
        return Math.PI * (this.radio ** 2);
    }

    calcularPerimetro(){
        return 2*Math.PI*this.radio;
    }
}