'use strict';

var state = {
  nextPage: 1,
  lastPageReached: false // flag
};

var searchFlickr = function searchFlickr(keywords) {
  if (state.lastPageReached) {
    return; // exit
  }

  console.log('Searching Flickr for', keywords);

  var flickrURL = 'https://api.flickr.com/services/rest?jsoncallback=?'; // JSONP
  $.getJSON(flickrURL, {
    method: 'flickr.photos.search', // not to be confused with method="POST"
    api_key: '2f5ac274ecfac5a455f38745704ad084',
    text: keywords, // what we are actually searching for
    format: 'json',
    page: state.nextPage++
  }).done(showImages).done(function (info) {
    if (info.photos.pages <= info.photos.page) {
      state.lastPageReached = true;
    }
    console.log(info); // debugging
  });
};

var showImages = function showImages(results) {
  _(results.photos.photo).each(function (photo) {
    var thumbnailURL = generateURL(photo);
    var $img = $('<img>', { src: thumbnailURL });
    $img.appendTo('#images'); // $('images').append($img);
  });
};

var generateURL = function generateURL(p) {
  return ['http://farm', p.farm, '.static.flickr.com/', p.server, '/', p.id, '_', p.secret, '_q.jpg' // Change 'q' to something else for different sizes (see docs)
  ].join('');
};

$(document).ready(function () {
  $('#search').on('submit', function (event) {
    event.preventDefault(); // disabled the form submission
    var term = $('#query').val();
    $('#images').empty();
    state.nextPage = 1;
    state.lastPageReached = false;
    searchFlickr(term);
  });

  var searchFlickrDebounced = _.debounce(searchFlickr, 4000, true);

  $(window).on('scroll', function () {
    var scrollBottom = $(document).height() - $(window).height() - $(window).scrollTop();
    if (scrollBottom <= 700) {
      // Experiment with this value.
      var term = $('#query').val();
      searchFlickrDebounced(term);
    }
  });
});