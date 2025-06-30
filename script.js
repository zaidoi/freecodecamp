// Recursion of two numbers

function rangeOfNumbers(startNum, endNum) {
    if (startNum > endNum) {
      return []; // base case
    } else {
      const countArray = rangeOfNumbers(startNum, endNum - 1);
      countArray.push(endNum);
      return countArray;
    }
  }
  