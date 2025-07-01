// destructing object

const value = {
    name :"zaid",
    surname:"badgujar"
}

const { name: firstName , surname:lastName} = value // firstName = zaid lastName = badgujar

// nested destructing

const LOCAL_FORECAST = {
    yesterday: { low: 61, high: 75 },
    today: { low: 64, high: 77 },
    tomorrow: { low: 68, high: 80 }
  };
  
  // Only change code below this line
    
  const {today :{ low: lowToday, high: highToday}} = LOCAL_FORECAST
  

  // array destructuring 

  const arr = [1,2,3,4,5];
  [a, b] = arr // 12 or comma ,, for differnt val

  // or swapping
   let a=4 , b=5;
   [a,b]=[b,a]// 4 , 5

   // rest destructing
   function removeFirstTwo(list) {
    const [a,b,...arr] = list
      return arr;
    }
    
    const source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const sourceWithoutFirstTwo = removeFirstTwo(source);

    // Use Destructuring Assignment to Pass an Object as a Function's Parameters

    const stats = {
        max: 56.78,
        standard_deviation: 4.34,
        median: 34.54,
        mode: 23.87,
        min: -0.75,
        average: 35.85
      };
      
      // Only change code below this line
      const half = ({ max, min }) => (max + min) / 2.0;
      // Only change code above this line