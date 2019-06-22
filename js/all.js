$(document).ready(function () {
  $('.heart').click(function (e) {
    e.preventDefault();
    $(this).find('.heart-border').toggleClass('show');
    $(this).find('.heart-full').toggleClass('show');
  });
});