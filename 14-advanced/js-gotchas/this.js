// `this` lets us access the current object inside a method, without knowing the variable name containing the object.

const groucho = {
  fullname: 'Groucho Julius Marx',
  greeting() {
    return `Good evening, my name is ${ this.fullname }`;
  }
}

console.log( 'bound/method', groucho.greeting() );

const unboundGreeting = groucho.greeting; // unboundGreeting is NOT a method.
console.log( 'unbound/function', unboundGreeting() );

// bind() //////////////////////////////////////////////////////////////////////
const boundGreeting = groucho.greeting.bind( groucho ); // we make `this` permanently the `groucho` object.
console.log( 'bind', boundGreeting());

const differentGreeting = groucho.greeting.bind( {fullname: 'Harpo', residence: 'NYC'}  );
console.log( differentGreeting() );

// .call() /////////////////////////////////////////////////////////////////////
console.log( unboundGreeting.call( groucho ) ); // Works again: `this` is `groucho`
console.log( unboundGreeting.call( {fullname: 'Chico Marx'} ) );

const numbers = [99, 88, 77, 66];
// .apply() ////////////////////////////////////////////////////////////////////
Math.max.apply( null, numbers ); // es5
Math.max( ...numbers ); // es6
