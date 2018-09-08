$(".title").click(function () {
  var place = $(this).attr('href');
  $('html, body').animate({
    scrollTop: $(place).offset().top
  }, 500);
});