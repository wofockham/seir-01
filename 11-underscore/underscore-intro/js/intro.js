console.log( _.VERSION );

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// .each() /////////////////////////////////////////////////////////////////////
// es5 or greater you have .forEach

// Alternative syntax (this is preferred in the documenation):
// _.each(nums, function (number) {
//   console.log( number );
// });

// More Rubyish:
_(nums).each(function (number, index, entireArray) {
  console.log( 'number', number, 'index', index, 'entireArray', entireArray );
});

// Objects:
const obj = {
  4: 'four',
  5: 'five',
  'six': 6
};

_(obj).each(function (value, key, entireObject) {
  console.log('value', value, 'key', key, 'entireObject', entireObject);
});

const groucho = {
  name: 'Groucho Marx',
  instrument: 'guitars',
  disposition: 'very nice'
};

_(groucho).each(function (v, k) {
  console.log(`${ k.toUpperCase() } is ${ v }.`)
});

// .map() //////////////////////////////////////////////////////////////////////
