const fetchCover = function (event) {
  event.preventDefault(); // prevent the browser from submitting the form data.
  const title = document.getElementById('book_title').value;

  const xhr = new XMLHttpRequest(); // 0
  const url = `https://www.googleapis.com/books/v1/volumes?q=title:${ title }`;
  xhr.open('GET', url); // 1
  xhr.send(); // THIS IS ASYNC // 2
  xhr.onreadystatechange = function () {
    if (xhr.readyState !== 4) {
      return; // not ready yet
    }

    const data = JSON.parse( xhr.responseText );
    const cover = data.items[0].volumeInfo.imageLinks.thumbnail;

    document.getElementById('cover').setAttribute('src', cover);
  };
};

const form = document.getElementById('search_form');
form.addEventListener('submit', fetchCover);
