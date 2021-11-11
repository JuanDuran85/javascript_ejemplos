let boton = document.querySelector('#boton');
console.log(boton);
//-----------------------------------------------
/* primera manera de trabajar con la funcion */
/* boton.addEventListener('click',function(){
    console.log(`boton pulsado`);
}); */
//-----------------------------------------------
//-----------------------------------------------
/* segunda manera de trabajar con la funcion */
/* boton.addEventListener('click', saludar);

function saludar(){
    console.log(`hola mundo`);
    console.log(`boton pulsado`);
} */

//-----------------------------------------------
//-----------------------------------------------
/* tercera manera de trabajar con la funcion */
let inputUsuario = document.querySelector('input');
let resultado = document.querySelector('.resultado');

boton.addEventListener('click', ()=>{
    resultado.innerHTML = inputUsuario.value;
});


//-----------------------------------------------