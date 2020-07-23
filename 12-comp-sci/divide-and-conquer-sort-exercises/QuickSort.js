function quickSort(arr){
  if (arr.length <= 1) {
    return arr; // base case
  }

  const pivot = arr.pop(); // any value but get it consistently
  const lessThan = arr.filter(item => item <= pivot);
  const greaterThan = arr.filter(item => item > pivot);

  // const lessThan = [];
  // const greaterThan = [];
  // arr.forEach(function (element) {
  //   if (element < pivot) {
  //     lessThan.push(element);
  //   } else {
  //     greaterThan.push(element);
  //   }
  // })

  // recursion + recombining
  return quickSort(lessThan).concat(pivot, quickSort(greaterThan));
}

module.exports = quickSort;
