$(function() {

  $('.navi').click(function(){
    $('.list-menu').fadeIn();
    $('.navi').fadeOut();
  });

  $('.close-modal').click(function(){
    $('.list-menu').fadeOut();
    $('.navi').fadeIn();
  });
  
  });
