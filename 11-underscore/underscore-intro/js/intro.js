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
// map() lets you create new arrays from old arrays.
console.log( nums );

const byFive = function (n) {
  return n * 5;
};

const multiplesOfFive = _(nums).map(byFive);
console.log( multiplesOfFive );

// Objects:
const grouchoFacts = _(groucho).map(function (v, k) {
  return `${ k } is ${ v }.`;
});
console.log( grouchoFacts );

// .reduce() ///////////////////////////////////////////////////////////////////
const sum = _(nums).reduce(function (runningTotal, n) {
  console.log(`runningTotal: ${ runningTotal }, n: ${ n }`);
  return runningTotal + n;
});
console.log( sum );

// .reduce() also works for objects.

// .find() /////////////////////////////////////////////////////////////////////
const firstMultipleOfFive = _(nums).find(function (candidate) {
  console.log('considering', candidate, 'result', candidate % 5 === 0);
  return candidate % 5 === 0;
});
console.log( firstMultipleOfFive );

// .find() also works for objects.

// .filter() ///////////////////////////////////////////////////////////////////
const divisibleByThree = function (n) {
  console.log(`considering: ${ n }, result: ${ n % 3 === 0 }`)
  return n % 3 === 0;
};

const firstMultipleOfThree = _(nums).find(divisibleByThree); // first
console.log( firstMultipleOfThree ); // 3

const allMultiplesOfThree = _(nums).filter(divisibleByThree); // all
console.log( allMultiplesOfThree ); // 3, 6, 9

// reject() ////////////////////////////////////////////////////////////////////
const nonMultiplesOfThree = _(nums).reject(divisibleByThree); // all that return false
console.log( nonMultiplesOfThree ); // 1, 2, 4, 5, 7, 8

// .pluck() ////////////////////////////////////////////////////////////////////
const bros = [
  {name: 'Groucho', instrument: 'guitar', disposition: 'surly'},
  {name: 'Harpo', instrument: 'harp', disposition: 'fool'},
  {name: 'Chico', instrument: 'piano', disposition: 'sleazy'}
];

console.log( _(bros).pluck('instrument') );

// .max() //////////////////////////////////////////////////////////////////////
console.log( _(nums).max() );

// .min() //////////////////////////////////////////////////////////////////////
console.log( _(nums).min() );

// .sortBy() ///////////////////////////////////////////////////////////////////
console.log( _(bros).sortBy('name') );

// .shuffle() and .sample() ////////////////////////////////////////////////////
