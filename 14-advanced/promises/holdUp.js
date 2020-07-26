// setTimeout expects a callback -- it does not use Promise
// task: wrap setTimeout in a Promise

const holdUp = (duration) => {
  return new Promise((resolve) => {
    setTimeout(resolve, duration);
  });
}

// Make this code work:
holdUp(3000).then(() => {
  console.log('3 seconds has elapsed');
}).then(() => {
  console.log('have a nice day');
});
