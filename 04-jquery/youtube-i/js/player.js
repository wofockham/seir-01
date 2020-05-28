const links = document.querySelectorAll('a');

for (let i = 0; i < links.length; i++) {
  const link = links[i]; // current link
  const href = link.getAttribute('href'); // equivalent to: link.href;
  const thumbnailURL = youtube.generateThumbnailUrl(href);
  const img = document.createElement('img'); // detached DOM node
  img.setAttribute('src', thumbnailURL);
  link.appendChild(img);
}
