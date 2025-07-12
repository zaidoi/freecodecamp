function sumAll(arr) {
  const sortFirst = arr.sort((a,b) => a-b);
  let firstElement = sortFirst[0]
  let lastElement = sortFirst[1]
  let sumArr = 0
 for(let i = firstElement; i <= lastElement; i++){
     sumArr = sumArr + i
 }
  
  console.log(sumArr);
  
}

sumAll([10, 5]);