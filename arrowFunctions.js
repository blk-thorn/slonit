const numbers = [1, 2, 3, 4, 5];

const myFilter = (array, callback) => {
  const result = [];

  for (let i = 0; i < array.length; i++) {
    if (callback(array[i], i, array)) {
      result.push(array[i]);
    }
  }
  return result;
};

const evenNumbers = myFilter(numbers, num => num % 2 === 0);

console.log(evenNumbers);

const greaterThanThree = myFilter(numbers, num => num > 3);

console.log(greaterThanThree);