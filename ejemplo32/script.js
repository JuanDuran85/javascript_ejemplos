class Usuario {
    constructor(nombre) {
        let _nombre = nombre;
        this.getNombre = () => _nombre;
        this.setNombre = (newNombre) => _nombre = newNombre;
    }

    get nombre(){
        return this.getNombre();
    }

    set nombre(newNombre){
        this.setNombre(newNombre);
    }

    saludar() {
        console.log(`Bienvenido usuario: ${this.nombre}`);
    }
}
class Administrador extends Usuario {
    saludar() {
        console.log(`Panel de Administración-Usuario: ${this.nombre}`);
    }
}

/* el Object.freeze bloquea un objeto de agregar nuevas propiedades o atributos */

let adminUser = Object.freeze(new Administrador("Juan"));
adminUser.nombre = "Jose";
console.log(adminUser);
adminUser.saludar();