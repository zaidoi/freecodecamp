function translatePigLatin(str) {
  let firstWord = str[0]

  if(str.match(/^[aeiou]/)){
    str  = str + "way"
    console.log(str);
  }else{
    for(let i = 0; i < str.length; i++){
      if(str.match(/^[aeiou]/)  == str[i]){
       console.log(3);

      }
    }
    
  }

  
  
}

translatePigLatin("california");