function whatIsInAName(collection, source) {
  let sourceKeys = Object.keys(source)

  let result = collection.filter((item) => sourceKeys.every((key) => item[key] === source[key]))
  return result
}

whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });

whatIsInAName([{ "apple": 1, "bat": 2 }, { "apple": 1 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "cookie": 2 }) 

//should return [{ "apple": 1, "bat": 2, "cookie": 2 }].