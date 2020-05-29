$(document).ready(function () {
  const makeMadLib = function (event) {
    event.preventDefault(); // Disable the normal form behaviour: Stay on this page
    const noun = $('#noun').val();
    const adjective = $('#adjective').val();
    const person = $('#person').val();

    const story = `${ person } really likes ${ adjective } ${ noun }`;
    $('#story').text(story);
  };

  $('form').on('submit', makeMadLib); // clicking the button OR pressing Enter
});
