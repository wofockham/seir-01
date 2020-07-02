// throttling -- too many requests

const state = {
  page: 1,
  lastPageReached: false
};

const searchFlickr = function (keywords) {
  if (state.lastPageReached) {
    return; // exit
  }

  console.log('Searching Flickr for', keywords);

  const flickrURL = 'https://api.flickr.com/services/rest?jsoncallback=?'; // JSONP
  $.getJSON(flickrURL, {
    method: 'flickr.photos.search', // not to be confused with method="POST"
    api_key: '2f5ac274ecfac5a455f38745704ad084',
    text: keywords, // what we are actually searching for
    format: 'json',
    page: state.page++
  }).done(showImages).done(function (info) {
    if (info.photos.pages <= info.photos.page) {
      state.lastPageReached = true;
    }
    console.log(info); // debugging
  });
};

const showImages = function (results) {
  _( results.photos.photo ).each(function (photo) {
    const thumbnailURL = generateURL(photo);
    const $img = $('<img>', {src: thumbnailURL});
    $img.appendTo('#images'); // $('images').append($img);
  });
};

const generateURL = function (p) {
  return [
    'http://farm',
    p.farm,
    '.static.flickr.com/',
    p.server,
    '/',
    p.id,
    '_',
    p.secret,
    '_q.jpg' // Change 'q' to something else for different sizes (see docs)
  ].join('');
};

$(document).ready(function () {
  $('#search').on('submit', function (event) {
    event.preventDefault(); // disabled the form submission
    const term = $('#query').val();
    $('#images').empty();
    state.page = 1;
    state.lastPageReached = false;
    searchFlickr(term);

  });

  $(window).on('scroll', function () {
    const scrollBottom = $(document).height() - $(window).height() - $(window).scrollTop();
    if (scrollBottom <= 700) { // Experiment with this value.
      const term = $('#query').val();
      searchFlickr(term);
    }
  });
});
