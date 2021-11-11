let formulario = document.getElementById("formulario");
let email = document.querySelector(".email");
let password = document.querySelector(".password");
let resultado = document.querySelector(".resultado");
let regExpUno = /\d/;
let regExpDos = /^[0-9]+$/;
let regExpTres = /^[\d]+$/;

formulario.addEventListener("submit",(e)=>{
    e.preventDefault();
    resultado.removeAttribute("class");
    console.log("Formulario enviado");
    console.log(email.value);
    console.log(password.value);
    
    if (regExpTres.test(password.value)) {
        resultado.innerHTML = `Email: ${email.value}. Password: ${password.value}`;
    }else {
        resultado.innerHTML = `No se puede procesar porque la clave no es permitda`;
        resultado.setAttribute("class","error");
    }
});