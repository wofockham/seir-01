$(document).ready(function () {
  $('#name').on('focus', function () {
    $('header').addClass('active');
  }).on('blur', function () {
    $('header').removeClass('active');
  }).on('keyup', function () {
    const input = $(this).val();
    $('header h1').text('Welcome' + input);
  });

  const $bill = $('img'); // Cacheing
  $(window).on('mousemove', function (event) {
    $bill.css('opacity', event.clientY / window.innerHeight);
  });

  const randomColor = function () {
    return Math.random() * 255; /* 0-255 */
  };

  const $body = $('body'); // Cacheing
  $(window).on('mousemove', function () {
    const bgColor = `rgb(${ randomColor() }, ${ randomColor() }, ${ randomColor() })`;
    $body.css('background-color', bgColor);
  });
});
