// Promises are an evolution of callbacks
//   a way to handle or process data from an asynchronous process, whenever that process is finished.

const fs = require('fs');

// readFile is asynchronous
// fs.readFile('simpsons.txt', 'utf-8', (err, content) => {
//   // error first pattern
//   if (err) {
//     throw err; // dramatic return
//   }
//
//   console.log( content );
// });

// A promise wrapper around fs.readFile
const readFile = (filename) => {
  // resolve and reject are functions that when you call them, themselves run the .then or .catch callbacks
  return new Promise((resolve, reject) => {
    fs.readFile(filename, 'utf-8', (err, content) => {
      if (err) {
        return reject( err );
      }

      resolve( content );

    })
  });
}

// readFile('simpsons.txt').then((fileContent) => {
//   console.log( fileContent );
// }).catch((err) => {
//   console.log('Something bad happen');
// });

const fileReadingPromise = readFile('simpsons.txt');

fileReadingPromise.catch((err) => {
  console.error('Something bad happen');
});

fileReadingPromise.then((content) => {
  console.log( content );
});

fileReadingPromise.then((c) => {
  console.log('here is the content again but this time in uppercase');
  console.log( c.toUpperCase() );
});

// Further evolution of Promises:
// If a method returns a Promise, we can pretend it's actually synchronous using await/async

const printSimpsons = async () => {
  const theSimpsons = await readFile('simpsons.txt'); // Fake sync
  console.log('fake sync', theSimpsons);
};

console.log('ASYNC AWAIT EXAMPLE');
printSimpsons();
