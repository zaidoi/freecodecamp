function smallestCommons(arr) {
  const [min,max] = arr.sort((a,b) => a - b)
  const range = []
  for(let i  = min;  i <= max; i++){
    range.push(i)
  }

  let maxNumber = max;
  while(true){
    let isCommon = range.every((num) => maxNumber % num === 0)
    if(isCommon){
      return maxNumber
    }
    maxNumber++;
  }


 }
 
 smallestCommons([1,5]);