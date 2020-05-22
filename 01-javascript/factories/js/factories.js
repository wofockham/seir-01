// Factories: Mass Produce Objects

const catFactory = function (n, a, f) {
  return {
    name: n,
    age: a,
    furColor: f,
    species: 'feline',
    carnivore: true,
    meow: function () {
      console.log('Meow, my name is ' + this.name); // self
    },
    eat: function (food) {
      console.log(`Yum I love to eat ${ food }`);
    }
  };
};

const angel = catFactory('Angel', 18, 'grey');

const cuteCats = [
  catFactory('Angel', 18, 'grey'),
  catFactory('Evil', 14, 'red'),
  catFactory('Meh', 12, 'white')
];

for (let i = 0; i < cuteCats.length; i++) {
  console.log( cuteCats[i].furColor );
}


// Prototypal Inheritance
// Historically interesting but not essential (for now anyway):

// Constructor (similar to a factory but with more magic)
const Cat = function (n, a, f) {
  // No need to create an object: the object is already there and it's called `this`
  this.name = n;
  this.age = a;
  this.furColor = f;
  this.meow = function () {
    console.log('Meow, my name is ', this.name);
  }
  // No need to return this: it gets returned automagically.
};

// Instances
const cooper = new Cat('Cooper', 4, 'striped');
const audrey = new Cat('Audrey', 4, 'striped');


// The main "advantage" of prototypes:
// You can extend the prototype AFTER you create your Instances.

Cat.prototype.species = 'feline';
Cat.prototype.eat = function (food) {
  console.log('Yum, I love to eat ' + food);
}

console.log(audrey.species); // 'feline'
cooper.eat('hotdogs');
