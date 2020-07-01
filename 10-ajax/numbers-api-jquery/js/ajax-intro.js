const fetchFact = function () {
  $.ajax('http://numbersapi.com/random/trivia?json').done(function (info) {
    $('#fetch').after(`<p>${ info.text }</p>`);
  });
};

$('#fetch').on('click', fetchFact);
fetchFact();
