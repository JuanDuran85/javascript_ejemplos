let contenedor = document.getElementById('contenedor');
console.log(contenedor);

let texto = document.getElementById('texto');
console.log(texto);

let menu = document.getElementsByClassName('menu');
console.log(menu);

let item = document.getElementsByClassName('item');
console.log(item);

let etiquetaLi = document.getElementsByTagName('li');
console.log(etiquetaLi);

let etiquetaParrafoAll = document.querySelectorAll('p');
console.log(etiquetaParrafoAll);

let etiquetaP = document.querySelector('p#texto2');
console.log(etiquetaP);

etiquetaP.innerHTML = '<strong>Mensaje nuevo desde el documento</strong>';
etiquetaP.setAttribute('style', 'color: red;');