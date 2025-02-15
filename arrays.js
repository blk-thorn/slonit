const numArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


function mySlice(array, start = 0, end = arr.length) {
    if (start < 0) start = array.length + start;
    if (end < 0) end = array.length + end;
  
    if (start >= end) return [];
  
    const result = [];
    for (let i = start; i < end; i++) {
      result.push(array[i]);
    }
    return result;
  }

  console.log(mySlice(numArray, 2, 5));


function myIndexOf(array, item, from = 0) {
    if (from < 0) from = Math.max(0, array.length + from);
  
       for (let i = from; i < array.length; i++) {
      if (array[i] === item) return i;
    }
    return -1;
  }

console.log(myIndexOf(numArray, 8, 1));


function myIncludes(array, item, from = 0) {
    if (from < 0) from = Math.max(0, array.length + from);

    for (let i = from; i < array.length; i++) {
      if (array[i] === item) return true;
    }
    return false;
  }


console.log(myIncludes(numArray, 9, -2));
console.log(myIncludes(numArray, 3, 3));
