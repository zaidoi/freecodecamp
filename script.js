function addTogether(a,b) {
  function check(num){
    return typeof(num) === "number"
  }

  if(arguments.length === 2){
    if(check(a) && check(b)){
      return a + b
    }else{
      return undefined
    }
  }

  if(arguments.length === 1 && check(a)){
    return function(){
      if(check(n)){
      return a + n
      }
    }
    }else{
      return undefined
    }

    return undefined
  }

  


addTogether(2);