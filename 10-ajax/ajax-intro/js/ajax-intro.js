const fetchFact = function () {
  const xhr = new XMLHttpRequest();

  xhr.onreadystatechange = function () {
    if (xhr.readyState !== 4) return; // not ready

    const p = document.createElement('p');
    const data = JSON.parse(xhr.responseText); // convert to a JS object
    p.innerHTML = data.text;
    document.body.appendChild(p);
  };

  xhr.open('GET', 'http://numbersapi.com/random/trivia?json');
  xhr.send(); // async
};

document.getElementById('fetch').addEventListener('click', fetchFact);
fetchFact();
