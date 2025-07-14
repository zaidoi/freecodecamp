function fearNotLetter(str) {
  for(let i = 0; i < str.length;i++){
    const charcode = str.charCodeAt(i);

    if(charcode !== str.charCodeAt(0) + i){
      return String.fromCharCode(charcode -1);
    }

  }
  return undefined
}

fearNotLetter("abce");