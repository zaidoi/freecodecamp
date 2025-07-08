function frankenSplice(arr1, arr2, n) {
   let resultarr = arr2.slice()
   resultarr.splice(n,0,...arr1)
    console.log(resultarr);
    
   }
   
   frankenSplice([1, 2, 3], [4,5], 1);