function truthCheck(collection, pre) {
  let finalVal = collection.every((el) => Boolean(el[pre]))
  console.log(finalVal);
  

}

truthCheck([{name: "Quincy", role: "Founder", isBot: true}, {name: "Naomi", role: "", isBot: false}, {name: "Camperbot", role: "Bot", isBot: true}], "isBot");