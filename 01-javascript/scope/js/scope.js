// Scopes

// Global Scope ////////////////////////////////////////////////////////////////
const globalMessage = 'Hello World';

const showMessage = function () {
  console.log( globalMessage ); // globalMessage is in the global scope.
};

showMessage();
console.log('Still in scope', globalMessage);

// Function Scope //////////////////////////////////////////////////////////////
const showLocalMessage = function () {
  const localMessage = 'Goodbye Cruel World';
  console.log( localMessage );
};

showLocalMessage();
// console.log('Still in scope', localMessage);

// var inside a block //////////////////////////////////////////////////////////
if (23 === 23) {
  var hotdogs = 999; // var hotdogs persists after the block.
  console.log( hotdogs );
}

console.log( hotdogs );

// let inside a block //////////////////////////////////////////////////////////
if (24 === 24) {
  let goldfish = 777;
  console.log( goldfish ); // in block scope
}

// console.log( goldfish ); // goldfish has gone out of scope

const bros = ['groucho', 'harpo', 'chico'];

for (let i = 0; i < bros.length; i++) {
  console.log( bros[i] );
}

// console.log( i );

// Block scope (const has the same scope as let) ///////////////////////////////
if (25 === 25) {
  const password = 'swordfish'; // block scope
  console.log( password );
}
