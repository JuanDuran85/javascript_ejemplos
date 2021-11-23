$(document).ready(function () {
    
    console.log($('#texto1'))
    console.log($('.clase1'));
    console.log($('li a')[1]);   

    $('#texto1').css('color', 'red');
    
    $('#id3').html('<p>Hola mundo desde jQuery</p>');
    $('#id2 p').hide(4000);

    $('#id1').addClass('fondoColor');

    let segundoLi = $('li a')[1];
    segundoLi.innerText = 'nuevo texto desde jQuery...';

    console.log($('li:first-child a'));
    $('li:first-child a').text('segundo texto agregado con Pseudo Classes');

    console.log($('li:nth-child(2) a'));

   $('button#btn1').on('click',()=>{
        $('#id2 p').toggle(4000);
        $('#id1').toggleClass('fondoColor');
   });


   console.log($('table tbody tr:eq(0)'));
   
   $('table tbody tr').each((i)=>{
    console.log(i);
    console.log($(`table tbody tr:eq(${i})`));
   });

   $('table tbody tr').each(function(i){
    console.log(i);
    console.log($(this));
   });

   $('ul').append('<li><a href="" class="clase2">Texto para link 4</a></li>');

   $('#btn2').on('click',()=>{
       $('table').animate({
            marginLeft: '50px',
            marginTop: '50px',
       },4000);
       $('#id2 p').animate({
            marginLeft: '50px',
            marginTop: '50px',
            background: 'red',
            fontSize: '30px',
       },4000);
   });
});