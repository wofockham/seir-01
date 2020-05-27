document.body.style.fontFamily = "Arial, sans-serif";

const nickname = document.getElementById('nickname');
nickname.innerHTML = 'The Blade';

document.getElementById('favorites').innerHTML = 'purple, pink, red, green';
document.getElementById('hometown').innerHTML = 'Sydaney';

// Iterate through each li and change the class to "listitem". Add a style tag that sets a rule for "listitem" to make the color red.
const items = document.getElementsByTagName('li');
for (let i = 0; i < items.length; i++) {
  const item = items[i];
  item.className = 'listitem';
}

// Create a new img element and set its src attribute to a picture of you. Append that element to the page.
const bill = document.createElement('img'); // detached DOM node
bill.src = 'http://www.fillmurray.com/75/50';
document.body.appendChild( bill ); // attach it to the DOM
