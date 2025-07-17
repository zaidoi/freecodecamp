function dropElements(arr, func) {
  while(arr.length > 0){
  if(func(arr[0])){
    console.log(arr);
    return arr
  }else{
    arr.shift()
  }
return []
}
}
dropElements([0, 1, 0,1], function(n) {return n === 1; });