/* se puede trabajar directo con una variable que lleve el nombre del id que se encuentra en el elemento HTML*/
lista1.innerHTML = "Ingrese el nombre sin variable: ";

let lista2 = document.querySelector("#lista2");

lista2.setAttribute("type","submit");
lista2.setAttribute("value","Enviar Formulario");
lista2.setAttribute("id","envioFormulario");
lista2.setAttribute(
    "style","color: blue; background-color: gray; font-size: 20px;"
);