function pairElement(str) {
  const getEl = function(char){
    switch(char){
      case 'A':
      return ['A', 'T'];
      case 'T':
      return ['T','A'];
      case 'G':
      return ['G','C'];
      case 'C':
      return ['C','G'];
    }
  }

  let newArr = []
  for(let i =0; i<str.length; i++){
    newArr.push(getEl(str[i]))
  }
  return newArr
}

pairElement("GCG");