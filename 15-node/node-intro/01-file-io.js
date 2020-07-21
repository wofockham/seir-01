// recreate the cat program in JS

const fs = require('fs'); // This is the builtin Node.js standard library.

// Synchronously: this is wrong
// const fileData = fs.readFileSync('simpsons.txt', 'utf-8');
// console.log( fileData );

// Maybe asynchronous Node.js functions implement the Error First Pattern:
// Callbacks usually receive:
//   1. error param (null if no error occurred)
//   2. data param

fs.readFile('simpsons.txt', 'utf-8', function (err, data) {
  if (err) {
    return console.error(err); // A bit wanky
  }

  console.log(data);
});

// TODO: Rewrite this code using Promises.
