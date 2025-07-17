function binaryAgent (str){
  let binaryArr = str.split(" ");
  let finalStr = ""
  
  for(let i = 0; i < binaryArr.length; i++){

    let charCode = parseInt(binaryArr[i],2);

    finalStr += String.fromCharCode(charCode)

  }
return finalStr
  
  
}

binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111")