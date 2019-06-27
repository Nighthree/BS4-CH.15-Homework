$(document).ready(function () {
  $('.heart').click(function (e) {
    e.preventDefault();
    $(this).find('.heart-border').toggleClass('show');
    $(this).find('.heart-full').toggleClass('show');
  });

  $('.e-bill').click(function (e) { 
    e.preventDefault();
    $(this).addClass('active');
    $('.post-bill').removeClass('active');
    $('.e-bill-address').addClass('open');  
    $('.post-bill-address').removeClass('open');
  });

  $('.post-bill').click(function (e) { 
    e.preventDefault();
    $(this).addClass('active');
    $('.e-bill').removeClass('active');
    $('.post-bill-address').addClass('open');  
    $('.e-bill-address').removeClass('open');
  });
});