function chunkArrayInGroups(arr, size) {
    const newArr = [];
    for(let i= 0; i<arr.length; i+=size){
        newArr.push(arr.slice(i,i+size))
    }
     
  }
  
  chunkArrayInGroups([0,1,2,3,4,5], 2);