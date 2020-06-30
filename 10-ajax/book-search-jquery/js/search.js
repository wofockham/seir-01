const fetchCover = function (event) {
  event.preventDefault(); // prevent the browser from submitting the form data.
  const title = $('#book_title').val(); // string
  const url = `https://www.googleapis.com/books/v1/volumes?q=title:${ title }`;

  // New style jQuery: Deferreds
  $.ajax(url).done(function (data) {
    const cover = data.items[0].volumeInfo.imageLinks.thumbnail;
    $('#cover').attr('src', cover);
  }).done(function (response) {
    console.log(response);
  }).fail(function () {
    alert('Something bad happen');
  });

  // Classic jQuery:
  // $.ajax(url, {
  //   success: function (data) {
  //     const cover = data.items[0].volumeInfo.imageLinks.thumbnail;
  //     $('#cover').attr('src', cover);
  //   },
  // });
};

const $form = $('#search_form');
$form.on('submit', fetchCover);
