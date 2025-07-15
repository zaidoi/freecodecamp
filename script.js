function uniteUnique(...arr) {
  let finalArr = [];
  
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (!finalArr.includes(arr[i][j])) {
        finalArr.push(arr[i][j]);
      }
    }
  }
  return finalArr
  }
  
  uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);