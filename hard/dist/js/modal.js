$(document).ready(function(){
 var button = $('#navbar-button');
 var modal = $('#modal');
 var close = $('#close');

 // Закрытие и открытие модального окна

 button.on('click', function(){
  modal.addClass('modal_active');
 });

 close.on('click', function(){
  modal.removeClass('modal_active');
 });

 // Кнопка наверх

 var top_show = 150; 
 var delay = 1000; 

 $(window).scroll(function () {
  if ($(this).scrollTop() > top_show) $('#button-up').fadeIn();
  else $('#button-up').fadeOut();
 });
 
 $('#button-up').click(function () { 
  $('body, html').animate({
    scrollTop: 0
  }, delay);
 });

});

