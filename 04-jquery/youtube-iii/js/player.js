$(document).ready(function () {
  const thumbnailify = function ($link) {
    const href = $link.attr('href'); // .attr() getter (1 argument)
    const thumbnailURL = youtube.generateThumbnailUrl(href);

    const $img = $('<img>'); // detached DOM node
    $img.attr('src', thumbnailURL); // .attr() setter (2 arguments)

    $link.prepend($img);

    $link.click(function (event) {
      event.preventDefault(); // Disable navigation to the next page.
      const embedURL = youtube.generateEmbedUrl(href);
      $('#player').hide().html(`<iframe width="560" height="315" src="${ embedURL }" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`).fadeIn(3000);
    });
  };

  const $links = $('a'); // Hungarian notation for a jQuery object

  for (let i = 0; i < $links.length; i++) {
    thumbnailify( $($links[i]) );
  }

  $('h2').funText(100, 'reverseRainbow');
  $('a').funText(50, 'reverseRainbow');
});
