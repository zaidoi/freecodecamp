// spread and rest
//spread
let arr1 = [1,3,5]
let arr3 = [...arr1]
console.log(arr3); // [1,3,5]

// rest

function rest (...args){
    return args
}

rest("ss0",1,4)  // takes multiple argument and makes array