const say = require('say');
const fs = require('fs');
const _ = require('underscore');

if (fs.existsSync('./martin.json')) {
  const words = require('./martin.json');
  const rand = _.sample(words).sound;
  console.log( rand );
  say.speak( rand ); // ??
} else {
  console.log('Please run: npm run scrape');
}
