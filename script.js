

    function findLongestWordLength(str) {
        let splitArr = str.split(' ');
        let longest = ''
        for(let i = 0; i < splitArr.length; i++){
            if(splitArr[i].length > longest.length){
                longest = splitArr[i]
            }
        }
        return longest.length
      }
      
      
      
      const j = findLongestWordLength('The quick brown fox jumped over the lazy dog fgggggggg');
      console.log(j);
      
    