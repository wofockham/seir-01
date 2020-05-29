$(document).ready(function () {
  $('#name').on('focus', function () {
    console.log('focus');
  }).on('blur', function () {
    console.log('blur');
  });
});
