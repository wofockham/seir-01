$(document).ready(function () {
  $('body').css('font-family', 'Arial, sans-serif');

  $('#nickname').text('The Blade');
  $('#favorites').text('purple, pink, red, green');
  $('#hometown').text('Sydney');

  $('li').addClass('listitem'); // implicit loop

  $('<img src="http://www.fillmurray.com/400/300">').appendTo('body');
  // $('body').append('<img src="http://www.fillmurray.com/400/300">');
});
