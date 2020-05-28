const $links = $('a'); // Hungarian notation for a jQuery object

for (let i = 0; i < $links.length; i++) {
  const link = $links[i]; // using square brackets with jQuery you get the raw DOM node
  const $link = $( link ); // put jQuery magic back onto the DOM node

  const href = $link.attr('href'); // .attr() getter (1 argument)
  const thumbnailURL = youtube.generateThumbnailUrl(href);

  const $img = $('<img>'); // detached DOM node
  $img.attr('src', thumbnailURL); // .attr() setter (2 arguments)

  $link.prepend($img);
}

// $('li a').each(function () {
//   const href = $(this).attr('href');
//   const thumbnailURL = youtube.generateThumbnailUrl(href);
//   const $img = $('<img>').attr('src', thumbnailURL); // chaining
//   $(this).prepend($img);
// });

// Too clever:
// $('li a').each(function () {
//   $(this).prepend(
//     $('<img>').attr('src', youtube.generateThumbnailUrl($(this).attr('href')))
//   )
// });
