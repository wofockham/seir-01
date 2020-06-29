const form = document.querySelector('form');

const makeMadLib = function (event) {
  event.preventDefault();

  const noun = document.getElementById('noun').value;
  const adjective = document.getElementById('adjective').value;
  const person = document.getElementById('person').value;

  const story = `${ person } really likes ${ adjective } ${ noun }`;

  document.getElementById('story').innerText = story;
};

form.addEventListener('submit', makeMadLib);
